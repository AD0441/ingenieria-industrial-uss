# Revisión pedagógica, visual y técnica

## Estructura final

La charla usa 14 láminas: 2 minutos de apertura, 1 minuto de pregunta inicial, 11 escenas de 2 minutos (22 minutos) y 5 minutos de preguntas. Total: **25 minutos de exposición + 5 de preguntas**. Juicero es un caso real presentado con ilustración conceptual; el caso del taller de robótica es hipotético, no una investigación o resultado medido.

La historia une: problemas cercanos → observar → comprender personas → definir una necesidad → comparar ideas → anticipar el uso real → prototipar → planificar la prueba → aprender → crear valor. La ruta de siete verbos se inspira en Design Thinking; no se presenta como etapas oficiales ni como actividad extensa.

## Revisión vigente v19 · 5 de octubre de 2026

Emil Design Engineering guio la claridad de estados y etiquetas, la respuesta inmediata por teclado, la presión de botones y los revelados de 220 ms. Impeccable guio la jerarquía, el encuadre, el contraste y la reducción de interacción innecesaria, conservando el universo visual claro y juvenil. Image Gen integrado produjo dos ilustraciones nuevas, locales y optimizadas.

| Before | After | Why |
| --- | --- | --- |
| «La otra mitad» escondía la conclusión del cierre | Mensaje completo y dos preguntas orales visibles desde el inicio | El público entiende la conclusión sin conocer una mecánica de botones. |
| Juicero se explicaba con palabras y tres revelados | Comparación ilustrada de máquina y manos, enseñanza completa en un clic | La imagen explica la pérdida de valor percibido sin presentar un motivo único de fracaso comercial. |
| La batería aparecía sin presentar qué intentaba hacer el equipo | Lámina 4: objetivo, robot, batería ausente y prueba interrumpida | Distinguir objetivo, dificultad, consecuencia y causa todavía desconocida. |
| Lámina 6 enteramente textual | Tres íconos acompañan observación, pregunta y necesidad por confirmar | Hacer legible el razonamiento, sin añadir un formulario ni una tarea. |
| Ruta de texto en bloques | Siete imágenes con verbos y preguntas; retorno de aprendizaje | Mostrar el proceso y que se puede volver atrás, no una receta rígida. |
| Plan de prueba antes de mostrar el prototipo | Prototipo en 10, plan de prueba en 11 | Primero se ve qué haríamos; después cómo sabríamos si ayuda. |
| «Falló. Perfecto.» podía sonar a celebrar una solución fallida | «No funcionó. Aprendimos.» y una nueva prueba | Aprender de lo observado no equivale a demostrar éxito. |
| Valor quedaba como una palabra abstracta | «Mejorar algo para alguien»: buscar menos y devolver mejor | Conectar innovación productiva con una mejora comprensible y comprobable. |

### Verificación v19

- Dos pasadas acotadas con Chrome/Playwright: 14 láminas a 1920×1080, 1366×768, 1280×720 y 390×844. Sin desbordamientos detectados. También se inspeccionó el contenido revelado de Juicero dentro de su marco.
- Inspección visual: comparación Juicero, contexto 4, definición 6, ruta 7, aprendizaje 12, valor 13 y cierre 14 en escritorio; comparación 1, 4, 6, 7 y 14 en móvil. El encuadre móvil de 4 se ajustó para conservar la escena sobre el texto.
- Funcionan selección y cambio de alternativa en 2/8, reinicio del revelado al volver, foco por teclado sin animación, explicación flotante de 3, panorama y notas. La lámina 14 no tiene revelados.
- Service worker v19: instala el inventario local completo, incluyendo ambas ilustraciones nuevas. Se confirmó recarga sin red después de la primera visita.
- Primera pasada sin errores de consola ni imágenes faltantes. La confirmación final registró un `ERR_CONNECTION_RESET` transitorio del servidor local para `observe-school-v2.png`; el archivo respondió `HTTP 200` en la comprobación directa y la recarga offline funcionó tras instalar el inventario. No se detectaron errores JavaScript. Esta incidencia local se distingue de un recurso inexistente o de un fallo de publicación.
- Se actualizaron notas, guía, inventario visual y documentación. La publicación autorizada se limita a `fiertec-los-lagos-2026/` en el repositorio existente, sin cambiar la visibilidad ni otras presentaciones.

## Historial de revisión v17

