/**
 * state.js - Central State Manager para Morelia NExT ICU Dashboard
 */

class AppState {
  constructor() {
    this.state = {
      selectedYear: '2026',          // '2026' | '2024' | 'delta'
      selectedSubindex: 'general',    // 'general' | 'innovacion_economia' | 'infraestructura' | etc.
      selectedIndicator: null,       // objeto indicador de metadatos o null
      selectedSizeFilter: 'all',     // 'all' | tamaño específico
      selectedPerfFilter: 'all',     // 'all' | 'Muy alta' | 'Alta' | 'Media alta' | 'Media baja' | 'Baja' | 'Muy baja'
      selectedCity: 'Morelia',       // ciudad activa para dossier
      comparisonCity: 'none',        // 'none' | 'hist_2024' | nombre de ciudad benchmark
      activeLayers: {
        satellite: true,
        network: true,
        polygon: true,
        buffer: true,
        labels: true
      },
      searchQuery: ''
    };

    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(updates) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...updates };
    this.notify(prevState, this.state);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(prevState, currentState) {
    this.listeners.forEach(fn => fn(currentState, prevState));
  }
}

window.appState = new AppState();
