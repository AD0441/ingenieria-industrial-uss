const slides = [...document.querySelectorAll('.slide')];
const currentSlideLabel = document.getElementById('current-slide');
const progressBar = document.getElementById('progress-bar');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');
const fullscreenButton = document.getElementById('fullscreen-button');

let currentSlide = 0;
let labelTimers = [];
let trainingTimer = null;
let classificationTimer = null;

const trainingStates = [
  { dog: 50, cat: 50, loss: '0,69', caption: 'Al comienzo, el modelo responde casi al azar.', features: 0 },
  { dog: 59, cat: 41, loss: '0,58', caption: 'Primero detecta señales simples, como bordes y contrastes.', features: 1 },
  { dog: 69, cat: 31, loss: '0,45', caption: 'Después combina texturas, contornos y posiciones.', features: 2 },
  { dog: 79, cat: 21, loss: '0,33', caption: 'Compara su respuesta con la etiqueta correcta y ajusta conexiones.', features: 3 },
  { dog: 88, cat: 12, loss: '0,22', caption: 'Al repetir el ciclo, el error baja y la respuesta se vuelve más estable.', features: 3 },
  { dog: 94, cat: 6, loss: '0,14', caption: 'Entrenar no es memorizar una foto: es ajustar patrones útiles para nuevas imágenes.', features: 3 }
];

let trainingEpoch = 0;
let selectedTest = 'dog';
let selectedError = 'context';

const testResults = {
  dog: { dog: 96, cat: 4, title: 'Perro · confianza alta', explanation: 'La forma del hocico, las orejas y el pelaje coinciden con muchos patrones aprendidos.' },
  cat: { dog: 9, cat: 91, title: 'Gato · contexto nuevo', explanation: 'Aunque el fondo es distinto, un buen conjunto de entrenamiento ayuda a reconocer al animal.' },
  ambiguous: { dog: 48, cat: 52, title: 'Gato · confianza baja', explanation: 'El disfraz introduce señales parecidas a un perro. Las probabilidades cercanas revelan incertidumbre.' },
  hidden: { dog: 67, cat: 33, title: 'Perro · evidencia parcial', explanation: 'Con parte del cuerpo oculta, el modelo dispone de menos información y su confianza disminuye.' }
};

const errorProfiles = {
  light: {
    imageClass: 'bias-image image-cell test-1 is-low-light',
    labClass: 'error-light',
    imageLabel: 'NUEVA IMAGEN: PERRO CON POCA LUZ',
    prediction: 'Gato · 58%',
    meter: 58,
    attention: 'POCA SEÑAL',
    title: 'La imagen perdió información útil',
    detail: 'Menos contraste y detalle vuelven menos confiables los patrones que el modelo aprendió durante el entrenamiento.',
    explanation: 'Con poca luz, el pelaje y el contorno se vuelven difíciles de comparar. El resultado cambia aunque el animal sea el mismo.',
    question: '¿Funciona igual de bien de noche, con lluvia o con una cámara barata?'
  },
  hidden: {
    imageClass: 'bias-image image-cell test-4',
    labClass: 'error-hidden',
    imageLabel: 'NUEVA IMAGEN: PERRO PARCIALMENTE OCULTO',
    prediction: 'Perro · 67%',
    meter: 67,
    attention: 'INFORMACIÓN PARCIAL',
    title: 'El modelo solo ve una parte del caso',
    detail: 'Una caja, una mano o un objeto pueden ocultar justo las señales que el modelo utiliza para distinguir categorías.',
    explanation: 'La respuesta puede ser correcta, pero la evidencia es menor. Un sistema responsable debería reconocer esa incertidumbre.',
    question: '¿En qué situaciones debería abstenerse y pedir revisión humana?'
  },
  unknown: {
    imageClass: 'bias-image fox-image',
    labClass: 'error-unknown',
    imageLabel: 'NUEVA IMAGEN: UNA CATEGORÍA QUE NO CONOCE',
    prediction: 'Perro · 82%',
    meter: 82,
    attention: 'PARECIDO A PERRO',
    title: 'El modelo no tiene “ninguna de las anteriores”',
    detail: 'Si solo conoce perro y gato, puede forzar un zorro dentro de una de esas opciones, incluso con confianza alta.',
    explanation: 'El 82% no convierte al zorro en perro. Solo indica que, entre las categorías disponibles, “perro” parece la menos improbable.',
    question: '¿Cómo detectamos que el caso está fuera de lo que el modelo aprendió?'
  }
};