| Antes | Después | Por qué |
| --- | --- | --- |
| 18 escenas y 50 minutos | 14 escenas y 30 minutos | Respetar la invitación real: 25 + 5. |
| Kiosco, mochila, laboratorio, grifo y paraguas compitiendo por atención | Un caso de robótica y materiales sostiene toda la explicación | Menos saltos cognitivos para escolares. |
| La lámina 3 había perdido dos problemas observables | Cuatro pistas visibles: agua, residuos, espera y mochila | Recuperar la amplitud de observación sin exigir interacción. |
| La lámina 9 pedía ingresar ideas durante una charla | Tres preguntas visibles sobre uso real, sin formulario | Permitir que el expositor mantenga el ritmo y acepte respuestas inesperadas oralmente. |
| Se hablaba de buenas ideas sin contrastarlas suficientemente | Robot mejor, app y señales visuales muestran idea débil, incompleta y prometedora | Enseñar que creatividad no garantiza solución. |
| El prototipo de la lámina 11 no se entendía a primera vista | Comparación visual de una caja mezclada con tres cajas rotuladas | Hacer visible qué cambió, qué se prueba y qué se aprende. |
| Láminas 5 y 9 basadas en tarjetas similares | Dos escenas ilustradas nuevas, una de escucha y otra de devolución | Alternar ritmo visual y mostrar a las personas usando el taller. |
| La necesidad se enunciaba como conclusión | La lámina 6 la llama hipótesis revisable | Evitar que una observación inicial parezca un diagnóstico definitivo. |
| Juicios de la lámina 8 escondidos tras clic | Las tres valoraciones y sus razones están visibles; el cuadro flotante solo amplía | Mantener la charla comprensible sin operar la pantalla. |
| La prueba era una lista abstracta | La lámina 10 compara la misma tarea antes y con señales de papel, con dos señales observables | Mostrar cómo se sabría si la propuesta ayuda, sin inventar cifras. |
| Aprendizaje sin acción visible | La lámina 12 muestra una devolución equivocada hipotética, pregunta, cambio y nueva prueba | Separar lo observado de su causa y del resultado todavía desconocido. |
| Creatividad → innovación → emprendimiento podía leerse como ascenso automático | La lámina 13 usa tres preguntas paralelas y condiciones explícitas | La prueba determina la mejora; llevar la solución a otros es opcional. |
| Cierre genérico y cargado | Una pregunta sobre un proyecto visto en FIERTEC y cinco minutos de diálogo | Transferir el aprendizaje a la feria sin añadir una actividad nueva. |

## Historial de verificación v17

- Navegador integrado: 1280×720 y 390×844. Se recorrieron las 14 láminas con los controles. Inspección visual específica: escritorio 2, 5, 8, 10, 12, 13 y 14; móvil 3, 5, 10, 11 y 14. Las cuatro pistas y el prototipo son legibles sin abrir cuadros.
- El crédito del cierre se separó de la barra de controles en 1280×720. En móvil, la lámina 14 conserva tamaño de lectura normal.
- Las imágenes nuevas cargaron y mantienen una estética juvenil, clara y coherente con la presentación. Los logos institucionales mantienen su encuadre y contraste.
- Interacción verificada: el cuadro flotante de la lámina 2 aparece centrado, con fondo atenuado y salida clara; se puede hacer la charla completa sin abrirlo. La lámina 9 no exige tocar ni escribir.
- El movimiento suave de fondo y `prefers-reduced-motion` están definidos en CSS; la navegación por teclado evita la entrada animada de lámina.
- Consola del navegador: sin errores ni advertencias en la confirmación final.
- Service worker v17: inventario local completo. Se detuvo el servidor y la portada volvió a abrir desde caché, confirmando la carga sin red tras una primera visita. La navegación usa red primero cuando está disponible para evitar mostrar una versión antigua tras una actualización.

## Revisión v18 · gancho, decisión y aprendizaje

Se mantuvieron 14 láminas, la arquitectura HTML/CSS/JS nativa, controles, notas, panorama, logos y assets del taller. Los cambios principales fueron:

| Lámina | Revisión | Criterio |
| --- | --- | --- |
| 1 | Juicero: precio inicial, pregunta sin respuesta inmediata y comparación máquina/manos revelada en la slide | Gancho sorprendente sin convertir el caso en una historia de negocios ni usar una foto de licencia incierta. |
| 2 | Dos preguntas grandes con razones inline | Problema antes de solución, aun sin pulsar opciones. |
| 7 | Ruta de siete verbos con retorno de aprender a observar | No confundir esta guía pedagógica con etapas oficiales de Design Thinking. |
| 8 | Tres opciones sin veredicto inicial y explicación local al seleccionar | Las etiquetas son una prueba de aprendizaje, no solución ganadora. |
| 10 | Experimento antes/con prototipo, dos observables y aviso de ausencia de resultados | No fabricar cifras ni mejoras. |
| 12 | «Falló» → «Perfecto» → aprendizaje y segunda prueba | El error es información del sistema; la segunda prueba aún no demuestra éxito. |
| 13 | Creatividad, innovación y emprendimiento en paralelo | Innovación requiere valor real; emprender no es obligatorio. |
| 14 | Cierre por etapas y dos preguntas orales | Conservar 5 minutos para diálogo, sin actividad digital. |

### Verificación v18

- Se sirvió localmente con `python3 -m http.server 8080` y se recorrieron las 14 láminas en Chrome/Playwright a **1920×1080, 1366×768, 1280×720 y 390×844**. La inspección geométrica final no detectó elementos fuera del viewport; se corrigió un desbordamiento móvil de la ruta durante la revisión.
- Inspección visual de capturas de láminas 1, 2, 7, 8, 10, 12, 13 y 14 en escritorio y móvil, y de los estados finales revelados de 1, 12 y 14. Se corrigió la distribución de la ruta a cuatro columnas en proyección y la comparación vertical de la apertura.
- Interacciones comprobadas: revelado progresivo 1/12/14; selección 2/8 y `aria-pressed`; cambio de una opción a otra; regreso a la lámina 1 con reinicio; `insight-layer` de la lámina 3; panorama; notas; recarga offline tras registrar el service worker v18.
- La consola no mostró errores de aplicación. En una pasada apareció un `ERR_CONNECTION_RESET` transitorio de una imagen local; el recurso existe y respondió `HTTP 200` al repetir la comprobación. No se detectó un enlace roto persistente.
- Los cambios inline no avanzan accidentalmente a otra lámina. Se mantuvo `prefers-reduced-motion`; el contenido esencial existe en DOM y las decisiones usan botones reales.
