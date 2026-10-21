// ==========================================================================
// DICCIONARIO OFICIAL DE DEFINICIONES METODOLÓGICAS (IMCO - ICU)
// ==========================================================================

const INDICATOR_DEFINITIONS = {
  ie_intensidad_energetica: {
    nombre: "Intensidad energética de la economía",
    unidad: "KWh al año por cada millón de pesos de actividad económica",
    definicion: "Evalúa la cantidad de energía eléctrica requerida para producir un millón de pesos de actividad económica en la urbe. Una menor intensidad energética indica procesos productivos más eficientes, tecnificados y sostenibles.",
    impacto: "Menor consumo por millón producido favorece la competitividad ambiental y económica."
  },
  ie_mercado_hipotecario: {
    nombre: "Tamaño del mercado hipotecario",
    unidad: "Créditos hipotecarios por cada mil adultos",
    definicion: "Mide el número de créditos para adquisición y mejoramiento de vivienda otorgados por la banca comercial e instituciones públicas por cada millar de adultos, reflejando solidez financiera local, acceso a vivienda formal y certidumbre patrimonial.",
    impacto: "Mayor número de créditos refleja mayor dinamismo económico y acceso formal a la vivienda."
  },
  ie_crecimiento_pib: {
    nombre: "Crecimiento del PIB",
    unidad: "Tasa de crecimiento anual real (%)",
    definicion: "Mide la tasa anual de crecimiento económico real generado en la zona metropolitana, evidenciando la capacidad de la ciudad para expandir sostenidamente su producción y riqueza.",
    impacto: "Mayor tasa de crecimiento real impulsa la generación de empleo y desarrollo urbano."
  },
  ie_diversificacion_econ: {
    nombre: "Diversificación económica",
    unidad: "Número de sectores económicos presentes",
    definicion: "Cuantifica la pluralidad de sectores y ramas de actividad económica presentes en la metrópoli. Ciudades con mayor diversidad reducen su vulnerabilidad frente a choques externos y atraen cadenas de valor complejas.",
    impacto: "Mayor variedad de sectores económicos fortalece la resiliencia productiva urbana."
  },
  ie_ocupacion_hotelera: {
    nombre: "Ocupación hotelera",
    unidad: "Porcentaje de la oferta total disponible (%)",
    definicion: "Porcentaje de cuartos de hotel ocupados respecto a la oferta total de hospedaje disponible en la ciudad. Refleja el flujo turístico, comercial, congresos y dinamismo en viajes de negocios.",
    impacto: "Mayor ocupación refleja un turismo y vida corporativa vibrante y atractiva."
  },
  ie_centros_investigacion: {
    nombre: "Centros de investigación",
    unidad: "Centros por cada 100 mil habitantes de la PEA",
    definicion: "Mide la densidad de centros públicos y privados dedicados a la investigación científica y tecnológica por fuerza laboral activa, clave para la transferencia de conocimiento e innovación.",
    impacto: "Mayor densidad de centros acelera la innovación tecnológica y el valor agregado."
  },
  ie_patentes: {
    nombre: "Patentes",
    unidad: "Solicitudes de patente por cada 100 mil de la PEA",
    definicion: "Registra las solicitudes de patentes e invenciones ante el Instituto Mexicano de la Propiedad Industrial (IMPI) por cada 100 mil miembros de la PEA, indicando capacidad inventiva y tecnológica.",
    impacto: "Mayor tasa de patentes denota liderazgo en innovación y creatividad industrial."
  },
  inf_camas_hospital: {
    nombre: "Camas de hospital",
    unidad: "Camas censables por cada 10 mil habitantes",
    definicion: "Capacidad instalada hospitalaria pública y privada para internamiento de pacientes por cada 10 mil residentes urbanos, indicador esencial de cobertura en salud especializada.",
    impacto: "Mayor número de camas hospitalarias garantiza mejor respuesta ante emergencias y salud pública."
  },
  inf_agua_pipas: {
    nombre: "Agua surtida por pipas",
    unidad: "Porcentaje de viviendas dependientes (%)",
    definicion: "Porcentaje de hogares urbanos que dependen del abastecimiento de agua mediante camiones cisterna (pipas) por carecer de conexión continua a la red formal de agua potable.",
    impacto: "Menor porcentaje indica mayor cobertura y calidad del servicio de agua entubada."
  },
  inf_viviendas_intraurbanas: {
    nombre: "Nuevas viviendas intraurbanas",
    unidad: "Porcentaje en perímetros U1 y U2 (%)",
    definicion: "Proporción de nuevas viviendas edificadas dentro de los perímetros centrales y consolidados (U1 y U2 de CONAVI), evitando la mancha urbana dispersa y fomentando ciudades compactas y caminables.",
    impacto: "Mayor porcentaje favorece ciudades compactas, servicios eficientes y menor costo de transporte."
  },
  inf_costo_electricidad: {
    nombre: "Costo de electricidad",
    unidad: "Pesos por megawatt-hora ($ MXN / MWh)",
    definicion: "Precio medio ponderado de la tarifa eléctrica comercial e industrial cobrada en la zona urbana, factor clave de competitividad para costos operativos empresariales.",
    impacto: "Menor costo eléctrico atrae industria e impulsa la rentabilidad empresarial."
  },
  inf_computadora_internet: {
    nombre: "Hogares con computadora e internet",
    unidad: "Porcentaje de los hogares (%)",
    definicion: "Porcentaje de viviendas particulares habitadas con equipo de cómputo y acceso a conexión a internet, pilar indispensable para la inclusión digital, teletrabajo y educación moderna.",
    impacto: "Mayor conectividad reduce la brecha digital urbana y potencia el capital humano."
  },
  inf_accidentes_transporte: {
    nombre: "Víctimas en accidentes de transporte",
    unidad: "Víctimas por cada 100 mil habitantes",
    definicion: "Tasa de personas lesionadas o fallecidas en accidentes de tránsito terrestre por cada cien mil habitantes, indicador directo de seguridad vial, orden del transporte y calidad de infraestructura.",
    impacto: "Menor tasa de víctimas refleja calles más seguras, mejor transporte y movilidad ordenada."
  },
  inf_servicios_financieros: {
    nombre: "Uso de servicios financieros",
    unidad: "Tarjetas de débito y crédito por adulto",
    definicion: "Promedio de tarjetas de débito y crédito vigentes por cada habitante en edad adulta, reflejando el nivel de bancarización, adopción de medios de pago electrónicos y formalidad financiera.",
    impacto: "Mayor penetración bancaria facilita transacciones seguras y formales en la economía."
  },
  mt_brecha_ingresos_genero: {
    nombre: "Brecha de ingresos por género",
    unidad: "Diferencia porcentual de ingreso (%)",
    definicion: "Diferencia porcentual en las remuneraciones percibidas entre hombres y mujeres por trabajo similar, reflejando igualdad salarial y ausencia de discriminación de género en el mercado laboral.",
    impacto: "Menor brecha salarial indica mayor equidad de género, justicia social e inclusión."
  },
  mt_salario_mensual: {
    nombre: "Salario mensual de tiempo completo",
    unidad: "Pesos corrientes mensuales ($ MXN)",
    definicion: "Ingreso laboral promedio devengado al mes por los trabajadores urbanos ocupados en jornadas laborales completas, termómetro del bienestar económico y calidad salarial urbana.",
    impacto: "Mayor salario formal eleva el poder adquisitivo y la calidad de vida de las familias."
  },
  mt_producto_medio_trabajo: {
    nombre: "Producto medio del trabajo",
    unidad: "Pesos por hora trabajada ($ MXN / h)",
    definicion: "Valor agregado bruto producido por cada hora laborada en la economía de la metrópoli, midiendo la productividad laboral media y eficiencia de los factores de producción.",
    impacto: "Mayor productividad por hora trabajada impulsa el crecimiento económico sostenible."
  },
  mt_jornadas_mas_48h: {
    nombre: "Jornadas laborales de más de 48 horas",
    unidad: "Porcentaje de población ocupada (%)",
    definicion: "Porcentaje de trabajadores ocupados cuya jornada semanal excede las 48 horas reglamentarias. Tasas elevadas denotan sobrecarga laboral, menor bienestar y necesidad de más personal.",
    impacto: "Menor porcentaje refleja mejores condiciones laborales y equilibrio de vida."
  },
  mt_empresas_mas_50_emp: {
    nombre: "Empresas con más de 50 empleados",
    unidad: "Porcentaje de unidades económicas (%)",
    definicion: "Proporción de unidades económicas que cuentan con más de 50 colaboradores, indicando la presencia de medianas y grandes corporaciones capaces de ofrecer carreras profesionales y prestaciones.",
    impacto: "Mayor proporción de empresas consolidadas formaliza y estabiliza el mercado de trabajo."
  },
  mt_informalidad_laboral: {
    nombre: "Informalidad laboral",
    unidad: "Porcentaje de la población ocupada (%)",
    definicion: "Porcentaje de trabajadores que operan sin acceso a seguridad social, contratos por escrito o amparo laboral de ley. La informalidad limita el acceso a prestaciones, crédito y ahorro para el retiro.",
    impacto: "Menor informalidad consolida derechos laborales, productividad y recaudación fiscal."
  },
  sma_residuos_solidos: {
    nombre: "Residuos sólidos",
    unidad: "Kilogramos diarios por habitante (kg/hab/día)",
    definicion: "Volumen diario de desechos sólidos municipales generados por persona. Tasas menores indican hábitos de consumo responsables, reducción de plásticos y aprovechamiento de reciclaje.",
    impacto: "Menor generación de basura alivia los rellenos sanitarios y protege el medio ambiente."
  },
  sma_consumo_agua: {
    nombre: "Consumo de agua",
    unidad: "Metros cúbicos per cápita al año (m³/hab)",
    definicion: "Cantidad media anual de agua potable consumida por habitante en la metrópoli. Permite evaluar el uso racional del agua y la eficiencia de las redes urbanas para prevenir sobreexplotación.",
    impacto: "Un consumo hídrico equilibrado garantiza la sustentabilidad del acuífero y su disponibilidad futura."
  },
  sma_tratamiento_agua: {
    nombre: "Tratamiento de agua en operación",
    unidad: "Litros por segundo por cada mil habitantes (L/s por 1,000 hab)",
    definicion: "Capacidad instalada y en operación de plantas depuradoras de aguas residuales por cada mil habitantes, fundamental para el saneamiento ambiental y reúso agrícola e industrial.",
    impacto: "Mayor capacidad de saneamiento protege cuencas y ríos urbanos de contaminación."
  },
  sma_cobertura_educativa: {
    nombre: "Cobertura educativa",
    unidad: "Porcentaje de población menor a 15 años (%)",
    definicion: "Porcentaje de niñas, niños y jóvenes en edad escolar básica que se encuentran formalmente matriculados en escuelas, asegurando la inclusión y formación del capital humano.",
    impacto: "Mayor cobertura escolar sienta las bases del desarrollo intelectual y productivo futuro."
  },
  sma_grado_escolaridad: {
    nombre: "Grado de escolaridad",
    unidad: "Años promedio de escolaridad (población ≥ 25 años)",
    definicion: "Número promedio de años de educación formal aprobados por los adultos de 25 años o más, reflejando el acervo educativo acumulado para empleos de alto conocimiento y tecnología.",
    impacto: "Mayor grado escolar abre puertas a mejores salarios y talento calificado en la ciudad."
  },
  sma_personal_salud: {
    nombre: "Personal de salud",
    unidad: "Médicos y enfermeras por cada 10 mil habitantes",
    definicion: "Cantidad de médicos y profesionales de enfermería en activo en el sistema de salud público y privado por cada 10 mil habitantes, midiendo la suficiencia de atención clínica urbana.",
    impacto: "Mayor dotación de personal médico reduce tiempos de espera y salva vidas en la ciudad."
  },
  der_robo_vehiculos: {
    nombre: "Robo de vehículos",
    unidad: "Robos por cada mil vehículos registrados",
    definicion: "Frecuencia de despojo de vehículos automotores con o sin violencia respecto al padrón vehicular de la ciudad, indicador prioritario de seguridad patrimonial y combate al delito.",
    impacto: "Menor tasa de robo protege el patrimonio y confianza de las familias y empresas."
  },
  der_tasa_homicidios: {
    nombre: "Tasa de homicidios",
    unidad: "Homicidios dolosos por cada 100 mil habitantes",
    definicion: "Incidencia anual de muertes intencionales por cada cien mil personas. Constituye el barómetro principal de violencia letal, preservación de la vida y pacificación urbana.",
    impacto: "Menor tasa de homicidios es la base indispensable de la paz social y atracción de inversiones."
  },
  der_percepcion_seguridad: {
    nombre: "Percepción de seguridad",
    unidad: "Porcentaje de habitantes que se sienten seguros (%)",
    definicion: "Porcentaje de adultos que manifiestan sentirse seguros viviendo en su ciudad (con base en la ENSU del INEGI). Refleja la confianza pública y la tranquilidad para transitar calles y plazas.",
    impacto: "Mayor percepción de seguridad dinamiza la vida nocturna, comercio e inversión."
  },
  der_agresiones_periodistas: {
    nombre: "Agresiones a periodistas",
    unidad: "Agresiones por cada millón de habitantes",
    definicion: "Casos documentados de violencia, hostigamiento o agresiones contra periodistas y comunicadores, termómetro del respeto irrestricto a la libertad de expresión y derecho a la información.",
    impacto: "Cero agresiones garantiza una sociedad informada, crítica y transparente."
  },
  spg_percepcion_corrupcion: {
    nombre: "Percepción de corrupción estatal",
    unidad: "Porcentaje que considera corrupción frecuente (%)",
    definicion: "Porcentaje de ciudadanos adultos que perciben prácticas corruptas como frecuentes o muy frecuentes en el gobierno y dependencias estatales según encuestas del INEGI.",
    impacto: "Menor percepción de corrupción fortalece el estado de derecho, confianza y la inversión."
  },
  spg_ingresos_propios: {
    nombre: "Ingresos propios",
    unidad: "Porcentaje de los ingresos totales municipales (%)",
    definicion: "Proporción de los ingresos municipales generados por recaudación local (predial, agua, derechos) frente a transferencias federales, reflejo de autonomía y disciplina fiscal.",
    impacto: "Mayor recaudación propia dota de solvencia a los gobiernos para obras públicas prioritarias."
  },
  spg_viviendas_verticales: {
    nombre: "Nuevas viviendas verticales",
    unidad: "Porcentaje de nuevas viviendas construidas (%)",
    definicion: "Proporción de departamentos y viviendas plurifamiliares verticales respecto a la totalidad de licencias de vivienda nueva, favoreciendo la compacidad y optimización del suelo urbano.",
    impacto: "Mayor verticalidad previene la expansión urbana desmedida y abarata costos de servicios."
  },
  spg_densidad_poblacional: {
    nombre: "Densidad poblacional",
    unidad: "Habitantes por hectárea urbanizada (hab/ha)",
    definicion: "Concentración promedio de habitantes por hectárea del área urbana desarrollada. Densidades óptimas facilitan la provisión eficiente de transporte público, equipamiento y drenaje.",
    impacto: "Una densidad equilibrada maximiza la infraestructura y vitalidad barrial."
  },
  spg_mortalidad_infantil: {
    nombre: "Mortalidad infantil",
    unidad: "Defunciones de menores de 1 año por cada 1,000 nacidos vivos",
    definicion: "Frecuencia de fallecimientos de infantes antes de cumplir el primer año de vida por cada mil nacimientos, síntesis máxima de salud materna, nutrición, saneamiento y equidad social.",
    impacto: "Menor mortalidad infantil refleja un sólido sistema sanitario y bienestar social integral."
  }
};

