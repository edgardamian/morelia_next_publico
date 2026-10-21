/**
 * app.js - Main Application Orchestrator for Morelia NExT ICU Dashboard
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log("=== INICIANDO MORELIA NExT ICU DASHBOARD ===");

  if (!window.MORELIA_NEXT_DATA) {
    console.error("Error crítico: No se encontró window.MORELIA_NEXT_DATA");
    alert("Error cargando los datos geoespaciales del Diamante. Verifique la consola.");
    return;
  }

  // 1. Inicializar Gráficos
  if (window.dashboardCharts) {
    window.dashboardCharts.init();
  }

  // 2. Inicializar Mapa Espacial
  if (window.dashboardMap) {
    window.dashboardMap.init('map-canvas');
  }

  // 3. Inicializar Interfaz de Usuario y Eventos
  if (window.dashboardUI) {
    window.dashboardUI.init();
  }

  console.log("=== DASHBOARD MORELIA NExT LISTO Y OPERATIVO ===");
});
