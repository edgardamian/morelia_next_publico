# MORELIA NExT // Observatorio de Competitividad Urbana (ICU 2024 - 2026)
### Zona del Diamante de México - Plan de Gran Visión Morelia NExT

Este dashboard interactivo e inmersivo ha sido desarrollado con la estética cyber-cartográfica y espacial del **Plan de Gran Visión Morelia NExT**, integrando los datos oficiales de competitividad urbana (IMCO ICU 2024 - 2026) a partir del archivo geoespacial `CIUDADES_DIAMANTE_IMCO.gpkg`.

---

## 🚀 Cómo Ejecutar y Visualizar el Dashboard

### Opción 1: Servidor Local (Recomendado)
Desde la terminal en la raíz del proyecto, ejecuta:
```bash
py -3.11 -m http.server 8080 --directory DASHBOARD_MORELIA_NEXT
```
Luego abre en tu navegador web:
👉 **`http://localhost:8080`**

### Opción 2: Apertura Directa en Navegador
Puedes hacer doble clic directamente sobre el archivo:
[`DASHBOARD_MORELIA_NEXT/index.html`](file:///d:/bitacora_investigacion/2026/4T_TRIMESTRE/4T_DASH_IMCO_NEXT/DASHBOARD_MORELIA_NEXT/index.html).
*(Los datos están pre-empaquetados en `js/data-bundle.js`, por lo que funcionará de inmediato incluso sin servidor HTTP).*

---

## 💎 Actualizaciones Recientes de Diseño y Cartografía

1. **Red Geométrica de Delaunay 100% Sólida**:
   - Se eliminaron las líneas punteadas. Todas las conexiones de la red son ahora **líneas continuas sólidas**, estructuradas con jerarquía visual:
     - **Ejes Primarios Radiales a Morelia**: Máximo grosor (`weight: 3.0`) y resplandor neón lima (`#ccff00`, `opacity: 0.95`), incluyendo ahora a **Aguascalientes**, CDMX, Guadalajara, Querétaro, León, San Luis Potosí, Toluca, Irapuato y Celaya.
     - **Ejes Secundarios Metropolitanos**: Grosor intermedio (`weight: 2.0`) en cian eléctrico (`#00f0ff`, `opacity: 0.80`).
     - **Malla Regional Delaunay**: Grosor fino cristalino (`weight: 1.3`, `opacity: 0.50`), creando el facetado poligonal del Diamante.

2. **Escalafón Agrupado por Estrato Poblacional (`TAMAÑO`)**:
   - Conforme a la metodología oficial del IMCO, las ciudades se evalúan dentro de su propio estrato poblacional. El ranking ahora se presenta **estratificado por tamaño de ciudad**:
     - 🏙️ **Más de un millón de habitantes** (8 metrópolis: Morelia, Querétaro, Guadalajara, Aguascalientes, San Luis Potosí, CDMX, León, Toluca).
     - 🏢 **De 500 mil a un millón de habitantes** (2 ciudades: Irapuato, Celaya).
     - 🏘️ **De 250 a 500 mil habitantes** (2 ciudades: Silao, La Piedad-Pénjamo).
     - 🏡 **Menos de 250 mil habitantes** (3 ciudades: Ocotlán, Guanajuato, Moroleón-Uriangato).
   - **Solución al problema de las barras invertidas**:
     - En lugar de barras donde el lugar #1 se veía diminuto por tener valor 1, se diseñó un **Escalafón Jerárquico con Medallas y Barra de Liderazgo Normalizada**:
       - 🥇 **#1**: Medalla de Oro brillante + **Barra al 100% de plenitud** (visualmente dominante).
       - 🥈 **#2**: Medalla de Plata.
       - 🥉 **#3**: Medalla de Bronce.
       - La barra representa el **Nivel de Liderazgo en el Estrato** ($Score = \frac{Max - Rank + 1}{Max} \times 100\%$), haciendo que el líder tenga siempre la barra más grande e impactante.
       - Al alternar de año (ICU 2026 vs ICU 2024) o cambiar de indicador, el escalafón, los valores y los semáforos se recalculan de forma dinámica dentro de cada estrato.

3. **Incorporación Oficial de Datos ICU 2024 (ICU2024_boletas.pdf)**:
   - Se extrajeron con precisión vectorial y OCR las posiciones generales, desempeños generales y los rankings y desempeños de los 6 subíndices de competitividad para todas las ciudades.
   - Enriquecimiento directo en DATA/CIUDADES_DIAMANTE_IMCO.gpkg y ciudades_diamante_imco.geojson:
     - pos_general_2024, des_general_2024, delta_pos_general.
     - Subíndices 2024: pos_sub_<subindice>_2024 y des_sub_<subindice>_2024.
     - Identificación con **Sin dato** para las ciudades que no fueron evaluadas en la edición 2024 (Silao, Guanajuato, Ocotlán).
   - Preservación íntegra de los 35 indicadores extraídos previamente.

4. **Perfil Multidimensional (6 Subíndices) basado en Clasificación de Desempeño**:
   - En lugar de graficar posiciones ordinales (que distorsionaban la comparación cualitativa), el gráfico de **Radar** ahora evalúa la **Clasificación del Desempeño Oficial del IMCO** en una escala homogénea del 1 al 6:
     - 6: **Muy alta** (Verde oscuro #339766)
     - 5: **Alta** (Verde claro #4bce79)
     - 4: **Media alta** (Amarillo #fbda46)
     - 3: **Media baja** (Naranja #fd9b1e)
     - 2: **Baja** (Rosa/Rojo #e74770)
     - 1: **Muy baja** (Vino #8a1136)
   - Ejes radiales: *Innovación y Economía*, *Infraestructura*, *Mercado de Trabajo*, *Sociedad y Medio Ambiente*, *Derecho*, y *Sistema Político y Gobierno*.
   - **Control de Modos de Comparación en Expediente (drawer-compare-select)**:
     - **-- Sin Comparación --**: Muestra exclusivamente el polígono de desempeño del **ICU 2026** (limpio y enfocado en el presente).
     - **Comparar con el 2024**: Opción contigua que activa la comparación temporal: **Desempeño 2026 (NExT)** vs **Desempeño 2024 (Histórico)** en la misma ciudad.
     - **Selección de Ciudad Benchmark (ej. Querétaro, Guadalajara)**: Compara directamente el desempeño multidimensional de la ciudad analizada frente al polo seleccionado.

5. **Optimización de la Ficha Estadística (35 Indicadores) y Limpieza Visual**:
   - **Agrupación por Tema (6 Subíndices)**: Los 35 indicadores ahora se presentan clasificados bajo 6 bloques temáticos (*Innovación y Economía*, *Infraestructura*, *Mercado de Trabajo*, *Sociedad y Medio Ambiente*, *Derecho*, *Sistema Político y Gobierno*). Cada tema incluye un encabezado con su icono, nombre, número de indicadores y la posición/desempeño de la ciudad en dicho subíndice.
   - **Ajuste de Columnas sin Scroll Horizontal**: Se eliminó la columna redundante de subíndice por fila y se fijó un diseño tabular proporcional (`table-layout: fixed; width: 100%`) con ancho de panel a 580px, asegurando que las 6 columnas (*Indicador*, *2026*, *2024*, *Δ*, *Pos.*, *Desempeño*) quepan completas sin desplazamiento horizontal.
   - **Limpieza de Benchmark Lateral**: Se retiró la tarjeta redundante de Benchmark Morelia de la columna lateral derecha para dar máximo protagonismo al escalafón por estrato.
   - **Etiquetas de Radar Limpias**: Se eliminó la leyenda (2026 NExT), mostrando directamente el nombre de la ciudad o su año comparativo de forma sobria y legible.
   - **Depuración del Switch Temporal**: Se retiró el botón de "Δ Evolución" por ser redundante, consolidando el switch en **ICU 2026** e **ICU 2024**.
   - **Cartografía Base 100% Abierta sin API Key**: Se sustituyó el proveedor de tiles oscuros por **Esri World Dark Gray Canvas (Base + Reference)**, garantizando disponibilidad total sin requerir API keys ni registros.

6. **Refinamiento UI/UX de Legibilidad y Filtros Dinámicos**:
   - **Popups y Tooltips de Máxima Legibilidad**: Se aplicó un fondo sólido ultra-oscuro (`#040810`), borde de acento cian (`rgba(0, 240, 255, 0.5)`) y tipografía de alto contraste blanco/lima, eliminando cualquier fondo claro o traslúcido que dificultara la lectura.
   - **Selector de Indicadores Contextual con Icono**: Al pulsar sobre cualquier subíndice temático (ej. *Infraestructura*), el selector inferior actualiza su prompt de forma reactiva: `"Selecciona un indicador de 🏗️ Infraestructura"`, y el buscador se ajusta a `"🔍 Buscar en Infraestructura..."`.
   - **Iconografía Monocromática Técnica (Sin Colores)**: Se eliminaron los emojis de colores infantiles en medallas (`#1`, `#2`, `#3`) y se aplicó un filtro general `grayscale(100%)` a toda la botonera, iconos temáticos y estratos, dotando a la interfaz de un acabado sobrio, tecnológico y de alta gama.
   - **Distribución de Desempeño como Filtros Interactivos**: Las 6 tarjetas de conteo (*Muy alta*, *Alta*, *Media alta*, *Media baja*, *Baja*, *Muy baja*) ahora operan como filtros de un clic; al seleccionar una categoría, el mapa atenúa las ciudades no coincidentes y el escalafón jerárquico se filtra al instante, incluyendo botón de descarte rápido `[✕ Todos]`.
   - **Puntos del Mapa Proporcionales en Tamaño**: Los marcadores urbanos ahora codifican el desempeño tanto por color como por diámetro (desde 20px / halo 38px en *Muy Alta* hasta 7px / halo 14px en *Muy Baja*), creando una jerarquía visual inmediata.
   - **Nodo Central Morelia "CORAZÓN" (Ubicación Inferior)**: El nodo central de Morelia NExT ahora luce la insignia **`CORAZÓN`** posicionada de manera elegante y fija directamente debajo del punto geográfico (`bottom: -22px`).
