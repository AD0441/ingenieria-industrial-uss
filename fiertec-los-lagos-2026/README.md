# De un problema a una idea · FIERTEC Los Lagos 2026

Presentación web de 14 láminas para un taller de 30 minutos: 25 de exposición y 5 de preguntas. Está dirigida a estudiantes de Educación Básica y Media que participan en FIERTEC Los Lagos 2026. El tema es Emprendimiento e Innovación Productiva y el título de la charla es **«De un problema a una idea: Cómo crear soluciones que sí funcionan»**.

Es ante todo una charla. Abre con Juicero como caso real breve —precio inicial y bolsa exprimible— y después sigue un caso **hipotético**: un equipo escolar de robótica que pierde tiempo buscando piezas. La ruta es observar → comprender → definir → idear → prototipar → probar → aprender. Las interacciones son apoyos opcionales, no actividades obligatorias.

## Abrir

No usa dependencias externas. Para verla con caché offline y un comportamiento equivalente a GitHub Pages:

```bash
python3 -m http.server 8080
```

Luego abra `http://localhost:8080` y use pantalla completa. Después de la primera carga puede funcionar sin conexión.

## Controles

- Flechas izquierda/derecha, Page Up/Page Down o espacio: navegar.
- O: panorama de las 14 láminas.
- F: pantalla completa.
- N: notas del presentador y tiempo sugerido.
- Inicio/Fin: primera/última lámina.
- En pantallas táctiles: deslizamiento horizontal.

La lámina 1 revela con un clic una comparación ilustrada de Juicero y su enseñanza completa. La 12 revela el aprendizaje y la nueva prueba; las opciones de 2 y 8 muestran su razón ahí mismo. Los botones pueden activarse con teclado, sin animación de entrada. Al volver a una lámina, el revelado empieza de cero. Las pistas de la lámina 3 conservan el cuadro flotante. Las láminas 4, 6, 7, 9 y 14 son expositivas; el cierre está completo desde el principio. Las notas distinguen hipótesis de resultados comprobados.

## Narrativa

1. Descubrir mediante Juicero que una idea brillante puede resolver la pregunta equivocada.
2. Observar el entorno y entender a quienes viven el problema.
3. Definir una necesidad sin imponer una solución de antemano.
4. Idear y contrastar alternativas sin tratar la primera prueba barata como ganadora definitiva.
5. Anticipar cómo podría fallar una idea en el uso real.
6. Mostrar un prototipo pequeño, después planificar cómo compararlo con la situación inicial; observar el uso y corregir.
7. Diferenciar creatividad, innovación y emprendimiento con el mismo caso.
8. Cerrar con cinco minutos de preguntas orales sobre proyectos de FIERTEC, el colegio y el territorio.

## Archivos

- `index.html`: contenido, orden, tiempos y notas de las 14 láminas.
- `styles.css`: diseño responsivo, animación y componentes.
- `app.js`: navegación, cuadros flotantes, panorama y notas.
- `GUIA-PRESENTADOR.md`: ideas fuerza, matices pedagógicos y transiciones de la charla.
- `assets/`: logos, ilustraciones e íconos locales.
- `ASSETS.md`: inventario y dirección de generación visual.
- `FIDELITY.md`: revisión visual, responsiva e interactiva.