function buildNetwork() {
  const lineGroup = document.getElementById('network-lines');
  const svgNamespace = 'http://www.w3.org/2000/svg';
  const inputs = [[55,48],[55,102],[55,158],[55,212]];
  const hidden = [[250,32],[250,81],[250,130],[250,179],[250,228]];
  const outputs = [[462,93],[462,174]];

  [...inputs.flatMap(start => hidden.map(end => [start, end])), ...hidden.flatMap(start => outputs.map(end => [start, end]))]
    .forEach(([start, end], index) => {
      const line = document.createElementNS(svgNamespace, 'line');
      line.setAttribute('x1', start[0]);
      line.setAttribute('y1', start[1]);
      line.setAttribute('x2', end[0]);
      line.setAttribute('y2', end[1]);
      line.style.animationDelay = `${(index % 8) * 0.07}s`;
      lineGroup.appendChild(line);
    });
}

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentSlide;
    slide.hidden = !active;
    slide.classList.toggle('is-active', active);
  });
  currentSlideLabel.textContent = String(currentSlide + 1).padStart(2, '0');
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
  slides[currentSlide].scrollTop = 0;
}

function clearLabelTimers() {
  labelTimers.forEach(timer => clearTimeout(timer));
  labelTimers = [];
}

function resetHook() {
  document.getElementById('hook-view').hidden = false;
  document.getElementById('dataset-view').hidden = true;
  document.getElementById('hook-feedback').hidden = true;
  document.querySelectorAll('[data-hook-choice]').forEach(button => {
    button.classList.remove('is-selected', 'is-wrong');
    button.disabled = false;
    button.setAttribute('aria-pressed', 'false');
  });
  resetLabels();
}

function answerHook(choice) {
  const correct = choice === 'cat';
  document.querySelectorAll('[data-hook-choice]').forEach(button => {
    const selected = button.dataset.hookChoice === choice;
    button.classList.toggle('is-selected', selected && correct);
    button.classList.toggle('is-wrong', selected && !correct);
    button.disabled = true;
    button.setAttribute('aria-pressed', String(selected));
  });
  document.getElementById('hook-result').textContent = correct ? 'Correcto: es un gato.' : 'Es un gato. El disfraz te hizo dudar.';
  document.getElementById('hook-explanation').textContent = correct
    ? 'Reconociste señales del rostro y del cuerpo a pesar del disfraz. ¿Cómo enseñamos ese criterio a una máquina?'
    : 'Tu respuesta es razonable: había señales que competían. Una IA también puede aprender la pista equivocada.';
  document.getElementById('hook-feedback').hidden = false;
}

function revealDataset() {
  document.getElementById('hook-view').hidden = true;
  document.getElementById('dataset-view').hidden = false;
}

function resetLabels() {
  clearLabelTimers();
  document.querySelectorAll('.sample').forEach(sample => sample.classList.remove('is-labeled'));
  document.getElementById('labeled-count').textContent = '0';
  document.getElementById('label-data').disabled = false;
  document.getElementById('label-data').textContent = 'Etiquetar ejemplos';
}

function labelDataset() {
  resetLabels();
  const samples = [...document.querySelectorAll('.sample')];
  document.getElementById('label-data').disabled = true;
  samples.forEach((sample, index) => {
    const timer = setTimeout(() => {
      sample.classList.add('is-labeled');
      document.getElementById('labeled-count').textContent = String(index + 1);
      if (index === samples.length - 1) {
        document.getElementById('label-data').disabled = false;
        document.getElementById('label-data').textContent = 'Volver a etiquetar';
      }
    }, 180 * index);
    labelTimers.push(timer);
  });
}

function setTrainingState(epoch) {
  trainingEpoch = Math.max(0, Math.min(trainingStates.length - 1, epoch));
  const state = trainingStates[trainingEpoch];
  document.getElementById('epoch-value').textContent = String(trainingEpoch);
  document.getElementById('loss-value').textContent = state.loss;
  document.getElementById('train-dog-value').textContent = `${state.dog}%`;
  document.getElementById('train-cat-value').textContent = `${state.cat}%`;
  document.getElementById('train-dog-bar').style.width = `${state.dog}%`;
  document.getElementById('train-cat-bar').style.width = `${state.cat}%`;
  document.getElementById('training-caption').textContent = state.caption;
  [...document.querySelectorAll('#feature-row span')].forEach((feature, index) => feature.classList.toggle('is-found', index < state.features));
  document.getElementById('train-step').textContent = trainingEpoch === trainingStates.length - 1 ? 'Entrenar desde cero' : 'Entrenar una ronda';
}

