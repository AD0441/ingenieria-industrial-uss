# Sistema visual v19 · FIERTEC Los Lagos 2026

## Dirección

Presentación web luminosa, juvenil y cercana a una exhibición de museo científico para adolescentes. La estética combina ilustración 2.5D amable, mucho espacio blanco y controles claros. Evita tanto el tono corporativo oscuro como el estilo preescolar.

## Paleta

- Fondo principal: `#ffffff`
- Fondo secundario: `#eef9ff`
- Texto principal: `#082653`
- Texto secundario: `#526b86`
- Turquesa: `#16b9c5`
- Celeste: `#55c8f3`
- Amarillo: `#ffc83d`
- Coral: `#ff7765`
- Verde de resultado: `#38b987`
- Bordes: `#d6e8f2`

## Tipografía

- Titulares: `Arial Rounded MT Bold`, con respaldo `Avenir Next` y `Arial`.
- Texto y controles: `Avenir Next`, con respaldo `Arial`.
- Titulares de 48 a 104 px según el espacio.
- Texto principal de 22 a 34 px.
- Controles de 17 a 22 px.

## Composición

- Márgenes seguros: 5vw en horizontal, 9vh arriba y 12vh abajo.
- Una sola idea dominante por escena.
- Ilustraciones principales en marcos abiertos, sin capas oscuras.
- Tarjetas solo para elecciones, notas o mensajes flotantes.
- La marca FIERTEC queda sobre blanco. El logo USS blanco se presenta sobre una base azul institucional.

## Componentes

- `choice-list`: lista vertical de alternativas con icono, título y una línea breve.
- `insight-layer`: respuesta flotante modal que explica el efecto de una elección.
- `stage-rail`: secuencia horizontal de cinco etapas de Design Thinking.
- `return-checks`: tres dudas sobre el uso real de una solución, sin interacción.
- `test-route` y `test-measures`: misma tarea antes/después y dos señales observables, sin datos fingidos.
- `story-reveal`: control que revela un giro narrativo sin convertir la charla en juego.
- Revelado narrativo inline: `data-reveal-next`, `data-reveal-from` y `data-reveal-to` cambian una escena sin salir de ella. `data-reveal-group`, `data-reveal-choice` y `data-reveal-for` muestran razones para una elección. Al salir y volver se recupera el estado inicial. Se usa en 1, 2, 8 y 12. La 14 no tiene revelados.
- `juicero-comparison`: comparación ilustrada de máquina y manos, con lección visible en un único revelado.
- `definition-flow`: observación, pregunta y necesidad por confirmar, cada una con su ícono.
- `route-steps`: recorrido ilustrado con siete verbos y una pregunta por etapa, sin interacción.
- `finale-questions`: dos preguntas orales, disponibles al llegar al cierre.
- El revelado inline contiene el relato principal; `insight-layer` sigue reservado a explicaciones secundarias flotantes (por ejemplo, las pistas de la lámina 3). No deben confundirse.
- `deck-controls`: navegación mínima, panorama, notas y pantalla completa.

## Movimiento

- Entrada de escena por clic: 260 ms con desvanecimiento y desplazamiento de 12 px; por teclado, inmediata.
- Respuesta flotante: 240 ms con escala suave.
- Fondos: formas translúcidas que se desplazan lentamente entre 16 y 24 segundos.
- Iconos: flotación de 3 a 6 px en ciclos alternados.
- `prefers-reduced-motion` elimina movimientos continuos y conserva cambios de estado.
- Los estados inline aparecen en 220 ms con opacidad y un desplazamiento de 10 px; por teclado o con `prefers-reduced-motion`, el contenido cambia sin animación. Los botones tienen presión de escala .975 en 160 ms y el hover se limita a puntero fino.

## Narrativa y tiempo

La secuencia contiene 14 escenas y suma exactamente 30 minutos sugeridos: 25 de exposición y 5 de preguntas. El gancho real de Juicero dura 2 minutos; la pregunta correcta, 1. Un único caso escolar hipotético da continuidad a observar → comprender → definir → idear → prototipar → probar → aprender → observar otra vez. La ruta se inspira en Design Thinking sin atribuirle siete etapas oficiales. Las interacciones son opcionales y no hay actividades obligatorias en el bloque expositivo.