const SUBINDEX_DEFINITIONS = {
  general: {
    nombre: "Índice de Competitividad Urbana (ICU)",
    descripcion: "Evaluación integral del Instituto Mexicano para la Competitividad (IMCO) que mide la capacidad de las ciudades mexicanas para generar, atraer y retener talento e inversión. Sintetiza 35 indicadores cuantitativos agrupados en 6 subíndices temáticos para 72 zonas metropolitanas del país.",
    alcance: "Evalúa 6 dimensiones clave: Innovación y Economía, Infraestructura, Mercado de Trabajo, Sociedad y Ambiente, Derecho y Seguridad, y Sistema Político y Gobierno."
  },
  innovacion_economia: {
    nombre: "Subíndice Innovación y Economía",
    descripcion: "Mide las características de las dinámicas económicas locales, la sofisticación del mercado crediticio, la diversificación productiva, el turismo y la capacidad de generación de patentes y centros de investigación aplicada.",
    alcance: "7 Indicadores oficiales: Intensidad energética, Mercado hipotecario, Crecimiento del PIB, Diversificación económica, Ocupación hotelera, Centros de investigación y Patentes."
  },
  infraestructura: {
    nombre: "Subíndice Infraestructura",
    descripcion: "Evalúa los sectores de telecomunicaciones, servicios de salud, acceso continuo a agua potable, movilidad, ordenamiento habitacional intraurbano y el costo y acceso a redes eléctricas y bancarias.",
    alcance: "7 Indicadores oficiales: Camas de hospital, Agua surtida por pipas, Viviendas intraurbanas, Costo de electricidad, Conectividad digital en hogares, Accidentes de transporte y Servicios financieros."
  },
  mercado_trabajo: {
    nombre: "Subíndice Mercado de Trabajo",
    descripcion: "Analiza el nivel de ingresos de los trabajadores, la productividad media laboral, la equidad salarial de género, la formalidad del empleo y el respeto a jornadas laborales saludables.",
    alcance: "6 Indicadores oficiales: Brecha salarial de género, Salario de tiempo completo, Productividad media por hora, Jornadas laborales mayores a 48h, Empresas medianas y grandes, e Informalidad laboral."
  },
  sociedad_medio_ambiente: {
    nombre: "Subíndice Sociedad y Medio Ambiente",
    descripcion: "Mide la calidad de vida de los habitantes a través del acceso a educación de calidad, suficiencia de personal médico, generación sustentable de residuos y uso eficiente y tratamiento del agua.",
    alcance: "6 Indicadores oficiales: Residuos sólidos per cápita, Consumo de agua, Capacidad de tratamiento de aguas residuales, Cobertura educativa, Años de escolaridad y Personal de salud."
  },
  derecho: {
    nombre: "Subíndice Derecho y Seguridad",
    descripcion: "Evalúa la preservación de la seguridad pública, la integridad física y patrimonial de los ciudadanos, la tasa de homicidios, el robo de vehículos, la libertad de prensa y la percepción de seguridad.",
    alcance: "4 Indicadores oficiales: Robo de vehículos, Tasa de homicidios, Percepción ciudadana de seguridad y Agresiones a periodistas."
  },
  sistema_politico_gobierno: {
    nombre: "Subíndice Sistema Político y Gobierno",
    descripcion: "Mide el desempeño de los gobiernos locales en autonomía financiera, combate frontal a la corrupción, planeación del crecimiento urbano vertical y compacto, y reducción de la mortalidad infantil.",
    alcance: "5 Indicadores oficiales: Percepción de corrupción estatal, Ingresos propios municipales, Viviendas verticales, Densidad poblacional y Mortalidad infantil."
  }
};

class DashboardUI {
  constructor() {
    this.data = null;
    this.allIndicators = [];
    this.citiesFeatures = [];
    this.rankOrderMode = 'estrato'; // 'estrato' | 'diamante' | 'nacional'
    this.viewMode = 'map'; // 'map' | 'list'
  }

  init() {
    this.data = window.MORELIA_NEXT_DATA;
    if (!this.data) {
      console.error("No se encontraron datos en window.MORELIA_NEXT_DATA");
      return;
    }

    this.allIndicators = this.data.metadatos || [];
    this.citiesFeatures = this.data.ciudades.features || [];

    // 1. Inicializar Selectores y Filtros
    this.setupYearSwitchers();
    this.setupViewModeSwitcher();
    this.setupSubindexButtons();
    this.setupSizeFilterChips();
    this.setupPerformanceFilters();
    this.setupIndicatorSelector();
    this.setupRankOrderSelector();
    this.setupMapToolbarButtons();
    this.setupCityDrawer();
    this.setupInfoModal();

    // 2. Suscribirse a cambios de estado global
    window.appState.subscribe((currentState, prevState) => {
      this.onStateChange(currentState, prevState);
    });

    // 3. Render inicial
    this.renderAll(window.appState.getState());

    console.log("UI Morelia NExT inicializada con éxito.");
  }

  // ==========================================
  // EVENT LISTENERS & SETUP
  // ==========================================

