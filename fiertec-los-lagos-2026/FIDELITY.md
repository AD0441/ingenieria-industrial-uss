# Revisión pedagógica, visual y técnica

## Estructura final

La charla usa 14 láminas: 1 minuto de apertura, 12 escenas de 2 minutos (24 minutos) y 5 minutos de preguntas. Total: **25 minutos de exposición + 5 de preguntas**. El caso del taller de robótica es ilustrativo, no se presenta como investigación o resultado medido.

La historia une: problemas cercanos → observar → comprender personas → definir una necesidad → generar y comparar ideas → elegir una prueba → prototipar → observar el uso → aprender → crear valor. Design Thinking aparece como guía flexible, no como receta ni actividad extensa.

## Revisión de contenido y diseño

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

## Verificación

- Navegador integrado: 1280×720 y 390×844. Se recorrieron las 14 láminas con los controles. Inspección visual específica: escritorio 2, 5, 8, 10, 12, 13 y 14; móvil 3, 5, 10, 11 y 14. Las cuatro pistas y el prototipo son legibles sin abrir cuadros.
- El crédito del cierre se separó de la barra de controles en 1280×720. En móvil, la lámina 14 conserva tamaño de lectura normal.
- Las imágenes nuevas cargaron y mantienen una estética juvenil, clara y coherente con la presentación. Los logos institucionales mantienen su encuadre y contraste.
- Interacción verificada: el cuadro flotante de la lámina 2 aparece centrado, con fondo atenuado y salida clara; se puede hacer la charla completa sin abrirlo. La lámina 9 no exige tocar ni escribir.
- El movimiento suave de fondo y `prefers-reduced-motion` están definidos en CSS; la navegación por teclado evita la entrada animada de lámina.
- Consola del navegador: sin errores ni advertencias en la confirmación final.
- Service worker v17: inventario local completo. Se detuvo el servidor y la portada volvió a abrir desde caché, confirmando la carga sin red tras una primera visita. La navegación usa red primero cuando está disponible para evitar mostrar una versión antigua tras una actualización.
