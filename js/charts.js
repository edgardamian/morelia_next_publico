/**
 * charts.js - Chart.js Visualizations & Analytics for Morelia NExT Dashboard
 */

class DashboardCharts {
  constructor() {
    this.leaderboardChart = null;
    this.radarChart = null;
  }

  init() {
    // Configuración global de Chart.js para estética Cyber / Dark Mode
    if (window.Chart) {
      Chart.defaults.color = '#94a3b8';
      Chart.defaults.font.family = "'Inter', sans-serif";
      Chart.defaults.font.size = 11;
      Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(11, 17, 27, 0.95)';
      Chart.defaults.plugins.tooltip.borderColor = 'rgba(204, 255, 0, 0.3)';
      Chart.defaults.plugins.tooltip.borderWidth = 1;
      Chart.defaults.plugins.tooltip.titleColor = '#ffffff';
      Chart.defaults.plugins.tooltip.bodyColor = '#e2e8f0';
      Chart.defaults.plugins.tooltip.padding = 10;
      Chart.defaults.plugins.tooltip.cornerRadius = 6;
    }
  }

  // 1. Gráfico de Barras Horizontal (Leaderboard Diamante)
  renderLeaderboard(containerCanvasId, citiesFeatures, state) {
    const canvas = document.getElementById(containerCanvasId);
    if (!canvas) return;

    const { selectedYear, selectedSubindex, selectedIndicator, selectedSizeFilter } = state;
    const is2026 = selectedYear === '2026';
    const isDelta = selectedYear === 'delta';

    // Filtrar por tamaño si aplica
    let filtered = citiesFeatures.map(f => f.properties);
    if (selectedSizeFilter !== 'all') {
      filtered = filtered.filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === selectedSizeFilter);
    }

    // Preparar datos según indicador o subíndice
    let items = [];
    if (selectedIndicator) {
      const cod = selectedIndicator.codigo_base;
      items = filtered.map(p => {
        const v26 = p[`${cod}_2026`];
        const v24 = p[`${cod}_2024`];
        const pos = p[`${cod}_pos`];
        const des = p[`${cod}_des`];

        let displayVal = 0;
        if (isDelta) {
          displayVal = (v26 !== null && v24 !== null) ? Number((v26 - v24).toFixed(2)) : 0;
        } else {
          displayVal = (is2026 ? v26 : v24) ?? 0;
        }

        return {
          name: p.NOMBRE,
          value: displayVal,
          raw2026: v26,
          raw2024: v24,
          pos: pos,
          desempeno: des,
          isMorelia: p.NOMBRE.toLowerCase() === 'morelia'
        };
      });

      // Ordenar por valor descendente (o si es delta por cambio)
      items.sort((a, b) => b.value - a.value);
    } else if (selectedSubindex && selectedSubindex !== 'general') {
      const subKey = is2026 ? `pos_sub_${selectedSubindex}` : `pos_sub_${selectedSubindex}_2024`;
      const desKey = is2026 ? `des_sub_${selectedSubindex}_2026` : `des_sub_${selectedSubindex}_2024`;
      items = filtered.map(p => {
        const rank = p[subKey] || 99;
        const des = p[desKey] || 'Media baja';
        return {
          name: p.NOMBRE,
          value: rank,
          rank: rank,
          desempeno: des,
          isMorelia: p.NOMBRE.toLowerCase() === 'morelia'
        };
      });
      // En rankings el valor menor es mejor (Rank #1 es top)
      items.sort((a, b) => a.value - b.value);
    } else {
      // Visión General: Ranking General ICU 2026 o 2024
      items = filtered.map(p => {
        const rank = is2026 ? (p.pos_general_icu2026 || p['POSICIÓN'] || 99) : (p.pos_general_2024 || 99);
        const des = is2026 ? (p.des_general_icu2026 || 'Media baja') : (p.des_general_2024 || 'Media baja');
        return {
          name: p.NOMBRE,
          value: rank,
          rank: rank,
          desempeno: des,
          isMorelia: p.NOMBRE.toLowerCase() === 'morelia'
        };
      });
      items.sort((a, b) => a.value - b.value);
    }

    // Limitar para visualización limpia
    const labels = items.map(d => d.name);
    const dataValues = items.map(d => d.value);

