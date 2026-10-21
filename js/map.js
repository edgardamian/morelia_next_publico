/**
 * map.js - Cyber-Cartography and Spatial Visualization for Morelia NExT Dashboard
 */

class DashboardMap {
  constructor() {
    this.map = null;
    this.layers = {
      satellite: null,
      darkMatter: null,
      polygon: null,
      buffer: null,
      network: null,
      markers: null
    };

    this.markerMap = new Map(); // cityName -> marker
    this.isBasemapSatellite = true;
    this.showLabels = false; // Etiquetas deshabilitadas por defecto
  }

  init(containerId) {
    // Coordenadas centrales del Diamante de México
    const center = [20.79, -101.26];
    const initialZoom = 7.75;

    this.map = L.map(containerId, {
      center: center,
      zoom: initialZoom,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      wheelPxPerZoomLevel: 100,
      zoomControl: false,
      attributionControl: false,
      minZoom: 6,
      maxZoom: 16
    });

    // Control de zoom en esquina superior derecha
    L.control.zoom({ position: 'topright' }).addTo(this.map);

    // 1. Capas Base de Mapa (100% libres, sin requerimiento de API key)
    // Satélite ESRI de alta resolución con filtro oscuro
    this.layers.satellite = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 19,
        className: 'satellite-dark-filter'
      }
    ).addTo(this.map);

    // Cartografía Oscura de Alta Precisión (Esri Canvas World Dark Gray Base + Reference)
    // No requiere API key ni credenciales
    this.layers.darkCanvas = L.layerGroup([
      L.tileLayer(
        'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 16
        }
      ),
      L.tileLayer(
        'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 16
        }
      )
    ]);

    // 2. Capas Espaciales de Geometrías
    this.initVectorLayers();

    // 3. Suscripción a cambios de estado
    window.appState.subscribe((currentState, prevState) => {
      this.updateMarkers(currentState);
    });

    // 4. Reajuste automático en cambio de orientación o redimensionamiento móvil
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize({ pan: false });
        }
      }, 150);
    });

    console.log("Mapa Morelia NExT inicializado con éxito.");
  }

  initVectorLayers() {
    const data = window.MORELIA_NEXT_DATA;
    if (!data) {
      console.error("No se encontró window.MORELIA_NEXT_DATA");
      return;
    }

    // A. Polígono Buffer 30K (Zona de Influencia)
    if (data.poligono_buff) {
      this.layers.buffer = L.geoJSON(data.poligono_buff, {
        style: {
          color: 'rgba(0, 240, 255, 0.25)',
          weight: 1.5,
          dashArray: '4, 4',
          fillColor: 'rgba(0, 240, 255, 0.02)',
          fillOpacity: 1
        }
      }).addTo(this.map);
    }

    // B. Polígono Diamante Principal (Perímetro de las Metrópolis)
    if (data.poligono) {
      this.layers.polygon = L.geoJSON(data.poligono, {
        style: {
          color: '#ffffff',
          weight: 2,
          dashArray: '6, 6',
          fillColor: 'rgba(204, 255, 0, 0.04)',
          fillOpacity: 1
        }
      }).addTo(this.map);
    }

    // C. Red Candelaria / Constelación de Morelia NExT (Conexiones 100% SÓLIDAS con jerarquía de grosor e intensidad)
    if (data.red_diamante) {
      this.layers.network = L.geoJSON(data.red_diamante, {
        style: (feature) => {
          const tipo = feature.properties.tipo;
          if (tipo === 'eje_morelia') {
            // Eje Primario: Radial a Morelia (Máximo grosor e intensidad verde lima)
            return {
              color: '#ccff00',
              weight: 3.0,
              opacity: 0.95,
              dashArray: null
            };
          } else if (tipo === 'eje_metropolitano') {
            // Eje Secundario: Arco entre Grandes Metrópolis (Grosor medio cian eléctrico)
            return {
              color: '#00f0ff',
              weight: 2.0,
              opacity: 0.80,
              dashArray: null
            };
          } else {
            // Malla Delaunay Regional: Conexiones locales (Fina, cristalina, sólida)
            return {
              color: '#a6ff00',
              weight: 1.3,
              opacity: 0.50,
              dashArray: null
            };
          }
        }
      }).addTo(this.map);
    }

    // D. Capa de Marcadores de Ciudades
    this.layers.markers = L.layerGroup().addTo(this.map);
    this.renderCityMarkers(data.ciudades);

    // Encuadre inicial óptimo: máximo zoom que contiene la totalidad del Diamante
    this.fitDiamondBounds({ animate: false, padding: [30, 30] });
  }

  renderCityMarkers(ciudadesGeoJSON) {
    this.layers.markers.clearLayers();
    this.markerMap.clear();

    const state = window.appState.getState();

    ciudadesGeoJSON.features.forEach(feature => {
      const props = feature.properties;
      const coords = feature.geometry.coordinates; // [lng, lat]
      const latLng = [coords[1], coords[0]];
      const cityName = props.NOMBRE;
      const isMorelia = cityName.toLowerCase() === 'morelia';

      // Crear icono personalizado
      const icon = this.createNodeIcon(props, state, isMorelia);

      const marker = L.marker(latLng, {
        icon: icon,
        zIndexOffset: isMorelia ? 1000 : 100
      });

      // Evento Click: Abrir Ficha de la Ciudad en Drawer
      marker.on('click', () => {
        window.appState.setState({ selectedCity: cityName });
        if (window.dashboardUI) {
          window.dashboardUI.openCityDrawer(cityName);
        }
      });

      // Tooltip informativo flotante
      marker.bindTooltip(this.createTooltipContent(props, state), {
        direction: 'top',
        offset: [0, -10],
        className: 'custom-map-tooltip'
      });

      marker.addTo(this.layers.markers);
      this.markerMap.set(cityName, { marker, props, latLng });
    });
  }

  createNodeIcon(props, state, isMorelia) {
    const meta = this.getCityVisualMeta(props, state);
    const { color, rankText, desVal, mode, posVal, posTam } = meta;
    const moreliaClass = isMorelia ? 'morelia-hub' : '';

    // Datos generales de la tabla Posiciones Generales del ICU (Lugar Nacional)
    const posGeneral = (window.POSICIONES_GENERALES_ICU && window.POSICIONES_GENERALES_ICU[props.NOMBRE]) || null;
    const lugarNal = posGeneral ? posGeneral.Lugar : null;

    // Escala de tamaños proporcionales según el nivel de desempeño IMCO
    const SIZES = {
      'Muy alta': { inner: 20, halo: 38 },
      'Alta': { inner: 17, halo: 32 },
      'Media alta': { inner: 14, halo: 26 },
      'Media baja': { inner: 11, halo: 21 },
      'Baja': { inner: 9, halo: 17 },
      'Muy baja': { inner: 7, halo: 14 },
      'Sin dato': { inner: 8, halo: 15 }
    };

    const sizeCfg = SIZES[desVal] || SIZES['Media baja'];
    const innerSize = isMorelia ? (sizeCfg.inner + 6) : sizeCfg.inner;
    const haloSize = isMorelia ? (sizeCfg.halo + 12) : sizeCfg.halo;

    // Separación óptima: el contenedor de 44px tiene el centro en x=22px.
    // Sumamos el radio del círculo interior + margen despejado para que ninguna letra se encime.
    const labelOffset = 22 + Math.round(innerSize / 2) + (isMorelia ? 12 : 10);

    // Pills en la etiqueta flotante del mapa: SOLO la posición nacional 'Pos. Nal #'
    let pillsHtml = '';
    if (lugarNal) {
      pillsHtml = `<span class="node-rank-pill node-rank-nal" title="Posición General Nacional del ICU (entre 72 ciudades)">Pos. Nal #${lugarNal}</span>`;
    }

    const html = `
      <div class="city-node-marker ${moreliaClass}" style="color: ${color}; width: 44px; height: 44px;">
        <div class="node-outer-halo" style="width: ${haloSize}px; height: ${haloSize}px;"></div>
        <div class="node-inner-circle" style="width: ${innerSize}px; height: ${innerSize}px;"></div>
        <div class="node-label-wrap" style="left: ${labelOffset}px;">
          <span class="node-city-name">${props.NOMBRE}</span>
          ${pillsHtml}
        </div>
        ${isMorelia ? '<div class="morelia-corazon-badge">CORAZÓN<br>DEL DIAMANTE</div>' : ''}
      </div>
    `;

    return L.divIcon({
      html: html,
      className: 'custom-div-node',
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
  }

  getCityVisualMeta(props, state) {
    const { selectedYear, selectedSubindex, selectedIndicator } = state;
    const is2026 = selectedYear === '2026';

    // Colores oficiales IMCO (Base exacta de la paleta oficial)
    const IMCO_COLORS = {
      'Muy alta': '#339766',
      'Alta': '#4bce79',
      'Media alta': '#fbda46',
      'Media baja': '#fd9b1e',
      'Baja': '#e74770',
      'Muy baja': '#8a1136'
    };

    const posTam = props.pos_general_icu2026 || props['POSICIÓN'] || null;

    // Caso 1: Indicador específico seleccionado
    if (selectedIndicator) {
      const cod = selectedIndicator.codigo_base;
      const desVal = props[`${cod}_des`] || 'Media alta';
      const color = IMCO_COLORS[desVal] || '#64748b';
      const posVal = props[`${cod}_pos`];
      const rankText = posVal !== null && posVal !== undefined ? `#${posVal}` : '-';
      const val = is2026 ? props[`${cod}_2026`] : props[`${cod}_2024`];
      return { color, labelText: `${val !== null ? val : 'Sin dato'}`, rankText, desVal, mode: 'indicator', posVal, posTam };
    }

    // Caso 2: Subíndice seleccionado
    if (selectedSubindex && selectedSubindex !== 'general') {
      const is2024 = selectedYear === '2024';
      const posVal = is2024 ? props[`pos_sub_${selectedSubindex}_2024`] : props[`pos_sub_${selectedSubindex}`];
      const desVal = is2024 ? props[`des_sub_${selectedSubindex}_2024`] : props[`des_sub_${selectedSubindex}_2026`];
      const color = (desVal && IMCO_COLORS[desVal]) ? IMCO_COLORS[desVal] : '#64748b';
      const rankText = posVal !== null && posVal !== undefined ? `#${posVal}` : 'Sin dato';
      return { color, labelText: `Pos ${posVal ?? 'S/D'}`, rankText, desVal, mode: 'subindex', posVal, posTam };
    }

    // Caso 3: Visión General (Índice General)
    const is2024 = selectedYear === '2024';
    const genPos = is2024 ? props.pos_general_2024 : (props.pos_general_icu2026 || props['POSICIÓN'] || 1);
    const genDes = is2024 ? props.des_general_2024 : (props.des_general_icu2026 || 'Media baja');
    const color = (genDes && IMCO_COLORS[genDes]) ? IMCO_COLORS[genDes] : '#64748b';
    const rankText = genPos !== null && genPos !== undefined ? `#${genPos}` : 'Sin dato';

    return { color, labelText: `Pos ${genPos ?? 'S/D'}`, rankText, desVal: genDes, mode: 'general', posVal: genPos, posTam };
  }

  createTooltipContent(props, state) {
    const tamano = props.TAMANO_NORMALIZADO || props['TAMAÑO'] || props['TAMAO'] || '';
    const cityName = props.NOMBRE;
    const p26 = props.pos_general_icu2026;
    const p24 = props.pos_general_2024;

    const IMCO_COLORS = {
      'Muy alta': '#339766',
      'Alta': '#4bce79',
      'Media alta': '#fbda46',
      'Media baja': '#fd9b1e',
      'Baja': '#e74770',
      'Muy baja': '#8a1136'
    };

    // Datos oficiales de Posiciones Generales del ICU (Lugar Nacional)
    const posGeneral = (window.POSICIONES_GENERALES_ICU && window.POSICIONES_GENERALES_ICU[cityName]) || null;
    let varArrow = posGeneral ? (posGeneral.Variacion || '=') : '=';
    let varColor = '#cbd5e1';
    if (posGeneral && typeof posGeneral.Variacion === 'string') {
      if (posGeneral.Variacion.startsWith('sube')) {
        const n = posGeneral.Variacion.replace('sube', '').trim();
        varArrow = `▲ ${n.startsWith('+') ? n : '+' + n}`;
        varColor = '#4bce79';
      } else if (posGeneral.Variacion.startsWith('baja')) {
        const n = posGeneral.Variacion.replace('baja', '').trim();
        varArrow = `▼ ${n.startsWith('-') ? n : '-' + n}`;
        varColor = '#ef4444';
      } else if (posGeneral.Variacion === '=') {
        varArrow = '= 0';
        varColor = '#94a3b8';
      }
    }
    const nivelColor = (posGeneral && IMCO_COLORS[posGeneral.Nivel]) || '#cbd5e1';

    let detailMetric = '';
    if (state.selectedIndicator) {
      const cod = state.selectedIndicator.codigo_base;
      const v26 = props[`${cod}_2026`];
      const v24 = props[`${cod}_2024`];
      const pos26 = props[`${cod}_pos`];
      const des26 = props[`${cod}_des`];
      const indColor = (des26 && IMCO_COLORS[des26]) || '#cbd5e1';
      detailMetric = `
        <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.12); font-size: 0.72rem;">
          <div style="color: #ffffff; font-weight: 700; margin-bottom: 3px;">${state.selectedIndicator.nombre_indicador}</div>
          <div style="display: flex; justify-content: space-between; align-items:center; color: #cbd5e1;">
            <span>Posición en indicador:</span>
            <b style="color: ${indColor}; font-family: var(--font-mono); font-size: 0.82rem;">${pos26 !== null && pos26 !== undefined ? '#' + pos26 : '-'}</b>
          </div>
          <div style="display: flex; justify-content: space-between; color: #cbd5e1; font-size: 0.69rem; margin-top:2px;">
            <span>Valor: <b style="color:#ffffff;">${v26 ?? 'S/D'}</b> ${state.selectedIndicator.unidad_medida || ''}</span>
            ${v24 !== null && v24 !== undefined ? `<span style="color: #94a3b8;">(2024: ${v24})</span>` : ''}
          </div>
        </div>
      `;
    } else if (state.selectedSubindex && state.selectedSubindex !== 'general') {
      const pos26 = props[`pos_sub_${state.selectedSubindex}`];
      const pos24 = props[`pos_sub_${state.selectedSubindex}_2024`];
      const des26 = props[`des_sub_${state.selectedSubindex}_2026`];
      const subColor = (des26 && IMCO_COLORS[des26]) || '#cbd5e1';
      detailMetric = `
        <div style="margin-top: 6px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.12); font-size: 0.72rem;">
          <div style="display: flex; justify-content: space-between; align-items:center; color: #cbd5e1;">
            <span>Posición en subíndice:</span>
            <b style="color: ${subColor}; font-family: var(--font-mono); font-size: 0.82rem;">${pos26 ? '#' + pos26 : 'Sin dato'}</b>
          </div>
          ${pos24 ? `<div style="text-align: right; font-size: 0.68rem; color: #94a3b8; margin-top:2px;">(2024: #${pos24})</div>` : ''}
        </div>
      `;
    }

    // Estrato de tamaño y conteo oficial de ciudades en dicho estrato
    const estratoMeta = window.getEstratoMeta
      ? window.getEstratoMeta(props.TAMANO_NORMALIZADO || props['TAMAÑO'], posGeneral ? posGeneral.Grupo : '')
      : { nombre: tamano, total: 21 };

    return `
      <div class="custom-tooltip-inner" style="min-width: 230px; padding: 2px 0; line-height: 1.35; color: #f8fafc;">
        <!-- Cabecera de la Ciudad -->
        <div style="border-bottom: 1px solid rgba(255,255,255,0.15); padding-bottom: 4px; margin-bottom: 6px;">
          <div style="font-weight: 800; font-size: 0.95rem; color:#ffffff; letter-spacing: 0.02em;">
            ${cityName}
          </div>
        </div>

        <!-- 1. Posición General Nacional Oficial (72 ciudades) -->
        <div style="background: rgba(0, 240, 255, 0.08); border: 1px solid rgba(0, 240, 255, 0.35); border-radius: 6px; padding: 6px 8px; margin-bottom: 5px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2px;">
            <span style="font-size: 0.64rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-cyan); font-weight: 700;">
              Posición General Nacional
            </span>
            <span style="font-size: 0.62rem; color: #cbd5e1; font-weight: 600;">(72 ciudades)</span>
          </div>
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 6px;">
            <span style="font-size: 1.05rem; font-weight: 800; color: #ffffff; font-family: var(--font-mono);">
              #${posGeneral ? posGeneral.Lugar : 'S/D'} <span style="font-size: 0.72rem; font-weight: 600; color: var(--accent-cyan);">de 72</span>
            </span>
            <span style="font-size: 0.72rem; color: ${varColor}; font-weight: 700;">${varArrow}</span>
            <span style="font-size: 0.72rem; color: ${nivelColor}; font-weight: 600;">${posGeneral ? posGeneral.Nivel : ''}</span>
            <span style="font-size: 0.72rem; color: #cbd5e1; font-family: var(--font-mono);">${posGeneral ? posGeneral.Puntaje + ' pts' : ''}</span>
          </div>
        </div>

        <!-- 2. Posición de acuerdo a la Clasificación de Tamaño de Ciudad -->
        <div style="background: rgba(204, 255, 0, 0.07); border: 1px solid rgba(204, 255, 0, 0.3); border-radius: 6px; padding: 6px 8px; margin-bottom: 5px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2px;">
            <span style="font-size: 0.64rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--accent-lime); font-weight: 700;">
              Posición por Tamaño de Ciudad
            </span>
            <span style="font-size: 0.62rem; color: #cbd5e1; font-weight: 600;">
              (${estratoMeta.total} ciudades)
            </span>
          </div>
          <div style="font-size: 0.72rem; color: #ffffff; font-weight: 600; margin-bottom: 3px;">
            ${estratoMeta.nombre}
          </div>
          <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 8px;">
            <span style="font-size: 1.05rem; font-weight: 800; color: #ffffff; font-family: var(--font-mono);">
              #${p26 || '-'} <span style="font-size: 0.74rem; font-weight: 600; color: var(--accent-lime);">de ${estratoMeta.total}</span>
              <span style="font-size: 0.68rem; font-weight: 500; color: #94a3b8;">(2026)</span>
            </span>
            <span style="font-size: 0.72rem; color: #94a3b8;">
              2024: <b style="color: #ffffff; font-family: var(--font-mono);">${p24 !== null && p24 !== undefined ? '#' + p24 + ' de ' + estratoMeta.total : 'Sin dato'}</b>
            </span>
          </div>
        </div>

        ${detailMetric}
      </div>
    `;
  }

  getCityPerformance(props, state) {
    const { selectedYear, selectedSubindex, selectedIndicator } = state;
    const is2026 = selectedYear === '2026';

    if (selectedIndicator) {
      const cod = selectedIndicator.codigo_base;
      return props[`${cod}_des`];
    } else if (selectedSubindex && selectedSubindex !== 'general') {
      const desKey = is2026 ? `des_sub_${selectedSubindex}_2026` : `des_sub_${selectedSubindex}_2024`;
      return props[desKey];
    } else {
      return is2026 ? props.des_general_icu2026 : props.des_general_2024;
    }
  }

  updateMarkers(state) {
    if (!this.markerMap || this.markerMap.size === 0) return;

    this.markerMap.forEach(({ marker, props }) => {
      const cityName = props.NOMBRE;
      const isMorelia = cityName.toLowerCase() === 'morelia';

      // 1. Filtro de tamaño
      const tamano = props.TAMANO_NORMALIZADO || props['TAMAÑO'] || props['TAMAO'] || '';
      let visible = true;
      if (state.selectedSizeFilter !== 'all' && tamano !== state.selectedSizeFilter) {
        visible = false;
      }

      // 2. Filtro interactivo de desempeño IMCO
      if (visible && state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
        const perf = this.getCityPerformance(props, state);
        if (perf !== state.selectedPerfFilter) {
          visible = false;
        }
      }

      if (!visible) {
        marker.setOpacity(0.12);
      } else {
        marker.setOpacity(1.0);
        // Actualizar icono con nuevo color/ranking según el indicador activo
        const icon = this.createNodeIcon(props, state, isMorelia);
        marker.setIcon(icon);
        marker.setTooltipContent(this.createTooltipContent(props, state));
      }
    });
  }

  // Métodos de Navegación Rápida
  focusMorelia() {
    // Zoom enfocado en Morelia y el Corazón del Bajío
    this.map.flyTo([19.70, -101.20], 9.5, {
      duration: 1.5,
      easeLinearity: 0.25
    });
  }

  fitDiamondBounds(options = {}) {
    if (!this.layers.polygon) return;
    const defaultOptions = {
      padding: [30, 30],
      animate: true,
      duration: 1.2,
      maxZoom: 10
    };
    const opts = { ...defaultOptions, ...options };
    this.map.fitBounds(this.layers.polygon.getBounds(), opts);
  }

  zoomFullDiamond() {
    this.fitDiamondBounds({
      padding: [30, 30],
      animate: true,
      duration: 1.2
    });
  }

  toggleBasemap() {
    this.isBasemapSatellite = !this.isBasemapSatellite;
    if (this.isBasemapSatellite) {
      this.map.removeLayer(this.layers.darkCanvas);
      this.layers.satellite.addTo(this.map);
    } else {
      this.map.removeLayer(this.layers.satellite);
      this.layers.darkCanvas.addTo(this.map);
    }
    return this.isBasemapSatellite;
  }

  toggleLabels() {
    this.showLabels = !this.showLabels;
    const mapEl = document.getElementById('map-canvas');
    if (mapEl) {
      mapEl.classList.toggle('show-city-labels', this.showLabels);
    }
    return this.showLabels;
  }

  toggleLayer(layerName) {
    const layer = this.layers[layerName];
    if (!layer) return false;

    if (this.map.hasLayer(layer)) {
      this.map.removeLayer(layer);
      return false;
    } else {
      this.map.addLayer(layer);
      return true;
    }
  }
}

window.dashboardMap = new DashboardMap();
