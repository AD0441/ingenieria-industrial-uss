# Recursos visuales

Las ilustraciones de contenido y los nueve íconos conceptuales se crearon con la herramienta integrada Image Gen. Ocho íconos SVG propios representan las piezas del prototipo, las tres dudas de uso de la lámina 9 y las dos señales que se observan en la prueba. Todo está en `assets/` y funciona sin servicios externos. Los logos FIERTEC y Universidad San Sebastián provienen de los archivos entregados por el usuario y no se recrearon.

## Ilustraciones de producción

- `juicero-concept-v1.jpg`: ilustración didáctica **original**, generada con Image Gen y optimizada a 1600 px / JPEG (aprox. 209 KB). La fotografía `juicero.jpg` compartida por el usuario sirvió como referencia visual de la forma de la prensa y de los envases; **no se incorpora ni redistribuye**. La imagen no es una fotografía ni una representación exacta del producto histórico, y omite marcas. También se usó `workshop-search-v1.png` solo como referencia de estilo. Prompt final: «original 16:9 high-key 2.5D educational illustration of a neutral brushed-silver rounded juice press, green-and-white flexible produce pouches and a glass, all on the right, left negative space for HTML title; match the existing youthful science-exhibition lighting; no text, brand, watermark, loose fruit or exact product photograph». El precio inicial US$699 se verificó en el [comunicado de Juicero de enero de 2017](https://www.prnewswire.com/news-releases/juicero-resets-price-18-months-ahead-of-schedule-making-it-easier-than-ever-to-get-cold-pressed-juice-at-home-300391677.html); la posibilidad de exprimir las bolsas a mano se documentó en la [cobertura de Bloomberg](https://www.bloomberg.com/news/articles/2017-04-20/juicero-offers-all-customers-a-refund-amid-critical-coverage).
- `juicero-comparison-v1.jpg`: ilustración original de máquina frente a manos, generada con Image Gen integrado y optimizada a 1600 px / JPEG. Referencias: la foto del usuario para la forma general y `juicero-concept-v1.jpg` para el acabado. No es una fotografía histórica ni afirma que ambos métodos den idéntico resultado.
- `workshop-context-v1.jpg`: nuevo fondo de la lámina 4, generado con Image Gen integrado y optimizado a 1920 px / JPEG. El equipo intenta probar su robot para FIERTEC; un conector suelto y el espacio de batería vacío muestran por qué no puede iniciar la prueba. El estante no se presenta como causa demostrada. Sustituye en pantalla a `workshop-search-v1.png`, que queda como reserva.
- `hero-mission-v2.png`: portada con estudiantes construyendo un prototipo en Los Lagos.
- `observe-school-v2.png`: escena escolar con problemas cotidianos para observar.
- `design-thinking-v2.png`: recorrido visual de empatizar, definir, idear, prototipar y probar.
- `workshop-search-v1.png`: escena nueva del taller de robótica, caso que unifica la charla.
- `workshop-people-v1.png`: docente y estudiantes observan el taller; escena de empatía de la lámina 5.
- `workshop-return-v1.png`: estudiante duda dónde devolver una batería; escena de uso real de la lámina 9.

Las ilustraciones del kiosco, la mochila, el paraguas y el grifo se conservan en `assets/` como material de reserva de la versión previa; no se cargan en la charla actual.

Las ilustraciones originales son PNG de 1672×941; las nuevas de Juicero y contexto están optimizadas a JPEG. Usan una estética 2.5D amable: juvenil, expresiva y ligeramente caricaturesca, sin parecer preescolar. La familia visual usa luz alta, blanco, celeste, turquesa, amarillo y coral, con personajes de 10 a 15 años y objetos escolares reconocibles.

## Íconos de contenido

Los nueve íconos son PNG RGBA de 1254×1254 con fondo transparente, contorno azul institucional y volumen 2.5D:

- `icons/dt-empathize.png`: corazón y escucha.
- `icons/dt-define.png`: foco o lupa sobre la necesidad.
- `icons/dt-ideate.png`: ampolleta y notas.
- `icons/dt-prototype.png`: construcción de cartón.
- `icons/dt-test.png`: prueba, observación y mejora.
- `icons/idea-weak.png`: idea llamativa que no aborda la causa.
- `icons/idea-incomplete.png`: propuesta que todavía requiere evidencia.
- `icons/idea-promising.png`: propuesta alineada con la necesidad y fácil de probar.
- `icons/idea-audience.png`: nueva alternativa propuesta por el público.

## Dirección de prompts

Los prompts de producción pidieron escenas escolares chilenas, estudiantes diversos de enseñanza básica y media, expresiones naturales, iluminación clara, composición 16:9 y ausencia de texto, marcas o logos generados. Los íconos se solicitaron individualmente con silueta legible a distancia, transparencia real y sin glifos tipográficos.

Los tres conceptos completos usados como especificación visual están en `design/concepts-v2/`. Los SVG `part-wheel.svg`, `part-cable.svg` y `part-battery.svg` explican el prototipo. Los SVG `risk-see.svg`, `risk-understand.svg` y `risk-return.svg` explican las dudas sobre visibilidad, comprensión y devolución. Los SVG `measure-time.svg` y `measure-return.svg` representan el tiempo de búsqueda y el lugar correcto de devolución en la lámina 11. En las láminas 6 y 7 se reutiliza la familia de íconos propia; no se emplean recursos externos ni emoji como sustitutos.

## Prompt de la nueva escena

Se utilizó el modo integrado de Image Gen (sin CLI) con este prompt final:

> Use case: illustration-story. Asset type: wide 16:9 case-study scene for an offline web presentation to Chilean school students ages 10–15. Bright friendly editorial illustration: three 12–15-year-old students building a small wheeled robot at a school makerspace table; one searches a disorganized shelf for a missing wheel while the other two pause. Mixed unlabeled storage boxes and scattered parts make the problem legible. Southern Chilean school, lush green hills beyond windows, gentle daylight. Rounded expressive characters but not babyish, warm tactile 3D animated-film look, crisp details. Wide composition, left third uncluttered light for dark navy title overlay; main action center-right. Airy white, sky blue, teal, warm yellow, small coral accents. No text, letters, logos, watermark, photorealism, or dark cyberpunk.

## Briefs de generación de la última revisión

Estos son resúmenes fieles de los prompts usados para las dos escenas añadidas con Image Gen; ambas se generaron como imágenes nuevas de 1672×941, no como ediciones de los logos:

- `workshop-people-v1.png`: ilustración 16:9 cálida y luminosa, estilo película animada 2.5D; una docente y tres estudiantes de 10–15 años conversan junto a un estante de materiales de robótica en un taller escolar del sur de Chile. Expresiones naturales, algo caricaturescas pero no preescolares; la imagen deja una zona clara a la izquierda para el texto. Sin letras, marcas ni logos.
- `workshop-return-v1.png`: ilustración 16:9 del mismo universo visual; un estudiante sostiene una batería y duda entre contenedores del taller al devolverla. El gesto y las cajas deben comunicar una dificultad de uso real, sin exagerar ni dar por supuesto un resultado. Luz de día, colores celeste/turquesa/amarillo, espacio para título a la izquierda, sin texto ni marcas.

Los SVG se dibujaron para esta presentación y conservan los mismos colores, grosor de línea y legibilidad de la familia visual.

## Prompts v19 · comparación y contexto

Herramienta integrada Image Gen, sin CLI ni dependencias de red en la presentación. Especificaciones finales:

**Juicero — `assets/juicero-comparison-v1.jpg`:** «Original high-key 16:9 educational 2.5D comparison. Left: rounded brushed-silver juice press squeezes a green-and-white pouch into a glass. Right: anatomically natural hands squeeze another pouch into a glass. White backdrop, clear separation, same bright juvenile science-exhibition style as the existing Juicero illustration. User photo is a form reference only, not an edit target. No text, logo, watermark. Conceptual illustration, not exact historical product photography.»

**Robot — `assets/workshop-context-v1.jpg`:** «Use case: illustration-story. Full-bleed 16:9 educational slide background, students aged 10–15 at FIERTEC Los Lagos. Existing workshop image is style only. Three students want to test their wheeled robot for a science fair. The robot cannot start because its removable battery is missing; a student holds the loose connector, a teammate searches shared unlabelled parts bins and another waits. Show an empty battery space, no connected battery. Main figures and robot in right 60%; uncluttered pale classroom light in left 40% for HTML text. Bright warm 3D illustration, natural teenage proportions, navy school uniforms, cream, light blue, wood, yellow and teal accents. No text, labels, logos, numbers or watermark. Fictional scene; do not assert a proven cause for the missing battery.»