    // Mapeo de colores IMCO
    const IMCO_COLORS = {
      'Muy alta': '#339766',
      'Alta': '#4bce79',
      'Media alta': '#fbda46',
      'Media baja': '#fd9b1e',
      'Baja': '#e74770',
      'Muy baja': '#8a1136'
    };

    const backgroundColors = items.map(d => {
      if (d.desempeno && IMCO_COLORS[d.desempeno]) return IMCO_COLORS[d.desempeno];
      return '#64748b';
    });

    const borderColors = items.map(d => d.isMorelia ? '#ffffff' : 'rgba(255,255,255,0.2)');
    const borderWidths = items.map(d => d.isMorelia ? 2 : 1);

    if (this.leaderboardChart) {
      this.leaderboardChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    this.leaderboardChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: dataValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: borderWidths,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const item = items[context.dataIndex];
                if (selectedIndicator) {
                  return [
                    `Valor: ${item.value} ${selectedIndicator.unidad_medida}`,
                    `2026: ${item.raw2026 ?? 'N/D'} | 2024: ${item.raw2024 ?? 'N/D'}`,
                    `Posición IMCO: #${item.pos ?? 'N/D'}`,
                    `Desempeño: ${item.desempeno ?? 'N/D'}`
                  ];
                } else {
                  return [
                    `Posición IMCO: #${item.rank === 99 ? 'N/D' : item.rank}`,
                    `Desempeño: ${item.desempeno ?? 'N/D'}`
                  ];
                }
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#64748b' }
          },
          y: {
            grid: { display: false },
            ticks: {
              color: (ctx) => {
                const cityName = labels[ctx.index];
                return cityName && cityName.toLowerCase() === 'morelia' ? '#ccff00' : '#cbd5e1';
              },
              font: (ctx) => {
                const cityName = labels[ctx.index];
                return {
                  weight: cityName && cityName.toLowerCase() === 'morelia' ? 'bold' : 'normal'
                };
              }
            }
          }
        },
        onClick: (event, elements) => {
          if (elements && elements.length > 0) {
            const index = elements[0].index;
            const clickedCity = labels[index];
            if (window.dashboardUI) {
              window.dashboardUI.openCityDrawer(clickedCity);
            }
          }
        }
      }
    });
  }

  // 2. Gráfico de Radar de Subíndices: Comparación de Clasificación de Desempeño
  renderRadarSubindices(canvasId, cityAProps, cityBProps, state) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const subKeys = [
      { key: 'innovacion_economia', label: 'Innovación y Economía' },
      { key: 'infraestructura', label: 'Infraestructura' },
      { key: 'mercado_trabajo', label: 'Mercado de Trabajo' },
      { key: 'sociedad_medio_ambiente', label: 'Sociedad y Medio Amb.' },
      { key: 'derecho', label: 'Derecho' },
      { key: 'sistema_politico_gobierno', label: 'Sistema Político y Gob.' }
    ];

    const TIER_NUM_MAP = {
      'Muy alta': 6,
      'Alta': 5,
      'Media alta': 4,
      'Media baja': 3,
      'Baja': 2,
      'Muy baja': 1
    };

    const NUM_TIER_MAP = {
      6: 'Muy alta',
      5: 'Alta',
      4: 'Media alta',
      3: 'Media baja',
      2: 'Baja',
      1: 'Muy baja'
    };

    // Obtener puntuación de desempeño (1 a 6) para un subíndice
    const getSubScore = (props, subKey, year = '2026') => {
      if (!props) return 0;
      const desVal = year === '2024'
        ? props[`des_sub_${subKey}_2024`]
        : props[`des_sub_${subKey}_2026`];
      return TIER_NUM_MAP[desVal] || 3;
    };

    const datasets = [];
    const comparisonCity = state ? state.comparisonCity : 'none';

    if (cityBProps) {
      // Caso 1: Comparación Ciudad A vs Ciudad B (año seleccionado o 2026)
      const yr = (state && state.selectedYear === '2024') ? '2024' : '2026';
      const scoresA = subKeys.map(s => getSubScore(cityAProps, s.key, yr));
      const scoresB = subKeys.map(s => getSubScore(cityBProps, s.key, yr));

      datasets.push({
        label: `${cityAProps.NOMBRE} (${yr})`,
        data: scoresA,
        backgroundColor: 'rgba(204, 255, 0, 0.25)',
        borderColor: '#ccff00',
        borderWidth: 2.5,
        pointBackgroundColor: '#ccff00',
        pointBorderColor: '#ffffff',
        pointRadius: 4,
        props: cityAProps,
        yearTag: yr
      });

      datasets.push({
        label: `${cityBProps.NOMBRE} (${yr})`,
        data: scoresB,
        backgroundColor: 'rgba(0, 240, 255, 0.20)',
        borderColor: '#00f0ff',
        borderWidth: 2,
        pointBackgroundColor: '#00f0ff',
        pointBorderColor: '#ffffff',
        pointRadius: 4,
        props: cityBProps,
        yearTag: yr
      });
    } else if (comparisonCity === 'hist_2024') {
      // Caso 2: Opción explícita "Comparar con el 2024"
      const scores2026 = subKeys.map(s => getSubScore(cityAProps, s.key, '2026'));
      datasets.push({
        label: `${cityAProps.NOMBRE} (2026)`,
        data: scores2026,
        backgroundColor: 'rgba(204, 255, 0, 0.28)',
        borderColor: '#ccff00',
        borderWidth: 2.5,
        pointBackgroundColor: '#ccff00',
        pointBorderColor: '#ffffff',
        pointRadius: 5,
        props: cityAProps,
        yearTag: '2026'
      });

      const has2024 = cityAProps.pos_general_2024 !== null && cityAProps.pos_general_2024 !== undefined;
      if (has2024) {
        const scores2024 = subKeys.map(s => getSubScore(cityAProps, s.key, '2024'));
        datasets.push({
          label: `${cityAProps.NOMBRE} (2024)`,
          data: scores2024,
          backgroundColor: 'rgba(0, 240, 255, 0.18)',
          borderColor: '#00f0ff',
          borderWidth: 2,
          borderDash: [4, 4],
          pointBackgroundColor: '#00f0ff',
          pointBorderColor: '#ffffff',
          pointRadius: 4,
          props: cityAProps,
          yearTag: '2024'
        });
      }
    } else {
      // Caso 3: "-- Sin Comparación --": SOLO sale el 2026, con el nombre puro de la ciudad
      const scores2026 = subKeys.map(s => getSubScore(cityAProps, s.key, '2026'));
      datasets.push({
        label: cityAProps.NOMBRE,
        data: scores2026,
        backgroundColor: 'rgba(204, 255, 0, 0.28)',
        borderColor: '#ccff00',
        borderWidth: 2.5,
        pointBackgroundColor: '#ccff00',
        pointBorderColor: '#ffffff',
        pointRadius: 5,
        props: cityAProps,
        yearTag: '2026'
      });
    }

    if (this.radarChart) {
      this.radarChart.destroy();
    }

    const ctx = canvas.getContext('2d');
    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: subKeys.map(s => s.label),
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              font: { weight: 'bold', size: 10 },
              color: '#cbd5e1'
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const subMeta = subKeys[ctx.dataIndex];
                const score = ctx.parsed.r;
                const tierName = NUM_TIER_MAP[score] || 'Media baja';
                const datasetMeta = ctx.dataset;
                const pObj = datasetMeta.props || cityAProps;
                let posInfo = '';
                if (datasetMeta.yearTag === '2024') {
                  const p = pObj[`pos_sub_${subMeta.key}_2024`];
                  if (p) posInfo = ` [Posición #${p}]`;
                } else {
                  const p = pObj[`pos_sub_${subMeta.key}`];
                  if (p) posInfo = ` [Posición #${p}]`;
                }
                return `${datasetMeta.label}: Desempeño ${tierName}${posInfo}`;
              }
            }
          }
        },
        scales: {
          r: {
            min: 0,
            max: 6,
            angleLines: { color: 'rgba(255, 255, 255, 0.12)' },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            pointLabels: {
              color: '#e2e8f0',
              font: { size: 10, weight: 600 }
            },
            ticks: {
              stepSize: 1,
              display: true,
              color: '#94a3b8',
              backdropColor: 'transparent',
              font: { size: 8, weight: 600 },
              callback: (value) => {
                const labels = {
                  1: 'Muy baja',
                  2: 'Baja',
                  3: 'Media baja',
                  4: 'Media alta',
                  5: 'Alta',
                  6: 'Muy alta'
                };
                return labels[value] || '';
              }
            }
          }
        }
      }
    });
  }
}

window.dashboardCharts = new DashboardCharts();