function pulseTraining() {
  const lab = document.querySelector('.training-lab');
  lab.classList.add('is-training');
  setTimeout(() => lab.classList.remove('is-training'), 850);
}

function trainOneStep() {
  if (trainingEpoch === trainingStates.length - 1) setTrainingState(0);
  else setTrainingState(trainingEpoch + 1);
  pulseTraining();
}

function trainAutomatically() {
  clearInterval(trainingTimer);
  setTrainingState(0);
  document.getElementById('train-auto').disabled = true;
  pulseTraining();
  trainingTimer = setInterval(() => {
    setTrainingState(trainingEpoch + 1);
    pulseTraining();
    if (trainingEpoch === trainingStates.length - 1) {
      clearInterval(trainingTimer);
      trainingTimer = null;
      document.getElementById('train-auto').disabled = false;
    }
  }, 950);
}

function resetTraining() {
  clearInterval(trainingTimer);
  trainingTimer = null;
  document.getElementById('train-auto').disabled = false;
  document.querySelector('.training-lab').classList.remove('is-training');
  setTrainingState(0);
}

function selectTest(type) {
  selectedTest = type;
  const image = document.getElementById('selected-image');
  image.className = `selected-image image-cell test-${{dog:1, cat:2, ambiguous:3, hidden:4}[type]}`;
  document.querySelectorAll('.test-thumb').forEach(button => button.classList.toggle('is-selected', button.dataset.test === type));
  resetClassificationResult();
}

function resetClassificationResult() {
  clearTimeout(classificationTimer);
  document.getElementById('selected-image').classList.remove('is-scanning');
  document.getElementById('prediction-title').textContent = 'Esperando imagen…';
  document.getElementById('result-dog-value').textContent = '—';
  document.getElementById('result-cat-value').textContent = '—';
  document.getElementById('result-dog-bar').style.width = '0%';
  document.getElementById('result-cat-bar').style.width = '0%';
  document.getElementById('result-explanation').textContent = 'Pulsa “Clasificar imagen” para observar el cálculo.';
  document.getElementById('classify-button').disabled = false;
}

function classifyImage() {
  const image = document.getElementById('selected-image');
  const result = testResults[selectedTest];
  resetClassificationResult();
  image.classList.add('is-scanning');
  document.getElementById('classify-button').disabled = true;
  document.getElementById('prediction-title').textContent = 'Analizando patrones…';
  classificationTimer = setTimeout(() => {
    image.classList.remove('is-scanning');
    document.getElementById('prediction-title').textContent = result.title;
    document.getElementById('result-dog-value').textContent = `${result.dog}%`;
    document.getElementById('result-cat-value').textContent = `${result.cat}%`;
    document.getElementById('result-dog-bar').style.width = `${result.dog}%`;
    document.getElementById('result-cat-bar').style.width = `${result.cat}%`;
    document.getElementById('result-explanation').textContent = result.explanation;
    document.getElementById('classify-button').disabled = false;
  }, 1450);
}

function setBiasMode(mode) {
  const balanced = mode === 'balanced';
  const lab = document.querySelector('.bias-lab');
  lab.classList.toggle('is-balanced', balanced);
  document.querySelectorAll('[data-bias-mode]').forEach(button => button.classList.toggle('is-active', button.dataset.biasMode === mode));
  document.getElementById('bias-subtitle').textContent = balanced
    ? 'Gatos y perros aparecen con fondos, luces, tamaños y ángulos variados.'
    : 'Todos los gatos aparecen dentro; casi todos los perros, sobre pasto.';
  document.getElementById('bias-prediction').textContent = balanced ? 'Gato · 92%' : 'Perro · 71%';
  document.getElementById('bias-meter-bar').style.width = balanced ? '92%' : '71%';
  document.getElementById('bias-explanation').textContent = balanced
    ? 'Con ejemplos más diversos, el animal pesa más que el fondo. El error disminuye, aunque nunca desaparece por completo.'
    : 'El modelo tomó un atajo: asoció el pasto con “perro”. El dato de contexto pesó más que el animal.';
  document.getElementById('attention-label').textContent = balanced ? 'ROSTRO Y FORMA' : 'PASTO';

  const cells = [...document.querySelectorAll('#bias-grid .bias-sample')];
  const classes = balanced ? ['train-1','train-6','train-3','train-8','train-4','train-5'] : ['train-1','train-2','train-3','train-5','train-6','train-7'];
  const labels = balanced
    ? ['Gato · interior','Perro · exterior','Gato · luz suave','Perro · interior','Gato · ventana','Perro · pasto']
    : ['Gato · interior','Gato · interior','Gato · interior','Perro · pasto','Perro · pasto','Perro · exterior'];

  cells.forEach((cell, index) => {
    cell.className = `bias-sample image-cell ${classes[index]}`;
    cell.querySelector('span').textContent = labels[index];
  });
}