  setupYearSwitchers() {
    const btns = document.querySelectorAll('.year-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const year = btn.dataset.year;
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        window.appState.setState({ selectedYear: year });
      });
    });
  }

  // ==========================================
  // CONMUTADOR DE VISTAS (MAPA VS LISTADO 3 COLUMNAS)
  // ==========================================

  switchViewMode(mode) {
    this.viewMode = mode;
    const btnMap = document.getElementById('btn-view-map');
    const btnList = document.getElementById('btn-view-list');
    const grid = document.querySelector('.workspace-grid');
    const listView = document.getElementById('cities-list-view');
    const mapCanvas = document.getElementById('map-canvas');
    const overlayBottom = document.querySelector('.map-floating-overlay-bottom');

    if (mode === 'list') {
      if (btnMap) btnMap.classList.remove('active');
      if (btnList) btnList.classList.add('active');
      if (grid) grid.classList.add('view-list-mode');
      if (listView) {
        listView.classList.add('active');
        listView.style.display = 'flex';
      }
      if (mapCanvas) mapCanvas.style.display = 'none';
      if (overlayBottom) overlayBottom.style.display = 'none';

      // Renderizar el listado con los filtros y subíndice vigentes
      try {
        const state = window.appState ? window.appState.getState() : { selectedYear: '2026', selectedSubindex: 'general' };
        this.renderCitiesListView(state);
      } catch (err) {
        console.error("Error al renderizar cities-list-view:", err);
      }
    } else {
      // Regreso a vista de Mapa
      if (btnMap) btnMap.classList.add('active');
      if (btnList) btnList.classList.remove('active');
      if (grid) grid.classList.remove('view-list-mode');
      if (listView) {
        listView.classList.remove('active');
        listView.style.display = 'none';
      }
      if (mapCanvas) mapCanvas.style.display = 'block';
      if (overlayBottom) overlayBottom.style.display = '';

      // Redimensionar e invalidar el lienzo Leaflet
      setTimeout(() => {
        if (window.dashboardMap && window.dashboardMap.map) {
          window.dashboardMap.map.invalidateSize({ pan: false });
          window.dashboardMap.fitDiamondBounds({ animate: true, duration: 0.5, padding: [30, 30] });
        }
      }, 100);
    }
  }

  setupViewModeSwitcher() {
    const btnMap = document.getElementById('btn-view-map');
    const btnList = document.getElementById('btn-view-list');
    const btnReturnMap = document.getElementById('list-view-return-map-btn');

    if (btnMap) {
      btnMap.addEventListener('click', () => this.switchViewMode('map'));
    }
    if (btnList) {
      btnList.addEventListener('click', () => this.switchViewMode('list'));
    }
    if (btnReturnMap) {
      btnReturnMap.addEventListener('click', () => this.switchViewMode('map'));
    }
  }

  setupSubindexButtons() {
    const btns = document.querySelectorAll('.subindex-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subKey = btn.dataset.subindex;
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Actualizar indicador seleccionado si no pertenece a este subíndice
        let newIndicator = window.appState.getState().selectedIndicator;
        if (subKey !== 'general' && newIndicator && newIndicator.subindice_key !== subKey) {
          newIndicator = null;
        }

        window.appState.setState({
          selectedSubindex: subKey,
          selectedIndicator: newIndicator
        });

        // Actualizar opciones del dropdown de indicadores
        this.populateIndicatorDropdown(subKey);
      });
    });
  }

  setupSizeFilterChips() {
    const chips = document.querySelectorAll('.size-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const sizeVal = chip.dataset.size;
        window.appState.setState({ selectedSizeFilter: sizeVal });
      });
    });
  }

  setupPerformanceFilters() {
    const cards = document.querySelectorAll('.perf-counter-card');
    const clearBtn = document.getElementById('btn-clear-perf-filter');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const tier = card.dataset.tier;
        const current = window.appState.getState().selectedPerfFilter || 'all';
        if (current === tier) {
          window.appState.setState({ selectedPerfFilter: 'all' });
        } else {
          window.appState.setState({ selectedPerfFilter: tier });
        }
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.appState.setState({ selectedPerfFilter: 'all' });
      });
    }
  }

  setupIndicatorSelector() {
    const select = document.getElementById('indicator-select');
    const searchInput = document.getElementById('indicator-search');
    const searchClear = document.getElementById('indicator-search-clear');
    const btnClearMeta = document.getElementById('btn-clear-indicator');

    this.populateIndicatorDropdown('general');

    // Selección desde el menú desplegable tradicional
    if (select) {
      select.addEventListener('change', (e) => {
        const indCode = e.target.value;
        if (!indCode || indCode === 'none') {
          this.clearActiveIndicator();
        } else {
          const indObj = this.allIndicators.find(i => i.codigo_base === indCode);
          if (indObj) {
            this.selectIndicator(indObj, true);
          }
        }
      });
    }

    // Búsqueda interactiva en tiempo real (NO cambia el mapa hasta hacer clic)
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const trimmed = query.trim();

        if (trimmed.length > 0) {
          if (searchClear) searchClear.style.display = 'flex';
          this.renderIndicatorSearchResults(trimmed);
        } else {
          // Al borrar la búsqueda, se cierra la lista y desaparece el indicador
          if (searchClear) searchClear.style.display = 'none';
          this.closeSearchResults();
          this.clearActiveIndicator();
        }
      });

      searchInput.addEventListener('focus', () => {
        const trimmed = searchInput.value.trim();
        if (trimmed.length > 0) {
          this.renderIndicatorSearchResults(trimmed);
        }
      });
    }

    // Botón para borrar búsqueda y deseleccionar
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        this.closeSearchResults();
        this.clearActiveIndicator();
      });
    }

    // Botón para deseleccionar desde la tarjeta meta
    if (btnClearMeta) {
      btnClearMeta.addEventListener('click', () => {
        this.closeSearchResults();
        this.clearActiveIndicator();
      });
    }

    // Cerrar lista flotante al hacer clic fuera del componente
    document.addEventListener('click', (e) => {
      const box = document.querySelector('.indicator-selector-box');
      if (box && !box.contains(e.target)) {
        this.closeSearchResults();
      }
    });
  }

  setupRankOrderSelector() {
    const select = document.getElementById('rank-order-select');
    if (!select) return;

    select.addEventListener('change', (e) => {
      this.rankOrderMode = e.target.value; // 'estrato' | 'diamante' | 'nacional'

      const badge = document.getElementById('rank-section-badge');
      if (badge) {
        if (this.rankOrderMode === 'estrato') badge.textContent = 'Agrupado IMCO';
        else if (this.rankOrderMode === 'diamante') badge.textContent = 'Diamante (15)';
        else if (this.rankOrderMode === 'nacional') badge.textContent = 'Nacional (72)';
      }

      this.renderRankLadderByStrata(window.appState.getState());
    });
  }

  normalizeSearchText(str) {
    if (!str) return '';
    return str.toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  renderIndicatorSearchResults(query) {
    const resultsContainer = document.getElementById('indicator-search-results');
    if (!resultsContainer) return;

    const normQuery = this.normalizeSearchText(query);
    if (!normQuery) {
      this.closeSearchResults();
      return;
    }

    // Colores e iconos oficiales por subíndice
    const SUBINDEX_STYLES = {
      innovacion_economia: { color: 'var(--sub-ie)', label: 'Innovación y Economía', icon: '💡' },
      infraestructura: { color: 'var(--sub-inf)', label: 'Infraestructura', icon: '🏗️' },
      mercado_trabajo: { color: 'var(--sub-mt)', label: 'Mercado de Trabajo', icon: '💼' },
      sociedad_medio_ambiente: { color: 'var(--sub-sma)', label: 'Sociedad y Medio Ambiente', icon: '🌱' },
      derecho: { color: 'var(--sub-der)', label: 'Derecho y Seguridad', icon: '⚖️' },
      sistema_politico_gobierno: { color: 'var(--sub-spg)', label: 'Sistema Político y Gob.', icon: '🏛️' }
    };

    // Mapeo temático para facilitar búsqueda por conceptos clave
    const THEME_ALIASES = {
      'seguridad': 'derecho',
      'violencia': 'derecho',
      'crimen': 'derecho',
      'justicia': 'derecho',
      'delito': 'derecho',
      'ambiente': 'sociedad_medio_ambiente',
      'ambiental': 'sociedad_medio_ambiente',
      'ecologia': 'sociedad_medio_ambiente',
      'salud': 'sociedad_medio_ambiente',
      'educacion': 'sociedad_medio_ambiente',
      'trabajo': 'mercado_trabajo',
      'empleo': 'mercado_trabajo',
      'laboral': 'mercado_trabajo',
      'salario': 'mercado_trabajo',
      'gobierno': 'sistema_politico_gobierno',
      'politica': 'sistema_politico_gobierno',
      'politico': 'sistema_politico_gobierno',
      'fiscal': 'sistema_politico_gobierno',
      'catastro': 'sistema_politico_gobierno',
      'economia': 'innovacion_economia',
      'economico': 'innovacion_economia',
      'innovacion': 'innovacion_economia',
      'patente': 'innovacion_economia',
      'patentes': 'innovacion_economia',
      'pib': 'innovacion_economia',
      'infraestructura': 'infraestructura',
      'movilidad': 'infraestructura',
      'transporte': 'infraestructura',
      'vuelos': 'infraestructura',
      'agua': 'sociedad_medio_ambiente'
    };

    const targetSubKey = THEME_ALIASES[normQuery] || null;
    const queryTokens = normQuery.split(/\s+/).filter(Boolean);

    const filtered = this.allIndicators.filter(ind => {
      const name = this.normalizeSearchText(ind.nombre_indicador);
      const sub = this.normalizeSearchText(ind.subindice);
      const unit = this.normalizeSearchText(ind.unidad_medida);
      const code = this.normalizeSearchText(ind.codigo_base);
      const idStr = ind.id ? ind.id.toString() : '';

      // Si coincide con temática alias
      if (targetSubKey && ind.subindice_key === targetSubKey) {
        return true;
      }

      // Debe coincidir con cada token de búsqueda en nombre, subíndice, unidad o código
      return queryTokens.every(tok =>
        name.includes(tok) ||
        sub.includes(tok) ||
        unit.includes(tok) ||
        code.includes(tok) ||
        idStr === tok
      );
    });

    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'flex';

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          No se encontraron indicadores con "<b>${query}</b>"
        </div>
      `;
      return;
    }

    // Cabecera con conteo
    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.innerHTML = `
      <span>Resultados coincidentes</span>
      <span class="count-badge">${filtered.length}</span>
    `;
    resultsContainer.appendChild(header);

    const currentSelected = window.appState.getState().selectedIndicator;

    filtered.forEach(ind => {
      const subStyle = SUBINDEX_STYLES[ind.subindice_key] || { color: '#00f0ff', label: ind.subindice, icon: '📊' };
      const isSelected = currentSelected && currentSelected.codigo_base === ind.codigo_base;

      const item = document.createElement('div');
      item.className = `search-result-item ${isSelected ? 'selected' : ''}`;
      item.innerHTML = `
        <div class="search-result-top">
          <span class="search-result-title">
            <span style="color:var(--accent-lime); font-size:0.7rem; font-weight:700; margin-right:4px;">#${ind.id}</span>
            ${ind.nombre_indicador}
          </span>
          <span class="search-result-badge" style="background: rgba(255,255,255,0.06); color: ${subStyle.color}; border: 1px solid ${subStyle.color}40;">
            ${subStyle.icon} ${subStyle.label}
          </span>
        </div>
        <div class="search-result-meta">${ind.unidad_medida}</div>
      `;

      item.addEventListener('click', () => {
        // Al hacer clic explícito, AHORA SÍ se selecciona y cambia el mapa
        this.selectIndicator(ind, true);
        this.closeSearchResults();
      });

      resultsContainer.appendChild(item);
    });
  }

  closeSearchResults() {
    const resultsContainer = document.getElementById('indicator-search-results');
    if (resultsContainer) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
    }
  }

  selectIndicator(indObj, updateInput = true) {
    const searchInput = document.getElementById('indicator-search');
    const searchClear = document.getElementById('indicator-search-clear');
    const select = document.getElementById('indicator-select');

    if (updateInput && searchInput) {
      searchInput.value = indObj.nombre_indicador;
    }
    if (searchClear) {
      searchClear.style.display = 'flex';
    }
    if (select) {
      select.value = indObj.codigo_base;
    }

    // Actualizar estado global (ESTO dispara la actualización del mapa y el panel analítico)
    window.appState.setState({ selectedIndicator: indObj });
  }

  clearActiveIndicator() {
    const searchInput = document.getElementById('indicator-search');
    const searchClear = document.getElementById('indicator-search-clear');
    const select = document.getElementById('indicator-select');

    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    if (select) select.value = 'none';

    // Deseleccionar indicador en estado global (restituye el mapa al subíndice o visión general)
    window.appState.setState({ selectedIndicator: null });
  }

  populateIndicatorDropdown(currentSubindex) {
    const select = document.getElementById('indicator-select');
    const searchInput = document.getElementById('indicator-search');
    const badge = document.getElementById('indicator-badge-count');
    if (!select) return;

    const SUBINDEX_INFO = {
      general: { name: 'Todos los indicadores' },
      innovacion_economia: { name: 'Innovación y Economía' },
      infraestructura: { name: 'Infraestructura' },
      mercado_trabajo: { name: 'Mercado de Trabajo' },
      sociedad_medio_ambiente: { name: 'Sociedad y Medio Ambiente' },
      derecho: { name: 'Derecho y Seguridad' },
      sistema_politico_gobierno: { name: 'Sistema Político y Gobierno' }
    };

    const subInfo = SUBINDEX_INFO[currentSubindex] || { name: 'Subíndice' };

    let list = this.allIndicators;
    if (currentSubindex && currentSubindex !== 'general') {
      list = this.allIndicators.filter(i => i.subindice_key === currentSubindex);
      select.innerHTML = `<option value="none">${subInfo.name} (${list.length})</option>`;
      if (searchInput) {
        searchInput.placeholder = `Buscar en ${subInfo.name}...`;
      }
    } else {
      select.innerHTML = `<option value="none">Todos los indicadores (${list.length})</option>`;
      if (searchInput) {
        searchInput.placeholder = 'Buscar indicador o temática (ej. PIB, patentes)...';
      }
    }

    if (badge) {
      badge.textContent = `${list.length} Ind.`;
    }

    // Agrupar por subíndice
    const groups = {};
    list.forEach(ind => {
      if (!groups[ind.subindice]) groups[ind.subindice] = [];
      groups[ind.subindice].push(ind);
    });

    for (const [subName, indList] of Object.entries(groups)) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = `${subName} (${indList.length})`;
      indList.forEach(ind => {
        const opt = document.createElement('option');
        opt.value = ind.codigo_base;
        opt.textContent = `${ind.id}. ${ind.nombre_indicador}`;
        optgroup.appendChild(opt);
      });
      select.appendChild(optgroup);
    }

    // Mantener selección si existe
    const state = window.appState.getState();
    if (state.selectedIndicator) {
      select.value = state.selectedIndicator.codigo_base;
    } else {
      select.value = 'none';
    }
  }

  setupMapToolbarButtons() {
    const btnFocusMorelia = document.getElementById('btn-focus-morelia');
    const btnZoomAll = document.getElementById('btn-zoom-all');
    const btnToggleBasemap = document.getElementById('btn-toggle-basemap');
    const btnToggleNetwork = document.getElementById('btn-toggle-network');
    const btnTogglePoly = document.getElementById('btn-toggle-poly');

    if (btnFocusMorelia) {
      btnFocusMorelia.addEventListener('click', () => {
        window.dashboardMap.focusMorelia();
      });
    }

    if (btnZoomAll) {
      btnZoomAll.addEventListener('click', () => {
        window.dashboardMap.zoomFullDiamond();
      });
    }

    if (btnToggleBasemap) {
      btnToggleBasemap.addEventListener('click', () => {
        const isSat = window.dashboardMap.toggleBasemap();
        // Invierte los letreros: cuando esté el satélite de base, decir "Mapa Oscuro"; cuando esté el oscuro, decir "Mapa Satelital"
        btnToggleBasemap.textContent = isSat ? 'Mapa Oscuro' : 'Mapa Satelital';
        btnToggleBasemap.title = isSat
          ? 'Cambiar a Mapa Oscuro'
          : 'Cambiar a Mapa Satelital';
      });
    }

    if (btnToggleNetwork) {
      btnToggleNetwork.addEventListener('click', () => {
        const active = window.dashboardMap.toggleLayer('network');
        btnToggleNetwork.classList.toggle('active', active);
      });
    }

    if (btnTogglePoly) {
      btnTogglePoly.addEventListener('click', () => {
        const active = window.dashboardMap.toggleLayer('polygon');
        window.dashboardMap.toggleLayer('buffer');
        btnTogglePoly.classList.toggle('active', active);
      });
    }

    // Control de Etiquetas de Ciudades (deshabilitadas por defecto)
    const btnToggleLabels = document.getElementById('btn-toggle-labels');
    const btnToggleLabelsMap = document.getElementById('btn-toggle-labels-map');

    const updateLabelsState = (enabled) => {
      if (btnToggleLabels) {
        btnToggleLabels.classList.toggle('active', enabled);
        btnToggleLabels.title = enabled
          ? 'Ocultar etiquetas de ciudades en el mapa'
          : 'Mostrar etiquetas de ciudades en el mapa';
      }
      if (btnToggleLabelsMap) {
        btnToggleLabelsMap.classList.toggle('active', enabled);
        btnToggleLabelsMap.title = enabled
          ? 'Ocultar etiquetas de ciudades en el mapa'
          : 'Mostrar etiquetas de ciudades en el mapa';
      }
    };

    if (btnToggleLabels) {
      btnToggleLabels.addEventListener('click', () => {
        const enabled = window.dashboardMap.toggleLabels();
        updateLabelsState(enabled);
      });
    }

    if (btnToggleLabelsMap) {
      btnToggleLabelsMap.addEventListener('click', () => {
        const enabled = window.dashboardMap.toggleLabels();
        updateLabelsState(enabled);
      });
    }

    // Maximizar y Alternar Herramientas Territoriales (Experimental)
    const btnFloatingTrigger = document.getElementById('btn-sidebar-floating-trigger');
    const btnSidebarClose = document.getElementById('btn-sidebar-close');
    const btnToggleMaximize = document.getElementById('btn-toggle-maximize');
    const btnHeaderMaximize = document.getElementById('btn-header-maximize');
    const grid = document.querySelector('.workspace-grid');

    const updateMaximizeUI = (isMaximized) => {
      const labelText = isMaximized ? 'Herramientas Territoriales' : 'Ocultar herramientas';
      const labelTitle = isMaximized
        ? 'Mostrar herramientas territoriales y filtros (versión experimental)'
        : 'Ocultar herramientas territoriales (Esc)';

      if (btnFloatingTrigger) {
        btnFloatingTrigger.classList.toggle('active', !isMaximized);
        btnFloatingTrigger.setAttribute('aria-expanded', !isMaximized);
        const textSpan = btnFloatingTrigger.querySelector('.subtle-tools-text');
        const flaskSpan = btnFloatingTrigger.querySelector('.subtle-tools-flask');

        if (textSpan) {
          textSpan.innerHTML = isMaximized
            ? 'HERRAMIENTA<br>TERRITORIAL<br>EXPERIMENTAL'
            : 'OCULTAR<br>HERRAMIENTAS';
        }
        if (flaskSpan) {
          flaskSpan.style.display = isMaximized ? 'flex' : 'none';
        }
        btnFloatingTrigger.title = labelTitle;
      }

      if (btnToggleMaximize) {
        btnToggleMaximize.classList.toggle('active', !isMaximized);
        btnToggleMaximize.textContent = labelText;
        btnToggleMaximize.title = labelTitle;
      }

      if (btnHeaderMaximize) {
        btnHeaderMaximize.classList.toggle('active', !isMaximized);
        btnHeaderMaximize.textContent = labelText;
        btnHeaderMaximize.title = labelTitle;
      }
    };

    const toggleMaximize = () => {
      if (!grid) return;
      if (grid.classList.contains('view-list-mode')) {
        this.switchViewMode('map');
        grid.classList.remove('map-maximized');
        updateMaximizeUI(false);
        return;
      }
      const isMaximized = grid.classList.toggle('map-maximized');
      updateMaximizeUI(isMaximized);

      // Reajustar el lienzo de Leaflet para llenar completamente el nuevo ancho
      setTimeout(() => {
        if (window.dashboardMap && window.dashboardMap.map) {
          window.dashboardMap.map.invalidateSize({ pan: false });
          window.dashboardMap.fitDiamondBounds({ animate: true, duration: 0.6, padding: [30, 30] });
        }
      }, 80);

      setTimeout(() => {
        if (window.dashboardMap && window.dashboardMap.map) {
          window.dashboardMap.map.invalidateSize({ pan: false });
          window.dashboardMap.fitDiamondBounds({ animate: true, duration: 0.6, padding: [30, 30] });
        }
      }, 360);
    };

    // Sincronizar estado inicial al arrancar (maximizado por defecto con encuadre amplio)
    if (grid) {
      updateMaximizeUI(grid.classList.contains('map-maximized'));
      if (grid.classList.contains('map-maximized')) {
        setTimeout(() => {
          if (window.dashboardMap && window.dashboardMap.map) {
            window.dashboardMap.map.invalidateSize({ pan: false });
            window.dashboardMap.fitDiamondBounds({ animate: false, padding: [30, 30] });
          }
        }, 120);
        setTimeout(() => {
          if (window.dashboardMap && window.dashboardMap.map) {
            window.dashboardMap.map.invalidateSize({ pan: false });
            window.dashboardMap.fitDiamondBounds({ animate: false, padding: [30, 30] });
          }
        }, 450);
      }
    }

    if (btnFloatingTrigger) {
      btnFloatingTrigger.addEventListener('click', toggleMaximize);
    }

    if (btnSidebarClose) {
      btnSidebarClose.addEventListener('click', toggleMaximize);
    }

    if (btnToggleMaximize) {
      btnToggleMaximize.addEventListener('click', toggleMaximize);
    }

    if (btnHeaderMaximize) {
      btnHeaderMaximize.addEventListener('click', toggleMaximize);
    }

    // Tecla Escape: Ocultar herramientas si están abiertas
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && grid && !grid.classList.contains('map-maximized')) {
        toggleMaximize();
      }
    });
  }

  setupCityDrawer() {
    const drawer = document.getElementById('city-drawer');
    const closeBtn = document.getElementById('drawer-close-btn');
    const compSelect = document.getElementById('drawer-compare-select');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (drawer) drawer.classList.remove('open');
      });
    }

    if (compSelect) {
      compSelect.addEventListener('change', (e) => {
        const compCity = e.target.value;
        window.appState.setState({ comparisonCity: compCity });
        this.updateDrawerContent();
      });
    }

    // Inicializar contenido del expediente para la ciudad activa por defecto
    this.updateDrawerContent();
  }

  setupInfoModal() {
    const btnOpen = document.getElementById('btn-open-info');
    const modal = document.getElementById('info-modal');
    const btnClose = document.getElementById('info-modal-close');
    const btnBottomClose = document.getElementById('info-modal-btn-close');

    if (!modal) return;

    const openModal = () => {
      modal.style.display = 'flex';
      void modal.offsetWidth; // Forzar reflow para animación CSS
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('open');
      setTimeout(() => {
        if (!modal.classList.contains('open')) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      }, 250);
    };

    if (btnOpen) {
      btnOpen.addEventListener('click', openModal);
    }

    if (btnClose) {
      btnClose.addEventListener('click', closeModal);
    }

    if (btnBottomClose) {
      btnBottomClose.addEventListener('click', closeModal);
    }

    // Cerrar al hacer clic en el backdrop fuera de la tarjeta
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // ==========================================
  // RENDER & ACTUALIZACIONES DE ESTADO
  // ==========================================

  onStateChange(currentState, prevState) {
    if (prevState && prevState.selectedSubindex !== currentState.selectedSubindex) {
      this.populateIndicatorDropdown(currentState.selectedSubindex);
    }

    const searchInput = document.getElementById('indicator-search');
    const searchClear = document.getElementById('indicator-search-clear');
    const select = document.getElementById('indicator-select');

    if (!currentState.selectedIndicator) {
      if (prevState && prevState.selectedIndicator && searchInput && searchInput.value === prevState.selectedIndicator.nombre_indicador) {
        searchInput.value = '';
      }
      if (searchClear && searchInput && !searchInput.value) {
        searchClear.style.display = 'none';
      }
      if (select) {
        select.value = 'none';
      }
    } else {
      if (select) {
        select.value = currentState.selectedIndicator.codigo_base;
      }
      if (searchClear) {
        searchClear.style.display = 'flex';
      }
    }

    this.renderAll(currentState);
  }

  renderAll(state) {
    this.updateIndicatorMetaCard(state.selectedIndicator);
    this.updatePerformanceCounters(state);
    this.updateMoreliaBenchmark(state);
    this.renderRankLadderByStrata(state);
    this.renderCitiesListView(state);
  }

  updateIndicatorMetaCard(indicator) {
    const card = document.getElementById('indicator-meta-card');
    const label = document.getElementById('indicator-meta-title');
    const unit = document.getElementById('indicator-meta-unit');

    if (!card || !label || !unit) return;

    if (indicator) {
      card.style.display = 'flex';
      label.textContent = indicator.nombre_indicador;
      unit.textContent = `Unidad: ${indicator.unidad_medida} | Subíndice: ${indicator.subindice}`;
    } else {
      card.style.display = 'none';
    }
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

  updatePerformanceCounters(state) {
    const { selectedIndicator, selectedSubindex, selectedYear, selectedPerfFilter } = state;
    const is2026 = selectedYear === '2026';
    const counts = {
      'Muy alta': 0,
      'Alta': 0,
      'Media alta': 0,
      'Media baja': 0,
      'Baja': 0,
      'Muy baja': 0
    };

    if (selectedIndicator) {
      const cod = selectedIndicator.codigo_base;
      this.citiesFeatures.forEach(f => {
        const des = f.properties[`${cod}_des`];
        if (counts[des] !== undefined) counts[des]++;
      });
    } else if (selectedSubindex && selectedSubindex !== 'general') {
      const desKey = is2026 ? `des_sub_${selectedSubindex}_2026` : `des_sub_${selectedSubindex}_2024`;
      this.citiesFeatures.forEach(f => {
        const des = f.properties[desKey];
        if (des && counts[des] !== undefined) counts[des]++;
      });
    } else {
      // General
      this.citiesFeatures.forEach(f => {
        const des = is2026 ? f.properties.des_general_icu2026 : f.properties.des_general_2024;
        if (des && counts[des] !== undefined) counts[des]++;
      });
    }

    document.querySelectorAll('.perf-counter-card').forEach(card => {
      const tier = card.dataset.tier;
      const countEl = card.querySelector('.perf-val');
      if (countEl && counts[tier] !== undefined) {
        countEl.textContent = counts[tier];
      }

      if (selectedPerfFilter && selectedPerfFilter !== 'all') {
        if (tier === selectedPerfFilter) {
          card.classList.add('active');
          card.classList.remove('dimmed');
        } else {
          card.classList.remove('active');
          card.classList.add('dimmed');
        }
      } else {
        card.classList.remove('active');
        card.classList.remove('dimmed');
      }
    });

    const clearBtn = document.getElementById('btn-clear-perf-filter');
    const badge = document.getElementById('perf-filter-badge');
    if (selectedPerfFilter && selectedPerfFilter !== 'all') {
      if (clearBtn) clearBtn.style.display = 'inline-block';
      if (badge) badge.textContent = `${selectedPerfFilter}`;
    } else {
      if (clearBtn) clearBtn.style.display = 'none';
      if (badge) badge.textContent = 'IMCO';
    }
  }

  updateMoreliaBenchmark(state) {
    const rankEl = document.getElementById('morelia-kpi-rank');
    if (!rankEl) return;

    const moreliaFeature = this.citiesFeatures.find(f => f.properties.NOMBRE.toLowerCase() === 'morelia');
    if (!moreliaFeature) return;

    const p = moreliaFeature.properties;
    const { selectedYear, selectedSubindex, selectedIndicator } = state;
    const is2026 = selectedYear === '2026';
    const is2024 = selectedYear === '2024';

    const valEl = document.getElementById('morelia-kpi-val');
    const deltaEl = document.getElementById('morelia-kpi-delta');

    if (selectedIndicator) {
      const cod = selectedIndicator.codigo_base;
      const v26 = p[`${cod}_2026`];
      const v24 = p[`${cod}_2024`];
      const pos = p[`${cod}_pos`];
      const des = p[`${cod}_des`];

      if (rankEl) rankEl.textContent = pos ? `#${pos}` : 'N/D';
      if (valEl) valEl.textContent = (is2026 ? v26 : v24) ?? 'N/D';

      if (deltaEl) {
        if (v26 !== null && v24 !== null) {
          const delta = Number((v26 - v24).toFixed(2));
          const sign = delta > 0 ? '+' : '';
          deltaEl.textContent = `Δ ${sign}${delta} (${des})`;
          deltaEl.className = delta >= 0 ? 'delta-pill positive' : 'delta-pill negative';
        } else {
          deltaEl.textContent = des || '-';
          deltaEl.className = 'delta-pill neutral';
        }
      }
    } else if (selectedSubindex && selectedSubindex !== 'general') {
      const pos26 = p[`pos_sub_${selectedSubindex}`];
      const pos24 = p[`pos_sub_${selectedSubindex}_2024`];
      const des26 = p[`des_sub_${selectedSubindex}_2026`];
      const des24 = p[`des_sub_${selectedSubindex}_2024`];

      if (is2024) {
        if (rankEl) rankEl.textContent = pos24 ? `#${pos24}` : 'N/D';
        if (valEl) valEl.textContent = `Desempeño: ${des24 || 'Media baja'}`;
        if (deltaEl) {
          deltaEl.textContent = 'Histórico 2024';
          deltaEl.className = 'delta-pill neutral';
        }
      } else {
        if (rankEl) rankEl.textContent = pos26 ? `#${pos26}` : 'N/D';
        if (valEl) valEl.textContent = `Desempeño: ${des26 || 'Media baja'}`;
        if (deltaEl) {
          if (pos24 && pos26) {
            const delta = pos24 - pos26;
            const sign = delta > 0 ? '+' : '';
            deltaEl.textContent = `Δ ${sign}${delta} pos (2024: #${pos24})`;
            deltaEl.className = delta >= 0 ? 'delta-pill positive' : 'delta-pill negative';
          } else {
            deltaEl.textContent = 'En su grupo';
            deltaEl.className = 'delta-pill neutral';
          }
        }
      }
    } else {
      // General
      const gen26 = p.pos_general_icu2026 || 15;
      const gen24 = p.pos_general_2024 || 14;
      const des26 = p.des_general_icu2026 || 'Media baja';
      const des24 = p.des_general_2024 || 'Media baja';

      if (is2024) {
        if (rankEl) rankEl.textContent = `#${gen24}`;
        if (valEl) valEl.textContent = `Desempeño: ${des24}`;
        if (deltaEl) {
          deltaEl.textContent = 'Lugar Nacional 2024';
          deltaEl.className = 'delta-pill neutral';
        }
      } else {
        if (rankEl) rankEl.textContent = `#${gen26}`;
        if (valEl) valEl.textContent = `Desempeño: ${des26}`;
        if (deltaEl) {
          const delta = gen24 - gen26;
          const sign = delta > 0 ? '+' : '';
          deltaEl.textContent = `Δ ${sign}${delta} pos vs 2024 (#${gen24})`;
          deltaEl.className = delta >= 0 ? 'delta-pill positive' : 'delta-pill negative';
        }
      }
    }
  }

  // ==========================================================================
  // ESCALAFÓN DE COMPETITIVIDAD (POR TAMAÑO, POR DIAMANTE O POR LUGAR NACIONAL)
  // Permite ordenar según la selección del dropdown:
  // 1. 'estrato': Agrupado por los 4 estratos poblacionales de IMCO
  // 2. 'diamante': Ranking de las 15 ciudades del Diamante (1º al 15º)
  // 3. 'nacional': Por lugar general nacional (de las 72 ciudades de México)
  // Sin la etiqueta redundante "Pos #"
  // ==========================================================================
  renderRankLadderByStrata(state) {
    const container = document.getElementById('rank-ladder-container');
    if (!container) return;

    container.innerHTML = '';

    const { selectedYear, selectedSubindex, selectedIndicator, selectedSizeFilter } = state;
    const is2026 = selectedYear === '2026';
    const orderMode = this.rankOrderMode || 'estrato';

    // Definición de los 4 estratos oficiales de IMCO
    const ESTRATOS = [
      {
        id: 'Más de un millón de habitantes',
        title: 'Más de 1 millón de habs.',
        desc: '8 Metrópolis del Diamante',
        maxRankExpected: 21
      },
      {
        id: 'De 500 mil a un millón de habitantes',
        title: '500 mil a 1 millón de habs.',
        desc: '2 Ciudades del Diamante',
        maxRankExpected: 17
      },
      {
        id: 'De 250 a 500 mil habitantes',
        title: '250 mil a 500 mil de habs.',
        desc: '2 Ciudades del Diamante',
        maxRankExpected: 23
      },
      {
        id: 'Menos de 250 mil habitantes',
        title: 'Menos de 250 mil de habs.',
        desc: '3 Ciudades del Diamante',
        maxRankExpected: 11
      }
    ];

    const isFilteredContext = selectedIndicator || (selectedSubindex && selectedSubindex !== 'general');

    // ==========================================
    // CASO 1: MODO ESTRATO (4 GRUPOS IMCO)
    // ==========================================
    if (orderMode === 'estrato') {
      let activeEstratos = ESTRATOS;
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        activeEstratos = ESTRATOS.filter(e => e.id === selectedSizeFilter);
      }

      activeEstratos.forEach(estrato => {
        let citiesInGroup = this.citiesFeatures
          .map(f => f.properties)
          .filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === estrato.id);

        if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
          citiesInGroup = citiesInGroup.filter(p => {
            const des = this.getCityPerformance(p, state);
            return des === state.selectedPerfFilter;
          });
        }

        if (citiesInGroup.length === 0) {
          if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
            const groupCard = document.createElement('div');
            groupCard.className = 'strata-group-card';
            groupCard.innerHTML = `
              <div class="strata-header">
                <div class="strata-title-wrap">
                  <span class="strata-title">${estrato.title}</span>
                </div>
                <span class="strata-badge">0 ciudades</span>
              </div>
              <div class="empty-strata-msg">Sin ciudades en este estrato con desempeño "${state.selectedPerfFilter}"</div>
            `;
            container.appendChild(groupCard);
          }
          return;
        }

        const processedCities = this.processCityList(citiesInGroup, state);

        // Barra de liderazgo normalizada en el estrato
        const maxRank = estrato.maxRankExpected;
        processedCities.forEach(c => {
          if (c.rank === 99 || (selectedIndicator && c.valueDisplay === 'N/D')) {
            c.barPercentage = 8;
          } else if (c.rank <= maxRank) {
            c.barPercentage = Math.max(15, Math.round(((maxRank - c.rank + 1) / maxRank) * 100));
          } else {
            c.barPercentage = 15;
          }
        });

        // Ordenar por ranking ascendente (1 es primero)
        processedCities.sort((a, b) => a.rank - b.rank);

        const groupCard = document.createElement('div');
        const hasMorelia = processedCities.some(c => c.isMorelia);
        groupCard.className = `strata-group-card ${hasMorelia ? 'has-morelia' : ''}`;

        let citiesHtml = '';
        processedCities.forEach(c => {
          const nacRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
          const subText = nacRank ? `Lugar #${nacRank} Nacional` : '';
          citiesHtml += this.createCityCardItemHtml(c, c.rank, subText);
        });

        groupCard.innerHTML = `
          <div class="strata-header">
            <div class="strata-title-wrap">
              <span class="strata-title">${estrato.title}</span>
            </div>
            <span class="strata-badge">${processedCities.length} ciudades</span>
          </div>
          <div class="rank-ladder-list">
            ${citiesHtml}
          </div>
        `;

        groupCard.querySelectorAll('.rank-card-item').forEach(el => {
          el.addEventListener('click', () => {
            this.openCityDrawer(el.dataset.city);
          });
        });

        container.appendChild(groupCard);
      });

      // ==========================================
      // CASO 2: MODO DIAMANTE (1º AL 15º REGIONAL)
      // ==========================================
    } else if (orderMode === 'diamante') {
      let allCities = this.citiesFeatures.map(f => f.properties);

      if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
        allCities = allCities.filter(p => this.getCityPerformance(p, state) === state.selectedPerfFilter);
      }
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        allCities = allCities.filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === selectedSizeFilter);
      }

      const processedCities = this.processCityList(allCities, state);

      // En el Diamante ordenamos por:
      // - Si hay indicador o subíndice activo: por 'rank' del indicador o subíndice (1 es mejor en IMCO)
      // - Si es Índice General: por 'lugarNac' (1 Querétaro, 2 Guadalajara, ..., 34 Morelia)
      processedCities.sort((a, b) => {
        if (isFilteredContext) {
          const rA = (a.rank !== undefined && a.rank !== null && a.rank !== 99) ? a.rank : 999;
          const rB = (b.rank !== undefined && b.rank !== null && b.rank !== 99) ? b.rank : 999;
          return (rA - rB) || (a.lugarNac - b.lugarNac);
        }
        return a.lugarNac - b.lugarNac;
      });

      // Asignar medallas continuas 1 a N (1º al 15º del Diamante) y barras de liderazgo relativo
      processedCities.forEach((c, idx) => {
        c.diamanteMedal = idx + 1;
        c.barPercentage = Math.max(15, Math.round(((processedCities.length - idx) / processedCities.length) * 100));
      });

      const groupCard = document.createElement('div');
      groupCard.className = 'strata-group-card has-morelia';

      let citiesHtml = '';
      processedCities.forEach(c => {
        const nacRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
        const subText = `Lugar #${nacRank} Nacional · ${c.tamanoCorto}`;
        citiesHtml += this.createCityCardItemHtml(c, c.diamanteMedal, subText);
      });

      const diamanteTitle = selectedIndicator
        ? `Ranking Diamante · ${selectedIndicator.nombre_indicador}`
        : (selectedSubindex && selectedSubindex !== 'general'
          ? `Ranking Diamante · ${this.getSubindexLabel(selectedSubindex)}`
          : 'Ranking Diamante de México (1º al 15º)');

      groupCard.innerHTML = `
        <div class="strata-header">
          <div class="strata-title-wrap">
            <span class="strata-title">${diamanteTitle}</span>
          </div>
          <span class="strata-badge">${processedCities.length} ciudades</span>
        </div>
        <div class="rank-ladder-list">
          ${citiesHtml}
        </div>
      `;

      groupCard.querySelectorAll('.rank-card-item').forEach(el => {
        el.addEventListener('click', () => {
          this.openCityDrawer(el.dataset.city);
        });
      });

      container.appendChild(groupCard);

      // ==========================================
      // CASO 3: MODO NACIONAL (LUGAR GENERAL DE 72)
      // ==========================================
    } else if (orderMode === 'nacional') {
      let allCities = this.citiesFeatures.map(f => f.properties);

      if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
        allCities = allCities.filter(p => this.getCityPerformance(p, state) === state.selectedPerfFilter);
      }
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        allCities = allCities.filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === selectedSizeFilter);
      }

      const processedCities = this.processCityList(allCities, state);

      // Ordenar por Posición Nacional:
      // - Si hay indicador o subíndice activo: por 'rank' oficial en esa métrica (1 a 72)
      // - Si es General: por 'lugarNac' (1 a 72)
      processedCities.sort((a, b) => {
        if (isFilteredContext) {
          const rA = (a.rank !== undefined && a.rank !== null && a.rank !== 99) ? a.rank : 999;
          const rB = (b.rank !== undefined && b.rank !== null && b.rank !== 99) ? b.rank : 999;
          return (rA - rB) || (a.lugarNac - b.lugarNac);
        }
        return a.lugarNac - b.lugarNac;
      });

      // Asignar medalla con el lugar nacional oficial y calcular barra de liderazgo
      processedCities.forEach((c, idx) => {
        const displayRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
        c.nationalMedal = displayRank;
        c.barPercentage = (displayRank <= 72)
          ? Math.max(15, Math.round(((72 - displayRank + 1) / 72) * 100))
          : Math.max(15, Math.round(((processedCities.length - idx) / processedCities.length) * 100));
      });

      const groupCard = document.createElement('div');
      groupCard.className = 'strata-group-card has-morelia';

      let citiesHtml = '';
      processedCities.forEach(c => {
        const subText = `Lugar #${c.nationalMedal} de 72 Nac. · ${c.tamanoCorto}`;
        citiesHtml += this.createCityCardItemHtml(c, c.nationalMedal, subText);
      });

      const nacionalTitle = selectedIndicator
        ? `Posición Nacional · ${selectedIndicator.nombre_indicador}`
        : (selectedSubindex && selectedSubindex !== 'general'
          ? `Posición Nacional · ${this.getSubindexLabel(selectedSubindex)}`
          : 'Posición General Nacional en el ICU');

      groupCard.innerHTML = `
        <div class="strata-header">
          <div class="strata-title-wrap">
            <span class="strata-title">${nacionalTitle}</span>
          </div>
          <span class="strata-badge">${processedCities.length} ciudades</span>
        </div>
        <div class="rank-ladder-list">
          ${citiesHtml}
        </div>
      `;

      groupCard.querySelectorAll('.rank-card-item').forEach(el => {
        el.addEventListener('click', () => {
          this.openCityDrawer(el.dataset.city);
        });
      });

      container.appendChild(groupCard);
    }
  }

  // ==========================================================================
  // VISTA ALTERNA: LISTADO COMPARATIVO DE CIUDADES (3 COLUMNAS SIMULTÁNEAS)
  // ==========================================================================

  setupViewModeSwitcher() {
    const btnMap = document.getElementById('btn-view-map');
    const btnList = document.getElementById('btn-view-list');
    const btnReturnMap = document.getElementById('list-view-return-map-btn');

    const setMode = (mode) => {
      this.viewMode = mode; // 'map' | 'list'
      const grid = document.querySelector('.workspace-grid');
      const mapCanvas = document.getElementById('map-canvas');
      const mapOverlay = document.querySelector('.map-floating-overlay-bottom');
      const listView = document.getElementById('cities-list-view');

      if (btnMap) btnMap.classList.toggle('active', mode === 'map');
      if (btnList) btnList.classList.toggle('active', mode === 'list');

      if (mode === 'list') {
        if (grid) grid.classList.add('view-list-mode');
        if (mapCanvas) mapCanvas.style.display = 'none';
        if (mapOverlay) mapOverlay.style.display = 'none';
        if (listView) listView.style.display = 'flex';
        this.renderCitiesListView(window.appState.getState());
      } else {
        if (grid) grid.classList.remove('view-list-mode');
        if (mapCanvas) mapCanvas.style.display = 'block';
        if (mapOverlay) mapOverlay.style.display = 'flex';
        if (listView) listView.style.display = 'none';
        if (window.dashboardMap && window.dashboardMap.map) {
          setTimeout(() => {
            window.dashboardMap.map.invalidateSize({ pan: false });
          }, 150);
        }
      }
    };

    if (btnMap) btnMap.addEventListener('click', () => setMode('map'));
    if (btnList) btnList.addEventListener('click', () => setMode('list'));
    if (btnReturnMap) btnReturnMap.addEventListener('click', () => setMode('map'));
  }

  getSubindexLabel(subKey) {
    const map = {
      'innovacion_economia': 'Innovación y Economía',
      'infraestructura': 'Infraestructura',
      'mercado_trabajo': 'Mercado de Trabajo',
      'sociedad_medio_ambiente': 'Sociedad y Medio Ambiente',
      'derecho': 'Derecho y Seguridad',
      'sistema_politico_gobierno': 'Sistema Político y Gobierno',
      'general': 'Índice General ICU'
    };
    return map[subKey] || 'Índice General';
  }

  processCityList(cities, state) {
    const { selectedYear, selectedSubindex, selectedIndicator } = state;
    const is2026 = selectedYear === '2026';
    const ESTRATO_SHORT = {
      'Más de un millón de habitantes': '> 1M hab.',
      'De 500 mil a un millón de habitantes': '500k - 1M',
      'De 250 a 500 mil habitantes': '250k - 500k',
      'Menos de 250 mil habitantes': '< 250k'
    };

    return cities.map(p => {
      let rank = 99;
      let valueDisplay = '';
      let deltaDisplay = '';
      let des = 'Media alta';
      let barPercentage = 50;

      const posGeneral = (window.POSICIONES_GENERALES_ICU && window.POSICIONES_GENERALES_ICU[p.NOMBRE]) || null;
      const lugarNac = posGeneral ? parseInt(posGeneral.Lugar) : (p.pos_general_icu2026 || 99);
      const puntajeIcu = posGeneral ? parseFloat(posGeneral.Puntaje) : (parseFloat(p.puntaje) || 52.15);
      const tamano = p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO'] || 'Más de un millón de habitantes';
      const tamanoCorto = ESTRATO_SHORT[tamano] || tamano;

      if (selectedIndicator) {
        const cod = selectedIndicator.codigo_base;
        const v26 = p[`${cod}_2026`];
        const v24 = p[`${cod}_2024`];
        rank = p[`${cod}_pos`] ?? 99;
        des = p[`${cod}_des`] ?? 'Media alta';

        const val = is2026 ? v26 : v24;
        valueDisplay = val !== null && val !== undefined ? `${val}` : 'N/D';

        if (v26 !== null && v24 !== null) {
          const delta = Number((v26 - v24).toFixed(2));
          const sign = delta > 0 ? '+' : '';
          deltaDisplay = `<span class="delta-pill ${delta >= 0 ? 'positive' : 'negative'}">${sign}${delta}</span>`;
        } else {
          deltaDisplay = `<span class="delta-pill neutral">Sin dato</span>`;
        }
      } else if (selectedSubindex && selectedSubindex !== 'general') {
        if (is2026) {
          rank = p[`pos_sub_${selectedSubindex}`] ?? 99;
          des = p[`des_sub_${selectedSubindex}_2026`] ?? 'Media baja';
          valueDisplay = '';
          const p24 = p[`pos_sub_${selectedSubindex}_2024`];
          if (p24 !== null && p24 !== undefined && rank !== 99) {
            const delta = p24 - rank;
            const sign = delta > 0 ? '+' : '';
            deltaDisplay = `<span class="delta-pill ${delta >= 0 ? 'positive' : 'negative'}">${sign}${delta} pos</span>`;
          } else {
            deltaDisplay = `<span class="delta-pill neutral">Sin dato</span>`;
          }
        } else {
          const p24 = p[`pos_sub_${selectedSubindex}_2024`];
          rank = p24 ?? 99;
          des = p[`des_sub_${selectedSubindex}_2024`] ?? 'Media baja';
          valueDisplay = '';
          deltaDisplay = (p24 !== null && p24 !== undefined)
            ? `<span class="delta-pill neutral">ICU 2024</span>`
            : `<span class="delta-pill neutral">Sin dato</span>`;
        }
      } else {
        // General
        if (is2026) {
          rank = p.pos_general_icu2026 || p['POSICIÓN'] || 99;
          des = p.des_general_icu2026 || 'Media baja';
          valueDisplay = '';
          if (p.delta_pos_general !== null && p.delta_pos_general !== undefined) {
            const delta = p.delta_pos_general;
            const sign = delta > 0 ? '+' : '';
            deltaDisplay = `<span class="delta-pill ${delta >= 0 ? 'positive' : 'negative'}">${sign}${delta} pos</span>`;
          } else {
            deltaDisplay = `<span class="delta-pill neutral">Sin dato</span>`;
          }
        } else {
          const p24 = p.pos_general_2024;
          rank = p24 ?? 99;
          des = p.des_general_2024 ?? 'Media baja';
          valueDisplay = '';
          deltaDisplay = (p24 !== null && p24 !== undefined)
            ? `<span class="delta-pill neutral">ICU 2024</span>`
            : `<span class="delta-pill neutral">Sin dato</span>`;
        }
      }

      return {
        props: p,
        name: p.NOMBRE,
        rank: rank,
        lugarNac: lugarNac,
        puntajeIcu: puntajeIcu,
        tamano: tamano,
        tamanoCorto: tamanoCorto,
        valueDisplay: valueDisplay,
        deltaDisplay: deltaDisplay,
        desempeno: des,
        barPercentage: barPercentage,
        isMorelia: p.NOMBRE.toLowerCase() === 'morelia'
      };
    });
  }

  createMedianDividerHtml(variant, text) {
    return `
      <div class="matrix-median-divider ${variant}" title="Punto de corte de la mediana: divide la mitad superior e inferior">
        <span class="mm-divider-line"></span>
        <div class="mm-divider-badge">
          <span class="mm-icon">⚖️</span>
          <span class="mm-text">${text}</span>
        </div>
        <span class="mm-divider-line"></span>
      </div>
    `;
  }

  createCityCardItemHtml(c, displayMedal, subtitleText, medianStatus) {
    let medalClass = 'standard';
    let medalIcon = `#${displayMedal}`;
    if (displayMedal === 1) medalClass = 'gold';
    else if (displayMedal === 2) medalClass = 'silver';
    else if (displayMedal === 3) medalClass = 'bronze';

    const IMCO_COLORS = {
      'Muy alta': '#339766',
      'Alta': '#4bce79',
      'Media alta': '#fbda46',
      'Media baja': '#fd9b1e',
      'Baja': '#e74770',
      'Muy baja': '#8a1136'
    };
    const tierColor = IMCO_COLORS[c.desempeno] || '#64748b';
    const barColor = tierColor;

    const medStatus = medianStatus || { type: 'above', label: '▲ Arriba mediana' };
    const posBorderClass = `pos-${medStatus.type}-median`;

    return `
      <div class="rank-card-item ${c.isMorelia ? 'is-morelia' : ''} ${posBorderClass}" data-city="${c.name}">
        <div class="rank-card-main">
          <div class="rank-card-left">
            <div class="rank-badge-medal ${medalClass}">${medalIcon}</div>
            <div>
              <div class="rank-city-name">
                ${c.name}
                ${c.isMorelia ? '<div style="color:var(--accent-lime); font-size:0.65rem; font-weight:700; letter-spacing:0.04em; margin-top:2px; line-height:1.2;">CORAZÓN DEL DIAMANTE</div>' : ''}
              </div>
              ${subtitleText ? `<div style="color:var(--accent-cyan); font-size:0.66rem; font-family:var(--font-mono); font-weight:700; margin-top:1px;">${subtitleText}</div>` : ''}
            </div>
          </div>
          <div class="rank-card-right">
            ${c.valueDisplay ? `<span class="rank-card-value">${c.valueDisplay}</span>` : ''}
            ${c.deltaDisplay}
          </div>
        </div>
        
        <!-- Barra de Liderazgo Proporcional -->
        <div class="leadership-bar-wrap" title="Nivel de Liderazgo Relativo: ${c.barPercentage}%">
          <div class="leadership-bar-fill" style="width: ${c.barPercentage}%; background: ${barColor}; box-shadow: 0 0 6px ${barColor};"></div>
        </div>

        <div class="rank-card-footer">
          <span style="color: ${tierColor}; font-weight:700;">● ${c.desempeno}</span>
          <span class="median-status-pill ${medStatus.type}">${medStatus.label}</span>
        </div>
      </div>
    `;
  }


  renderCitiesListView(state) {
    const container = document.getElementById('cities-list-view');
    if (!container) return;

    if (!this.allIndicators || this.allIndicators.length === 0) {
      if (this.data && this.data.metadatos) {
        this.allIndicators = this.data.metadatos;
      } else if (window.MORELIA_NEXT_DATA && window.MORELIA_NEXT_DATA.metadatos) {
        this.allIndicators = window.MORELIA_NEXT_DATA.metadatos || [];
      }
    }

    const { selectedSubindex, selectedIndicator } = state;

    // 1. Actualizar Badge de Métrica Activa
    const metricTag = document.getElementById('list-view-active-metric-tag');
    if (metricTag) {
      if (selectedIndicator) {
        metricTag.innerHTML = `<span>Indicador:</span> <strong>${selectedIndicator.nombre_indicador}</strong> (${selectedIndicator.subindice})`;
      } else if (selectedSubindex && selectedSubindex !== 'general') {
        metricTag.innerHTML = `<span>Subíndice:</span> <strong>${this.getSubindexLabel(selectedSubindex)}</strong>`;
      } else {
        metricTag.innerHTML = `<span>Dimensión:</span> <strong>Índice General ICU (IMCO)</strong>`;
      }
    }

    // 2. Renderizar Cuadros de Subíndices
    const subCardsContainer = document.getElementById('matrix-subindex-cards');
    if (subCardsContainer) {
      const SUBINDICES = [
        { key: 'general', title: 'Índice Global', icon: '🌐', color: 'var(--accent-cyan)', count: 'Índice Global' },
        { key: 'innovacion_economia', title: 'Innovación y Economía', icon: '💡', color: 'var(--sub-ie)', count: '7 Indicadores' },
        { key: 'infraestructura', title: 'Infraestructura', icon: '🏗️', color: 'var(--sub-inf)', count: '7 Indicadores' },
        { key: 'mercado_trabajo', title: 'Mercado de Trabajo', icon: '💼', color: 'var(--sub-mt)', count: '6 Indicadores' },
        { key: 'sociedad_medio_ambiente', title: 'Sociedad y Medio Ambiente', icon: '🌱', color: 'var(--sub-sma)', count: '6 Indicadores' },
        { key: 'derecho', title: 'Derecho y Seguridad', icon: '⚖️', color: 'var(--sub-der)', count: '4 Indicadores' },
        { key: 'sistema_politico_gobierno', title: 'Sistema Político y Gobierno', icon: '🏛️', color: 'var(--sub-spg)', count: '5 Indicadores' }
      ];

      const currentSubKey = selectedSubindex || 'general';

      subCardsContainer.innerHTML = SUBINDICES.map(sub => {
        const isActive = currentSubKey === sub.key;
        return `
          <button class="subindex-matrix-card ${isActive ? 'active' : ''}" data-subindex="${sub.key}" style="--sub-color: ${sub.color};">
            <div class="sm-card-icon">${sub.icon}</div>
            <div class="sm-card-info">
              <span class="sm-card-title">${sub.title}</span>
              <span class="sm-card-count">${sub.count}</span>
            </div>
          </button>
        `;
      }).join('');

      subCardsContainer.querySelectorAll('.subindex-matrix-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.subindex;
          let newInd = window.appState.getState().selectedIndicator;
          if (newInd && newInd.subindice_key !== key) {
            newInd = null;
          }
          window.appState.setState({
            selectedSubindex: key,
            selectedIndicator: newInd
          });
        });
      });
    }

    // 3. Renderizar Barra de Indicadores
    const indContainer = document.getElementById('matrix-indicators-container');
    if (indContainer) {
      if (selectedSubindex && selectedSubindex !== 'general') {
        const subName = this.getSubindexLabel(selectedSubindex);
        const subInds = this.allIndicators.filter(i => i.subindice_key === selectedSubindex);

        let chipsHtml = `
          <button class="matrix-ind-chip ${!selectedIndicator ? 'active' : ''}" data-code="all">
            Resumen General de ${subName}
          </button>
        `;

        subInds.forEach(ind => {
          const isSelected = selectedIndicator && selectedIndicator.codigo_base === ind.codigo_base;
          chipsHtml += `
            <button class="matrix-ind-chip ${isSelected ? 'active' : ''}" data-code="${ind.codigo_base}">
              #${ind.id} ${ind.nombre_indicador}
            </button>
          `;
        });

        indContainer.innerHTML = `
          <div class="matrix-ind-header">
            <span class="matrix-ind-title">Indicadores de ${subName} (${subInds.length}):</span>
          </div>
          <div class="matrix-ind-chips-wrap">
            ${chipsHtml}
          </div>
        `;

        indContainer.querySelectorAll('.matrix-ind-chip').forEach(btn => {
          btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            if (code === 'all') {
              this.clearActiveIndicator();
            } else {
              const indObj = this.allIndicators.find(i => i.codigo_base === code);
              if (indObj) {
                this.selectIndicator(indObj, true);
              }
            }
          });
        });
      } else {
        indContainer.innerHTML = `
          <div class="matrix-general-hint">
            Viendo el <strong>Índice General de Competitividad Urbana (ICU)</strong>. Haz clic en cualquiera de los 6 subíndices superiores para desplegar sus indicadores específicos y comparar el desempeño de las ciudades.
          </div>
        `;
      }
    }

    // 3.1 Renderizar Tarjeta de Definición Metodológica
    const defCard = document.getElementById('matrix-definition-card');
    if (defCard) {
      this.renderDefinitionCard(defCard, state);
    }

    // 4. Renderizar las 3 Columnas Simultáneas
    this.renderMatrixThreeColumns(state);
  }

  renderDefinitionCard(container, state) {
    const { selectedSubindex, selectedIndicator } = state;

    if (selectedIndicator) {
      const code = selectedIndicator.codigo_base;
      const defData = INDICATOR_DEFINITIONS[code] || {
        nombre: selectedIndicator.nombre_indicador,
        unidad: selectedIndicator.unidad_medida || 'Métrica cuantitativa',
        definicion: `Mide el desempeño de la ciudad en ${selectedIndicator.nombre_indicador.toLowerCase()} como parte de la dimensión de ${selectedIndicator.subindice}.`,
        impacto: 'Influye directamente en la posición de competitividad dentro de su estrato y a nivel nacional.'
      };

      const SUB_COLORS = {
        'innovacion_economia': 'var(--sub-ie)',
        'infraestructura': 'var(--sub-inf)',
        'mercado_trabajo': 'var(--sub-mt)',
        'sociedad_medio_ambiente': 'var(--sub-sma)',
        'derecho': 'var(--sub-der)',
        'sistema_politico_gobierno': 'var(--sub-spg)'
      };
      const accentColor = SUB_COLORS[selectedIndicator.subindice_key] || 'var(--accent-cyan)';

      container.style.setProperty('--def-accent', accentColor);
      container.innerHTML = `
        <div class="matrix-def-header">
          <div class="matrix-def-badge-wrap">
            <span class="matrix-def-badge" style="background: rgba(0, 240, 255, 0.12); color: ${accentColor}; border-color: ${accentColor};">
              Indicador #${selectedIndicator.id}
            </span>
            <span class="matrix-def-code">Código: ${code}</span>
          </div>
          <span class="matrix-def-pill accent">Subíndice: ${selectedIndicator.subindice}</span>
        </div>
        <h3 class="matrix-def-title">${defData.nombre}</h3>
        <p class="matrix-def-desc">${defData.definicion}</p>
        <div class="matrix-def-meta-row">
          <div class="matrix-def-pill">
            <span>Unidad de medida:</span>
            <strong>${defData.unidad || selectedIndicator.unidad_medida}</strong>
          </div>
          <div class="matrix-def-pill">
            <span>Relevancia IMCO:</span>
            <span>${defData.impacto}</span>
          </div>
        </div>
      `;
    } else if (selectedSubindex && selectedSubindex !== 'general') {
      const subDef = SUBINDEX_DEFINITIONS[selectedSubindex] || {
        nombre: this.getSubindexLabel(selectedSubindex),
        descripcion: 'Dimensión temática que agrupa indicadores clave de competitividad urbana evaluados por el IMCO.',
        alcance: 'Selecciona un indicador de la barra superior para ver su definición específica y valores por ciudad.'
      };

      const SUB_COLORS = {
        'innovacion_economia': 'var(--sub-ie)',
        'infraestructura': 'var(--sub-inf)',
        'mercado_trabajo': 'var(--sub-mt)',
        'sociedad_medio_ambiente': 'var(--sub-sma)',
        'derecho': 'var(--sub-der)',
        'sistema_politico_gobierno': 'var(--sub-spg)'
      };
      const accentColor = SUB_COLORS[selectedSubindex] || 'var(--accent-cyan)';

      container.style.setProperty('--def-accent', accentColor);
      container.innerHTML = `
        <div class="matrix-def-header">
          <div class="matrix-def-badge-wrap">
            <span class="matrix-def-badge" style="color: ${accentColor}; border-color: ${accentColor};">
              Subíndice Temático IMCO
            </span>
          </div>
          <span class="matrix-def-pill accent">Dimensión Integral</span>
        </div>
        <h3 class="matrix-def-title">${subDef.nombre}</h3>
        <p class="matrix-def-desc">${subDef.descripcion}</p>
        <div class="matrix-def-meta-row">
          <div class="matrix-def-pill">
            <span>Alcance:</span>
            <strong>${subDef.alcance}</strong>
          </div>
          <div class="matrix-def-pill">
            <span>Tip:</span>
            <span>Haz clic en cualquier indicador para filtrar y ver su definición individual y posiciones.</span>
          </div>
        </div>
      `;
    } else {
      const genDef = SUBINDEX_DEFINITIONS['general'];
      container.style.setProperty('--def-accent', 'var(--accent-cyan)');
      container.innerHTML = `
        <div class="matrix-def-header">
          <div class="matrix-def-badge-wrap">
            <span class="matrix-def-badge">Índice Global</span>
            <span class="matrix-def-code">Metodología IMCO</span>
          </div>
          <span class="matrix-def-pill accent">72 Ciudades Evaluadas</span>
        </div>
        <h3 class="matrix-def-title">${genDef.nombre}</h3>
        <p class="matrix-def-desc">${genDef.descripcion}</p>
        <div class="matrix-def-meta-row">
          <div class="matrix-def-pill">
            <span>Estructura:</span>
            <strong>6 subíndices temáticos y 35 indicadores cuantitativos</strong>
          </div>
          <div class="matrix-def-pill">
            <span>Comparativa:</span>
            <span>Selecciona un subíndice o indicador arriba para ver definiciones y comparativas específicas.</span>
          </div>
        </div>
      `;
    }
  }

  renderMatrixThreeColumns(state) {
    if (!this.citiesFeatures || this.citiesFeatures.length === 0) {
      if (this.data && this.data.ciudades && this.data.ciudades.features) {
        this.citiesFeatures = this.data.ciudades.features;
      } else if (window.MORELIA_NEXT_DATA && window.MORELIA_NEXT_DATA.ciudades) {
        this.citiesFeatures = window.MORELIA_NEXT_DATA.ciudades.features || [];
      }
    }

    const { selectedSizeFilter } = state || {};
    const isFilteredContext = state.selectedIndicator || (state.selectedSubindex && state.selectedSubindex !== 'general');

    const ESTRATOS = [
      { id: 'Más de un millón de habitantes', title: 'Más de 1 millón de habs.', maxRankExpected: 21 },
      { id: 'De 500 mil a un millón de habitantes', title: '500 mil a 1 millón de habs.', maxRankExpected: 17 },
      { id: 'De 250 a 500 mil habitantes', title: '250 mil a 500 mil de habs.', maxRankExpected: 23 },
      { id: 'Menos de 250 mil habitantes', title: 'Menos de 250 mil de habs.', maxRankExpected: 11 }
    ];

    // ==========================================
    // COLUMNA 1: POR TAMAÑO DE CIUDAD (ESTRATOS)
    // ==========================================
    const colEstrato = document.getElementById('matrix-content-estrato');
    if (colEstrato) {
      colEstrato.innerHTML = '';
      let activeEstratos = ESTRATOS;
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        activeEstratos = ESTRATOS.filter(e => e.id === selectedSizeFilter);
      }

      let totalCitiesEstrato = 0;
      activeEstratos.forEach(estrato => {
        let citiesInGroup = this.citiesFeatures
          .map(f => f.properties)
          .filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === estrato.id);

        if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
          citiesInGroup = citiesInGroup.filter(p => this.getCityPerformance(p, state) === state.selectedPerfFilter);
        }

        if (citiesInGroup.length === 0) return;
        totalCitiesEstrato += citiesInGroup.length;

        const processed = this.processCityList(citiesInGroup, state);
        const maxRank = estrato.maxRankExpected;
        processed.forEach(c => {
          if (c.rank === 99 || (state.selectedIndicator && c.valueDisplay === 'N/D')) {
            c.barPercentage = 8;
          } else if (c.rank <= maxRank) {
            c.barPercentage = Math.max(15, Math.round(((maxRank - c.rank + 1) / maxRank) * 100));
          } else {
            c.barPercentage = 15;
          }
        });
        processed.sort((a, b) => a.rank - b.rank);

        const groupCard = document.createElement('div');
        const hasMorelia = processed.some(c => c.isMorelia);
        groupCard.className = `strata-group-card ${hasMorelia ? 'has-morelia' : ''}`;

        const totalInGroup = processed.length;
        const midIdx = Math.floor(totalInGroup / 2);
        const isOdd = totalInGroup % 2 !== 0;

        let citiesHtml = '';
        processed.forEach((c, idx) => {
          let medStatus = { type: 'above', label: '▲ Arriba mediana' };
          if (totalInGroup === 1) {
            medStatus = { type: 'exact', label: '● Única en grupo' };
          } else if (isOdd) {
            if (idx < midIdx) {
              medStatus = { type: 'above', label: '▲ Arriba mediana' };
            } else if (idx === midIdx) {
              medStatus = { type: 'exact', label: '● Mediana estrato' };
              citiesHtml += this.createMedianDividerHtml('stratum', `Mediana del Estrato · #${c.rank} ${c.name}`);
            } else {
              medStatus = { type: 'below', label: '▼ Abajo mediana' };
            }
          } else {
            if (idx === midIdx) {
              citiesHtml += this.createMedianDividerHtml('stratum', 'Mediana del Estrato · Punto medio');
            }
            if (idx < midIdx) {
              medStatus = { type: 'above', label: '▲ Arriba mediana' };
            } else {
              medStatus = { type: 'below', label: '▼ Abajo mediana' };
            }
          }

          const nacRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
          const subText = nacRank ? `Lugar #${nacRank} Nacional` : '';
          citiesHtml += this.createCityCardItemHtml(c, c.rank, subText, medStatus);
        });

        groupCard.innerHTML = `
          <div class="strata-header">
            <span class="strata-title">${estrato.title}</span>
            <span class="strata-badge">${processed.length} ciudades</span>
          </div>
          <div class="rank-ladder-list">
            ${citiesHtml}
          </div>
        `;
        colEstrato.appendChild(groupCard);
      });

      const countBadge = document.getElementById('matrix-counter-estrato');
      if (countBadge) countBadge.textContent = `${totalCitiesEstrato} ciudades`;
    }

    // ==========================================
    // COLUMNA 2: POSICIÓN EN EL DIAMANTE (1º AL 15º)
    // ==========================================
    const colDiamante = document.getElementById('matrix-content-diamante');
    if (colDiamante) {
      colDiamante.innerHTML = '';
      let allCities = this.citiesFeatures.map(f => f.properties);

      if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
        allCities = allCities.filter(p => this.getCityPerformance(p, state) === state.selectedPerfFilter);
      }
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        allCities = allCities.filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === selectedSizeFilter);
      }

      const processed = this.processCityList(allCities, state);

      // Ordenar
      processed.sort((a, b) => {
        if (isFilteredContext) {
          const rA = (a.rank !== undefined && a.rank !== null && a.rank !== 99) ? a.rank : 999;
          const rB = (b.rank !== undefined && b.rank !== null && b.rank !== 99) ? b.rank : 999;
          return (rA - rB) || (a.lugarNac - b.lugarNac);
        }
        return a.lugarNac - b.lugarNac;
      });

      processed.forEach((c, idx) => {
        c.diamanteMedal = idx + 1;
        c.barPercentage = Math.max(15, Math.round(((processed.length - idx) / processed.length) * 100));
      });

      const totalDiamante = processed.length;
      const midIdx = Math.floor(totalDiamante / 2);
      const isOdd = totalDiamante % 2 !== 0;

      let citiesHtml = '';
      processed.forEach((c, idx) => {
        let medStatus = { type: 'above', label: '▲ Arriba mediana' };
        if (totalDiamante === 1) {
          medStatus = { type: 'exact', label: '● Única ciudad' };
        } else if (isOdd) {
          if (idx < midIdx) {
            medStatus = { type: 'above', label: '▲ Arriba mediana' };
          } else if (idx === midIdx) {
            medStatus = { type: 'exact', label: '● Mediana Diamante' };
            citiesHtml += this.createMedianDividerHtml('diamante', `Mediana del Diamante · 8º Lugar (${c.name})`);
          } else {
            medStatus = { type: 'below', label: '▼ Abajo mediana' };
          }
        } else {
          if (idx === midIdx) {
            citiesHtml += this.createMedianDividerHtml('diamante', 'Mediana del Diamante · Punto medio');
          }
          if (idx < midIdx) {
            medStatus = { type: 'above', label: '▲ Arriba mediana' };
          } else {
            medStatus = { type: 'below', label: '▼ Abajo mediana' };
          }
        }

        const nacRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
        const subText = `Lugar #${nacRank} Nacional · ${c.tamanoCorto}`;
        citiesHtml += this.createCityCardItemHtml(c, c.diamanteMedal, subText, medStatus);
      });

      colDiamante.innerHTML = `<div class="rank-ladder-list">${citiesHtml}</div>`;

      const countBadge = document.getElementById('matrix-counter-diamante');
      if (countBadge) countBadge.textContent = `${processed.length} ciudades`;
    }

    // ==========================================
    // COLUMNA 3: LUGAR A NIVEL NACIONAL (DE 72)
    // ==========================================
    const colNacional = document.getElementById('matrix-content-nacional');
    if (colNacional) {
      colNacional.innerHTML = '';
      let allCities = this.citiesFeatures.map(f => f.properties);

      if (state.selectedPerfFilter && state.selectedPerfFilter !== 'all') {
        allCities = allCities.filter(p => this.getCityPerformance(p, state) === state.selectedPerfFilter);
      }
      if (selectedSizeFilter && selectedSizeFilter !== 'all') {
        allCities = allCities.filter(p => (p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO']) === selectedSizeFilter);
      }

      const processed = this.processCityList(allCities, state);

      // Ordenar por lugar nacional
      processed.sort((a, b) => {
        if (isFilteredContext) {
          const rA = (a.rank !== undefined && a.rank !== null && a.rank !== 99) ? a.rank : 999;
          const rB = (b.rank !== undefined && b.rank !== null && b.rank !== 99) ? b.rank : 999;
          return (rA - rB) || (a.lugarNac - b.lugarNac);
        }
        return a.lugarNac - b.lugarNac;
      });

      processed.forEach((c, idx) => {
        const displayRank = isFilteredContext ? ((c.rank && c.rank !== 99) ? c.rank : c.lugarNac) : c.lugarNac;
        c.nationalMedal = displayRank;
        c.barPercentage = (displayRank <= 72)
          ? Math.max(15, Math.round(((72 - displayRank + 1) / 72) * 100))
          : Math.max(15, Math.round(((processed.length - idx) / processed.length) * 100));
      });

      const totalNac = processed.length;
      const midIdx = Math.floor(totalNac / 2);
      const isOdd = totalNac % 2 !== 0;

      let citiesHtml = '';
      processed.forEach((c, idx) => {
        let medStatus = { type: 'above', label: '▲ Arriba mediana' };
        if (totalNac === 1) {
          medStatus = { type: 'exact', label: '● Única ciudad' };
        } else if (isOdd) {
          if (idx < midIdx) {
            medStatus = { type: 'above', label: '▲ Arriba mediana' };
          } else if (idx === midIdx) {
            medStatus = { type: 'exact', label: '● Mediana Diamante' };
            citiesHtml += this.createMedianDividerHtml('nacional', `Mediana Nacional · 8ª Ciudad (${c.name} · #${c.nationalMedal} Nac.)`);
          } else {
            medStatus = { type: 'below', label: '▼ Abajo mediana' };
          }
        } else {
          if (idx === midIdx) {
            citiesHtml += this.createMedianDividerHtml('nacional', 'Mediana Nacional · Punto medio');
          }
          if (idx < midIdx) {
            medStatus = { type: 'above', label: '▲ Arriba mediana' };
          } else {
            medStatus = { type: 'below', label: '▼ Abajo mediana' };
          }
        }

        const natTag = c.nationalMedal <= 36 ? 'Top 50% Nal.' : 'Mitad inf.';
        const subText = `Lugar #${c.nationalMedal} de 72 Nac. · ${c.tamanoCorto} · ${natTag}`;
        citiesHtml += this.createCityCardItemHtml(c, c.nationalMedal, subText, medStatus);
      });

      colNacional.innerHTML = `<div class="rank-ladder-list">${citiesHtml}</div>`;

      const countBadge = document.getElementById('matrix-counter-nacional');
      if (countBadge) countBadge.textContent = `${processed.length} ciudades`;
    }

    // Eventos de click en las tarjetas de las 3 columnas para abrir expediente
    document.querySelectorAll('.cities-list-view .rank-card-item').forEach(el => {
      el.addEventListener('click', () => {
        this.openCityDrawer(el.dataset.city);
      });
    });
  }

  // ==========================================
  // EXPEDIENTE DETALLADO DE CIUDAD (DRAWER)
  // ==========================================

  openCityDrawer(cityName) {
    const drawer = document.getElementById('city-drawer');
    if (!drawer) return;

    window.appState.setState({ selectedCity: cityName });
    drawer.classList.add('open');

    const cityFeature = this.citiesFeatures.find(f => f.properties.NOMBRE === cityName);
    const p = cityFeature ? cityFeature.properties : {};

    // Poblar selector de comparación con opción 2024 y las otras ciudades divididas por tamaño
    const compSelect = document.getElementById('drawer-compare-select');
    if (compSelect) {
      let optionsHtml = '<option value="none">-- Sin Comparación --</option>';

      const has2024 = p.pos_general_2024 !== null && p.pos_general_2024 !== undefined;
      if (has2024) {
        optionsHtml += '<option value="hist_2024">Comparar con el 2024</option>';
      }

      // Estratos oficiales IMCO para agrupar las ciudades por tamaño
      const ESTRATOS = [
        {
          id: 'Más de un millón de habitantes',
          label: 'Más de un millón de habitantes'
        },
        {
          id: 'De 500 mil a un millón de habitantes',
          label: 'De 500 mil a 1 millón de habitantes'
        },
        {
          id: 'De 250 a 500 mil habitantes',
          label: 'De 250 a 500 mil habitantes'
        },
        {
          id: 'Menos de 250 mil habitantes',
          label: 'Menos de 250 mil habitantes'
        }
      ];

      const classifiedNames = new Set();
      ESTRATOS.forEach(estrato => {
        const citiesInGroup = this.citiesFeatures.filter(f => {
          const size = f.properties.TAMANO_NORMALIZADO || f.properties['TAMAÑO'] || f.properties['TAMAO'];
          return size === estrato.id && f.properties.NOMBRE !== cityName;
        });

        if (citiesInGroup.length > 0) {
          optionsHtml += `<optgroup label="${estrato.label}">`;
          citiesInGroup.forEach(f => {
            const name = f.properties.NOMBRE;
            classifiedNames.add(name);
            optionsHtml += `<option value="${name}">${name}</option>`;
          });
          optionsHtml += '</optgroup>';
        }
      });

      // Otras ciudades (si existiera alguna fuera de los 4 estratos)
      const unclassified = this.citiesFeatures.filter(f => {
        const name = f.properties.NOMBRE;
        return name !== cityName && !classifiedNames.has(name);
      });
      if (unclassified.length > 0) {
        optionsHtml += '<optgroup label="Otras ciudades">';
        unclassified.forEach(f => {
          optionsHtml += `<option value="${f.properties.NOMBRE}">${f.properties.NOMBRE}</option>`;
        });
        optionsHtml += '</optgroup>';
      }

      compSelect.innerHTML = optionsHtml;

      const currentComp = window.appState.getState().comparisonCity || 'none';
      if (currentComp === 'hist_2024' && has2024) {
        compSelect.value = 'hist_2024';
      } else if (currentComp !== 'none' && currentComp !== 'hist_2024' && currentComp !== cityName) {
        compSelect.value = currentComp;
      } else {
        compSelect.value = 'none';
        window.appState.setState({ comparisonCity: 'none' });
      }
    }

    this.updateDrawerContent();
  }

  updateDrawerContent() {
    const state = window.appState.getState();
    const { selectedCity, comparisonCity } = state;
    const cityFeature = this.citiesFeatures.find(f => f.properties.NOMBRE === selectedCity);
    if (!cityFeature) return;

    const p = cityFeature.properties;
    const isCompare2024 = comparisonCity === 'hist_2024';
    const compFeature = (comparisonCity && comparisonCity !== 'none' && comparisonCity !== 'hist_2024')
      ? this.citiesFeatures.find(f => f.properties.NOMBRE === comparisonCity)
      : null;
    const pComp = compFeature ? compFeature.properties : null;

    // 1. Encabezado
    const titleEl = document.getElementById('drawer-city-title');
    const badgeEl = document.getElementById('drawer-city-badge');
    const groupEl = document.getElementById('drawer-city-group');
    const metricsEl = document.getElementById('drawer-city-icu-metrics');

    if (titleEl) titleEl.textContent = p.NOMBRE;
    if (groupEl) groupEl.textContent = p.TAMANO_NORMALIZADO || p['TAMAÑO'] || p['TAMAO'] || '';

    // Renderizar métricas de Posiciones Generales del ICU (Lugar, Variación, Nivel, Puntaje)
    const posData = (window.POSICIONES_GENERALES_ICU && window.POSICIONES_GENERALES_ICU[p.NOMBRE]) || null;
    if (metricsEl) {
      metricsEl.innerHTML = this.renderCityPosBadges(posData);
    }

    if (badgeEl) {
      const p26 = p.pos_general_icu2026;
      const p24 = p.pos_general_2024;
      const estratoMeta = window.getEstratoMeta
        ? window.getEstratoMeta(p.TAMANO_NORMALIZADO || p['TAMAÑO'] || '', posData ? posData.Grupo : '')
        : { nombre: p.TAMANO_NORMALIZADO || '', total: 21 };

      if (groupEl) {
        groupEl.textContent = `${estratoMeta.nombre} (${estratoMeta.total} ciudades)`;
      }

      if (isCompare2024) {
        if (p24 !== null && p24 !== undefined) {
          const delta = p.delta_pos_general ?? (p26 ? p24 - p26 : 0);
          const sign = delta > 0 ? '+' : '';
          badgeEl.textContent = `Posición #${p26 || '-'} (2026) vs #${p24} (2024) [Δ ${sign}${delta}] de ${estratoMeta.total}`;
        } else {
          badgeEl.textContent = `Posición #${p26 || '-'} de ${estratoMeta.total} (2026) vs Sin dato en 2024`;
        }
      } else if (pComp) {
        badgeEl.textContent = `${p.NOMBRE} (#${p26 || '-'}) vs ${pComp.NOMBRE} (#${pComp.pos_general_icu2026 || '-'})`;
      } else {
        badgeEl.textContent = `Posición #${p26 || '-'} de ${estratoMeta.total}`;
      }
      badgeEl.title = `Posición #${p26 || '-'} de ${estratoMeta.total} ciudades de acuerdo a la clasificación de tamaño (${estratoMeta.nombre})`;
    }

    // 2. Gráfico de Radar de Desempeño en los 6 Subíndices
    if (window.dashboardCharts) {
      window.dashboardCharts.renderRadarSubindices('drawer-radar-canvas', p, pComp, state);
    }

    // 3. Tabla de los 35 indicadores agrupados por tema (6 subíndices)
    const tableBody = document.getElementById('drawer-indicators-tbody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    const IMCO_COLORS = {
      'Muy alta': '#339766',
      'Alta': '#4bce79',
      'Media alta': '#fbda46',
      'Media baja': '#fd9b1e',
      'Baja': '#e74770',
      'Muy baja': '#8a1136'
    };

    const THEMES = [
      { key: 'innovacion_economia', name: 'Innovación y Economía', icon: '💡' },
      { key: 'infraestructura', name: 'Infraestructura', icon: '🏗️' },
      { key: 'mercado_trabajo', name: 'Mercado de Trabajo', icon: '💼' },
      { key: 'sociedad_medio_ambiente', name: 'Sociedad y Medio Ambiente', icon: '🌿' },
      { key: 'derecho', name: 'Derecho', icon: '⚖️' },
      { key: 'sistema_politico_gobierno', name: 'Sistema Político y Gobierno', icon: '🏛️' }
    ];

    THEMES.forEach((theme) => {
      // Filtrar indicadores de este tema
      const themeIndicators = this.allIndicators.filter(ind => {
        return ind.subindice_key === theme.key ||
          ind.subindice.toLowerCase().includes(theme.name.toLowerCase().split(' ')[0]);
      });

      if (themeIndicators.length === 0) return;

      const pos26 = p[`pos_sub_${theme.key}`];
      const des26 = p[`des_sub_${theme.key}_2026`] || 'Media baja';
      const pos24 = p[`pos_sub_${theme.key}_2024`];
      const desColor = IMCO_COLORS[des26] || '#00f0ff';

      let metaBadgeText = `Pos #${pos26 || '-'} · ${des26}`;
      if (isCompare2024 && pos24) {
        metaBadgeText = `2026: #${pos26} (${des26}) | 2024: #${pos24}`;
      }

      // Fila de Encabezado de Tema
      const headerTr = document.createElement('tr');
      headerTr.className = 'table-theme-header-row';
      headerTr.innerHTML = `
        <td colspan="6">
          <div class="theme-header-content">
            <div class="theme-title-left">
              <span class="theme-icon icon-mono">${theme.icon}</span>
              <span class="theme-title">${theme.name}</span>
              <span class="theme-count">(${themeIndicators.length} ind.)</span>
            </div>
            <div class="theme-meta-right">
              <span class="theme-sub-badge" style="background:${desColor}; color:#000;">
                ${metaBadgeText}
              </span>
            </div>
          </div>
        </td>
      `;
      tableBody.appendChild(headerTr);

      // Filas de cada indicador del tema
      themeIndicators.forEach((ind) => {
        const cod = ind.codigo_base;
        const v26 = p[`${cod}_2026`];
        const v24 = p[`${cod}_2024`];
        const pos = p[`${cod}_pos`];
        const des = p[`${cod}_des`];

        // Cálculo de Delta
        let deltaBadge = '<span class="delta-pill neutral">Sin dato</span>';
        if (v26 !== null && v24 !== null) {
          const delta = Number((v26 - v24).toFixed(2));
          const sign = delta > 0 ? '+' : '';
          const clrClass = delta > 0 ? 'positive' : (delta < 0 ? 'negative' : 'neutral');
          deltaBadge = `<span class="delta-pill ${clrClass}">${sign}${delta}</span>`;
        }

        // Desempeño
        const clr = IMCO_COLORS[des] || '#64748b';
        const desBadge = `<span class="perf-badge" style="background:${clr};">${des || 'N/D'}</span>`;

        const tr = document.createElement('tr');
        tr.className = 'indicator-row';
        tr.innerHTML = `
          <td class="col-ind-name">
            <div class="ind-title">${ind.nombre_indicador}</div>
            <div class="ind-unit" title="${ind.unidad_medida}">${ind.unidad_medida}</div>
          </td>
          <td class="col-val col-val-2026">${v26 !== null && v26 !== undefined ? v26 : 'N/D'}</td>
          <td class="col-val col-val-2024">${v24 !== null && v24 !== undefined ? v24 : '<span style="color:var(--text-muted); font-size:0.75rem;">Sin dato</span>'}</td>
          <td class="col-center">${deltaBadge}</td>
          <td class="col-center col-pos">#${pos ?? '-'}</td>
          <td class="col-center">${desBadge}</td>
        `;
        tableBody.appendChild(tr);
      });
    });
  }

  // ==========================================
  // RENDERIZADO DE BADGES: POSICIONES GENERALES ICU
  // (Lugar, Variación, Nivel, Puntaje de Posiciones generales del ICU.xlsx)
  // ==========================================
  renderCityPosBadges(posData) {
    if (!posData) return '';

    const { Lugar, Variacion, Nivel, Puntaje } = posData;

    // Colores oficiales según escala IMCO
    const NIVEL_STYLES = {
      'Muy alta': { bg: 'rgba(51, 151, 102, 0.20)', border: '#339766', color: '#4ade80' },
      'Alta': { bg: 'rgba(75, 206, 121, 0.20)', border: '#4bce79', color: '#86efac' },
      'Media alta': { bg: 'rgba(251, 218, 70, 0.20)', border: '#fbda46', color: '#fef08a' },
      'Media baja': { bg: 'rgba(253, 155, 30, 0.20)', border: '#fd9b1e', color: '#fed7aa' },
      'Baja': { bg: 'rgba(231, 71, 112, 0.20)', border: '#e74770', color: '#fca5a5' },
      'Muy baja': { bg: 'rgba(138, 17, 54, 0.24)', border: '#8a1136', color: '#f87171' }
    };
    const nStyle = NIVEL_STYLES[Nivel] || { bg: 'rgba(148, 163, 184, 0.15)', border: '#64748b', color: '#cbd5e1' };

    // Formatear variación con flecha y estilo
    let varClass = 'var-eq';
    let varText = Variacion || '=';
    if (typeof Variacion === 'string') {
      if (Variacion.startsWith('sube')) {
        varClass = 'var-up';
        const num = Variacion.replace('sube', '').trim();
        varText = `▲ ${num.startsWith('+') ? num : '+' + num}`;
      } else if (Variacion.startsWith('baja')) {
        varClass = 'var-down';
        const num = Variacion.replace('baja', '').trim();
        varText = `▼ ${num.startsWith('-') ? num : '-' + num}`;
      } else if (Variacion === '=') {
        varClass = 'var-eq';
        varText = '= 0';
      }
    }

    return `
      <div class="pos-metric-badge badge-lugar" title="Lugar en el ranking general nacional del ICU (de 72 ciudades)">
        <b class="pos-v">Lugar #${Lugar} Nacional</b>
      </div>
      <div class="pos-metric-badge ${varClass}" title="Variación de posiciones respecto a la edición previa del ICU">
        <span class="pos-k">Variación</span>
        <b class="pos-v">${varText}</b>
      </div>
      <div class="pos-metric-badge badge-nivel" style="background:${nStyle.bg}; border-color:${nStyle.border}; color:${nStyle.color};" title="Nivel general de competitividad urbana">
        <span class="pos-k" style="color:${nStyle.color}; opacity:0.85;">Nivel</span>
        <b class="pos-v" style="color:${nStyle.color};">${Nivel}</b>
      </div>
      <div class="pos-metric-badge badge-puntaje" title="Puntaje global obtenido en el ICU">
        <span class="pos-k">Puntaje</span>
        <b class="pos-v">${Puntaje}</b>
      </div>
    `;
  }
}

window.dashboardUI = new DashboardUI();