function selectError(type) {
  selectedError = type;
  const lab = document.querySelector('.bias-lab');
  const image = document.getElementById('error-image');
  lab.classList.remove('error-light', 'error-hidden', 'error-unknown');
  document.querySelectorAll('[data-error]').forEach(button => {
    const active = button.dataset.error === type;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });

  if (type === 'context') {
    document.getElementById('context-controls').hidden = false;
    document.getElementById('error-detail').hidden = true;
    image.className = 'bias-image image-cell test-2';
    document.getElementById('error-image-label').textContent = 'NUEVA IMAGEN: GATO AL AIRE LIBRE';
    document.getElementById('error-question').textContent = '¿Qué datos faltan y a quién perjudica el error?';
    setBiasMode('biased');
    return;
  }

  const profile = errorProfiles[type];
  lab.classList.remove('is-balanced');
  lab.classList.add(profile.labClass);
  document.getElementById('context-controls').hidden = true;
  document.getElementById('error-detail').hidden = false;
  image.className = profile.imageClass;
  document.getElementById('error-image-label').textContent = profile.imageLabel;
  document.getElementById('bias-prediction').textContent = profile.prediction;
  document.getElementById('bias-meter-bar').style.width = `${profile.meter}%`;
  document.getElementById('attention-label').textContent = profile.attention;
  document.getElementById('error-detail-title').textContent = profile.title;
  document.getElementById('error-detail-copy').textContent = profile.detail;
  document.getElementById('bias-explanation').textContent = profile.explanation;
  document.getElementById('error-question').textContent = profile.question;
}

function resetAll() {
  resetHook();
  resetTraining();
  selectTest('dog');
  resetClassificationResult();
  selectError('context');
}

function resetCurrentSlide() {
  if (currentSlide === 0) resetHook();
  if (currentSlide === 1) resetTraining();
  if (currentSlide === 2) {
    selectTest('dog');
    resetClassificationResult();
  }
  if (currentSlide === 3) selectError('context');
}

document.querySelectorAll('[data-hook-choice]').forEach(button => button.addEventListener('click', () => answerHook(button.dataset.hookChoice)));
document.getElementById('show-dataset').addEventListener('click', revealDataset);
document.getElementById('label-data').addEventListener('click', labelDataset);
document.getElementById('train-step').addEventListener('click', trainOneStep);
document.getElementById('train-auto').addEventListener('click', trainAutomatically);
document.getElementById('classify-button').addEventListener('click', classifyImage);
document.querySelectorAll('.test-thumb').forEach(button => button.addEventListener('click', () => selectTest(button.dataset.test)));
document.querySelectorAll('[data-bias-mode]').forEach(button => button.addEventListener('click', () => setBiasMode(button.dataset.biasMode)));
document.querySelectorAll('[data-error]').forEach(button => button.addEventListener('click', () => selectError(button.dataset.error)));
document.getElementById('restart-demo').addEventListener('click', () => {
  resetAll();
  showSlide(0);
});

const returnButton = document.getElementById('return-button');
const returnUrl = new URLSearchParams(window.location.search).get('return');
if (returnUrl) {
  returnButton.href = returnUrl;
} else if (window.location.pathname.includes('/demo-ia/')) {
  returnButton.href = '../index.html?slide=10';
} else {
  returnButton.textContent = 'Volver al inicio';
  returnButton.addEventListener('click', event => {
    event.preventDefault();
    resetAll();
    showSlide(0);
  });
}

prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
resetButton.addEventListener('click', resetCurrentSlide);
fullscreenButton.addEventListener('click', async () => {
  if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
  else await document.exitFullscreen();
});

document.querySelectorAll('.wordmark').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showSlide(0);
}));

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') showSlide(currentSlide + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') showSlide(currentSlide - 1);
  if (event.key.toLowerCase() === 'r') resetCurrentSlide();
});

buildNetwork();
showSlide(0);
setTrainingState(0);
selectError('context');
