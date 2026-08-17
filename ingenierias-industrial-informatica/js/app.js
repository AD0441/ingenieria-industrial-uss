const icons = {
  "arrow-right": '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  "arrow-left": '<svg viewBox="0 0 24 24"><path d="M19 12H5"></path><path d="m11 18-6-6 6-6"></path></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M16 3h3a2 2 0 0 1 2 2v3"></path><path d="M8 21H5a2 2 0 0 1-2-2v-3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  factory: '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8l5 3V8l5 3V5h4v16"></path><path d="M8 17h1"></path><path d="M12 17h1"></path><path d="M16 17h1"></path></svg>',
  code: '<svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3"></path><path d="m16 9 4 3-4 3"></path><path d="m14 5-4 14"></path></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M13 2 9 11l-7 2 7 2 4 7 3-7 6-2-6-2-3-9Z"></path></svg>',
  tool: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"></path></svg>',
  message: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"></path></svg>',
  route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M8.5 17A6.5 6.5 0 0 0 15 10.5V8"></path></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z"></path><path d="M4 20c4-8 8-10 16-16"></path></svg>',
  network: '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="m8.5 8 2 7"></path><path d="m15.5 8-2 7"></path><path d="M9 6h6"></path></svg>',
  city: '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8h5v13"></path><path d="M14 21V4h5v17"></path><path d="M7 11h1"></path><path d="M7 15h1"></path><path d="M16 8h1"></path><path d="M16 12h1"></path><path d="M16 16h1"></path></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"></path><path d="M9 15 4 10l5-1 6-6c2 0 4 2 4 4l-6 6-1 5-5-5"></path><path d="M15 9h.01"></path></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  cpu: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path><path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-7"></path></svg>',
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5"></path><path d="M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5"></path><path d="M12 3v18"></path><path d="M8 9h4"></path><path d="M12 14h4"></path></svg>',
  layout: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="m10 14 11-11"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
  "rotate-ccw": '<svg viewBox="0 0 24 24"><path d="M3 2v6h6"></path><path d="M3 8a9 9 0 1 1 2.64 9.36"></path></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
  coins: '<svg viewBox="0 0 24 24"><ellipse cx="9" cy="6" rx="6" ry="3"></ellipse><path d="M3 6v4c0 1.7 2.7 3 6 3 1.1 0 2.1-.1 3-.4"></path><path d="M3 10v4c0 1.7 2.7 3 6 3"></path><ellipse cx="16" cy="15" rx="5" ry="3"></ellipse><path d="M11 15v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path></svg>',
  "check-circle": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path></svg>',
  armchair: '<svg viewBox="0 0 24 24"><path d="M6 12V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5"></path><path d="M4 10a2 2 0 0 0-2 2v5h20v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-2-2Z"></path><path d="M5 17v3"></path><path d="M19 17v3"></path></svg>',
};

const careers = {
  industrial: {
    title: "Ingeniería Civil Industrial",
    summary: "Para quienes quieren entender cómo funciona un sistema completo y mejorarlo: una empresa, un hospital, una planta, una cadena logística, un servicio o un proyecto de innovación.",
    bullets: [
      "Problemas típicos: optimizar procesos, reducir esperas, mejorar calidad, coordinar recursos.",
      "Herramientas: datos, modelos, gestión, economía, operaciones, simulación y mejora continua.",
      "Perfil: mirada amplia, gusto por ordenar complejidad y conectar personas con decisiones.",
    ],
  },
  informatica: {
    title: "Ingeniería Civil Informática",
    summary: "Para quienes quieren construir tecnología: software, IA, plataformas, sistemas seguros y soluciones digitales que resuelven problemas reales.",
    bullets: [
      "Problemas típicos: crear apps, automatizar tareas, proteger datos, entrenar modelos y escalar sistemas.",
      "Herramientas: programación, algoritmos, bases de datos, IA, redes, ciberseguridad y diseño de producto.",
      "Perfil: curiosidad por crear, probar, depurar y convertir ideas en tecnología funcionando.",
    ],
  },
};

const skills = {
  analizar: "Analizar es aprender a separar evidencia, supuestos y ruido antes de decidir. Es clave tanto para optimizar una operación como para diseñar un algoritmo.",
  crear: "Crear no es improvisar: es proponer alternativas, prototipar, probar y mejorar. La ingeniería necesita imaginación con método.",
  resolver: "Resolver significa avanzar cuando la respuesta no está al final del libro: elegir, probar, medir y volver a ajustar.",
  comunicar: "Comunicar convierte una buena idea en una solución posible: explicar el problema, defender datos y coordinar a otros.",
};

const scenes = [...document.querySelectorAll(".scene")];
const deck = document.querySelector("#deck");
const chapterNumber = document.querySelector("#chapter-number");
const chapterTitle = document.querySelector("#chapter-title");
const progress = document.querySelector("#progress");
const railNav = document.querySelector(".rail-nav");
const overview = document.querySelector("#overview");
const overviewList = document.querySelector("#overview-list");
const careerDetail = document.querySelector("#career-detail");
const skillDetail = document.querySelector("#skill-detail");
const quizResult = document.querySelector("#quiz-result");
const quizProgress = document.querySelector("#quiz-progress");
const quizMessage = document.querySelector("#quiz-message");
const quizReset = document.querySelector('[data-action="reset-quiz"]');
const quizOptions = [...document.querySelectorAll("[data-score]")];
const challengeOptions = [...document.querySelectorAll("[data-challenge]")];
const challengeBudget = document.querySelector("#challenge-budget");
const challengeCount = document.querySelector("#challenge-count");
const challengeTimer = document.querySelector("#challenge-timer");
const challengeWait = document.querySelector("#challenge-wait");
const challengeCoordination = document.querySelector("#challenge-coordination");
const challengeTrust = document.querySelector("#challenge-trust");
const challengeMessage = document.querySelector("#challenge-message");
const challengeConfirm = document.querySelector('[data-action="confirm-challenge"]');
const challengeReport = document.querySelector("#challenge-report");
const challengeReportKicker = document.querySelector("#challenge-report-kicker");
const challengeReportTitle = document.querySelector("#challenge-report-title");
const challengeReportSummary = document.querySelector("#challenge-report-summary");
const challengeReportMeta = document.querySelector("#challenge-report-meta");
const challengeChart = document.querySelector("#challenge-chart");
const challengeDecisionList = document.querySelector("#challenge-decision-list");
const challengeIndustrialReading = document.querySelector("#challenge-industrial-reading");
const challengeInformaticsReading = document.querySelector("#challenge-informatics-reading");
const challengeRiskReading = document.querySelector("#challenge-risk-reading");
const challengeNextReading = document.querySelector("#challenge-next-reading");

let current = 0;
let wheelLock = false;
let touchStartY = null;
let touchStartX = null;
let quizAnswers = 0;
const quizLimit = 3;
const quizScores = { industrial: 0, informatica: 0 };
const challengeState = {
  selected: new Set(),
  budget: 100,
  seconds: 90,
  timerId: null,
  resolved: false,
  result: null,
};

const challengeInterventions = {
  turnos: {
    title: "Reorganizar turnos",
    area: "Civil Industrial",
    impact: "−25 min de espera · +10 coordinación",
    explanation: "Ajusta la capacidad a la demanda real de la tarde. Ataca directamente el desbalance entre llegadas y personal disponible.",
  },
  triaje: {
    title: "Rediseñar el triaje",
    area: "Civil Industrial",
    impact: "−20 min de espera · +15 coordinación · +5 confianza",
    explanation: "Evita que todos los pacientes recorran el mismo proceso y permite priorizar con reglas clínicas visibles.",
  },
  tablero: {
    title: "Tablero en tiempo real",
    area: "Industrial + Informática",
    impact: "−20 min de espera · +20 coordinación",
    explanation: "Convierte datos dispersos en alertas operativas para que el equipo detecte congestión y actúe a tiempo.",
  },
  app: {
    title: "App para consultar el turno",
    area: "Civil Informática",
    impact: "−5 min de espera · +5 confianza",
    explanation: "Reduce incertidumbre y mejora la información del paciente, aunque por sí sola casi no cambia la capacidad del sistema.",
  },
  ia: {
    title: "IA sin auditoría",
    area: "Civil Informática",
    impact: "−30 min de espera · −40 confianza",
    explanation: "Acelera la priorización, pero nadie puede justificar sus decisiones. Una mejora rápida se vuelve frágil si puede discriminar.",
  },
  sala: {
    title: "Ampliar la sala de espera",
    area: "Cambio superficial",
    impact: "Sin cambio en la espera",
    explanation: "Hace más cómoda la espera, pero no modifica el flujo, la capacidad ni el cuello de botella que origina el problema.",
  },
};

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    if (icons[name]) node.innerHTML = icons[name];
  });
}

function buildProgress() {
  progress.innerHTML = scenes.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("");
  railNav.innerHTML = scenes
    .map((_, index) => `<button class="rail-dot ${index === 0 ? "is-active" : ""}" type="button" data-jump="${index}" aria-label="Ir al capítulo ${index + 1}"></button>`)
    .join("");
}

function buildOverview() {
  overviewList.innerHTML = scenes
    .map((scene, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `<button type="button" data-jump="${index}" class="${index === current ? "is-current" : ""}"><span>${number}</span><strong>${scene.dataset.title}</strong></button>`;
    })
    .join("");
}

function setTheme(index) {
  document.body.classList.toggle("theme-light", scenes[index].classList.contains("scene--light"));
}

function goTo(index) {
  const next = Math.max(0, Math.min(index, scenes.length - 1));
  if (next === current) return;
  deck.dataset.direction = next > current ? "forward" : "backward";
  scenes[current].classList.remove("is-active");
  current = next;
  scenes[current].classList.add("is-active");
  scenes[current].scrollTop = 0;
  window.scrollTo(0, 0);
  updateChrome();
}

function updateChrome() {
  const number = String(current + 1).padStart(2, "0");
  chapterNumber.textContent = `${number} / ${String(scenes.length).padStart(2, "0")}`;
  chapterTitle.textContent = scenes[current].dataset.title;
  progress.querySelectorAll("span").forEach((item, index) => item.classList.toggle("is-active", index <= current));
  railNav.querySelectorAll(".rail-dot").forEach((item, index) => item.classList.toggle("is-active", index === current));
  scenes.forEach((scene, index) => scene.setAttribute("aria-hidden", String(index !== current)));
  document.querySelector('[data-action="prev"]').disabled = current === 0;
  document.querySelector('[data-action="next"]').disabled = current === scenes.length - 1;
  buildOverview();
  setTheme(current);
}

function next() {
  goTo(current + 1);
}

function prev() {
  goTo(current - 1);
}

function renderCareer(key) {
  const career = careers[key];
  careerDetail.innerHTML = `
    <div>
      <h3>${career.title}</h3>
      <p>${career.summary}</p>
    </div>
    <ul>${career.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
  `;
  restartPanelAnimation(careerDetail);
}

function renderSkill(key) {
  skillDetail.textContent = skills[key];
  restartPanelAnimation(skillDetail);
}

function restartPanelAnimation(panel) {
  panel.classList.remove("is-updating");
  requestAnimationFrame(() => panel.classList.add("is-updating"));
}

function answerQuiz(score, button) {
  if (quizAnswers >= quizLimit || button.disabled) return;

  quizScores[score] += 1;
  quizAnswers += 1;
  button.classList.add("is-selected");
  button.setAttribute("aria-pressed", "true");
  button.disabled = true;
  quizReset.disabled = false;
  quizProgress.textContent = `${quizAnswers} de ${quizLimit} seleccionadas`;

  if (quizAnswers < quizLimit) {
    const remaining = quizLimit - quizAnswers;
    quizMessage.textContent = remaining === 1 ? "Te queda una elección." : `Te quedan ${remaining} elecciones.`;
    restartPanelAnimation(quizResult);
    return;
  }

  quizOptions.forEach((option) => {
    if (!option.classList.contains("is-selected")) option.disabled = true;
  });
  const winner =
    quizScores.industrial === quizScores.informatica
      ? "Hay empate: te atrae tanto mejorar sistemas como crear tecnología."
      : quizScores.industrial > quizScores.informatica
        ? "Tus elecciones se inclinan hacia Civil Industrial: sistemas, procesos, decisiones y coordinación."
        : "Tus elecciones se inclinan hacia Civil Informática: software, IA, datos y tecnología funcionando.";
  quizMessage.textContent = `${winner} Puedes reiniciar y probar otra combinación.`;
  restartPanelAnimation(quizResult);
}

function resetQuiz() {
  quizAnswers = 0;
  quizScores.industrial = 0;
  quizScores.informatica = 0;
  quizOptions.forEach((option) => {
    option.disabled = false;
    option.classList.remove("is-selected");
    option.setAttribute("aria-pressed", "false");
  });
  quizProgress.textContent = `0 de ${quizLimit} seleccionadas`;
  quizMessage.textContent = "Elige tu primer desafío.";
  quizReset.disabled = true;
  restartPanelAnimation(quizResult);
}

function formatChallengeTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function startChallengeTimer() {
  if (challengeState.timerId || challengeState.resolved || challengeState.seconds <= 0) return;
  challengeState.timerId = window.setInterval(() => {
    challengeState.seconds -= 1;
    challengeTimer.textContent = formatChallengeTime(challengeState.seconds);
    if (challengeState.seconds <= 0) {
      window.clearInterval(challengeState.timerId);
      challengeState.timerId = null;
      challengeMessage.textContent = challengeState.selected.size === 3
        ? "Tiempo cumplido. Confirma la estrategia para revelar sus consecuencias."
        : "Tiempo cumplido. Completa tus tres decisiones y confirma la estrategia.";
      restartPanelAnimation(challengeMessage);
    }
  }, 1000);
}

function syncChallengeControls() {
  challengeBudget.textContent = String(challengeState.budget);
  challengeCount.textContent = `${challengeState.selected.size} / 3`;
  challengeConfirm.disabled = challengeState.selected.size !== 3 || challengeState.resolved;
}

function renderChallengeMetric(label, before, after, suffix, lowerIsBetter = false) {
  const max = lowerIsBetter ? Math.max(before, after, 1) : 100;
  const beforeWidth = Math.max(4, Math.min(100, (before / max) * 100));
  const afterWidth = Math.max(4, Math.min(100, (after / max) * 100));
  const improved = lowerIsBetter ? after < before : after > before;
  const worsened = lowerIsBetter ? after > before : after < before;
  return `
    <article class="challenge-chart-row ${improved ? "is-improved" : ""} ${worsened ? "is-worse" : ""}">
      <div><strong>${label}</strong><small>${lowerIsBetter ? "Menor es mejor" : "Mayor es mejor"}</small></div>
      <div class="challenge-chart-bars">
        <span class="challenge-chart-bar challenge-chart-bar--before"><i style="--bar:${beforeWidth}%"></i><b>Antes: ${before}${suffix}</b></span>
        <span class="challenge-chart-bar challenge-chart-bar--after"><i style="--bar:${afterWidth}%"></i><b>Después: ${after}${suffix}</b></span>
      </div>
    </article>`;
}

function renderChallengeReport(result, selected) {
  const { wait, coordination, trust, outcome, budgetUsed } = result;
  const outcomeCopy = {
    risky: {
      kicker: "Alerta ética y operacional",
      title: "Más rápido no siempre significa mejor",
      summary: "La espera disminuyó, pero la estrategia perdió legitimidad: una decisión que no puede explicarse puede perjudicar a pacientes y al hospital.",
      risk: "La IA no auditada reduce la confianza a un nivel crítico y podría priorizar de manera injusta.",
      next: "Detener el despliegue, auditar datos y sesgos, definir supervisión clínica y probar el modelo en un entorno controlado.",
    },
    transformed: {
      kicker: "Sistema transformado",
      title: "La estrategia mejora el flujo completo",
      summary: "La combinación ataca la demanda, reorganiza el proceso y entrega información para decidir. El resultado mejora sin comprometer la confianza.",
      risk: "El cambio puede fallar si los datos del tablero son incompletos o si el equipo no participa en el nuevo proceso.",
      next: "Realizar un piloto durante una semana, medir tiempos por etapa y ajustar turnos y alertas con el equipo clínico.",
    },
    partial: {
      kicker: "Mejora parcial",
      title: "Hay avance, pero queda un cuello de botella",
      summary: "La estrategia mejora indicadores importantes, aunque todavía no alcanza la meta de 50 minutos. Falta intervenir una parte crítica del flujo.",
      risk: "El beneficio podría desaparecer durante una demanda excepcional porque la capacidad sigue siendo limitada.",
      next: "Identificar en qué etapa se acumula la espera y probar una intervención adicional enfocada en capacidad o triaje.",
    },
    apparent: {
      kicker: "Cambio aparente",
      title: "La experiencia cambia más que el sistema",
      summary: "La propuesta puede verse mejor desde fuera, pero no modifica suficientemente la causa de la espera. El problema central continúa.",
      risk: "Confundir comodidad o información con capacidad real puede ocultar el cuello de botella y postergar una solución efectiva.",
      next: "Medir llegadas, capacidad y duración de cada etapa antes de invertir nuevamente; luego rediseñar el flujo prioritario.",
    },
  }[outcome];

  challengeReport.dataset.outcome = outcome;
  challengeReportKicker.textContent = outcomeCopy.kicker;
  challengeReportTitle.textContent = outcomeCopy.title;
  challengeReportSummary.textContent = outcomeCopy.summary;
  challengeReportMeta.textContent = `${selected.length} intervenciones · ${budgetUsed} créditos utilizados · ${100 - budgetUsed} créditos disponibles`;
  challengeChart.innerHTML = [
    renderChallengeMetric("Espera", 110, wait, " min", true),
    renderChallengeMetric("Coordinación", 45, coordination, "/100"),
    renderChallengeMetric("Confianza", 80, trust, "/100"),
  ].join("");
  challengeDecisionList.innerHTML = selected.map((option, index) => {
    const intervention = challengeInterventions[option.dataset.challenge];
    return `
      <article>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><small>${intervention.area}</small><strong>${intervention.title}</strong><b>${intervention.impact}</b><p>${intervention.explanation}</p></div>
      </article>`;
  }).join("");

  const hasIndustrial = selected.some((option) => ["turnos", "triaje", "tablero"].includes(option.dataset.challenge));
  const hasInformatics = selected.some((option) => ["app", "ia", "tablero"].includes(option.dataset.challenge));
  challengeIndustrialReading.textContent = hasIndustrial
    ? "La estrategia modifica capacidad, secuencia y coordinación; no se limita a tratar síntomas visibles."
    : "Faltó intervenir el flujo y la capacidad. La tecnología recibió más atención que el funcionamiento del servicio.";
  challengeInformaticsReading.textContent = hasInformatics
    ? "Los datos se convierten en información o decisiones digitales, pero su valor depende del diseño, la seguridad y la explicabilidad."
    : "Faltó una herramienta digital que entregue visibilidad o información en tiempo real para sostener las decisiones.";
  challengeRiskReading.textContent = outcomeCopy.risk;
  challengeNextReading.textContent = outcomeCopy.next;
  hydrateIcons(challengeReport);
}

function toggleChallengeOption(button) {
  if (challengeState.resolved) return;
  const key = button.dataset.challenge;
  const cost = Number(button.dataset.cost);
  if (challengeState.selected.has(key)) {
    challengeState.selected.delete(key);
    challengeState.budget += cost;
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
    challengeMessage.textContent = "Ajusta tu estrategia y completa tres intervenciones.";
  } else {
    if (challengeState.selected.size >= 3) {
      challengeMessage.textContent = "Ya elegiste tres. Quita una intervención para cambiarla.";
      restartPanelAnimation(challengeMessage);
      return;
    }
    if (cost > challengeState.budget) {
      challengeMessage.textContent = `Esa intervención supera el presupuesto por ${cost - challengeState.budget} créditos.`;
      restartPanelAnimation(challengeMessage);
      return;
    }
    challengeState.selected.add(key);
    challengeState.budget -= cost;
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    const remaining = 3 - challengeState.selected.size;
    challengeMessage.textContent = remaining === 0
      ? "Estrategia lista. Confirma para revelar el impacto."
      : `Te ${remaining === 1 ? "queda" : "quedan"} ${remaining} ${remaining === 1 ? "decisión" : "decisiones"}.`;
    startChallengeTimer();
  }
  syncChallengeControls();
  restartPanelAnimation(challengeMessage);
}

function confirmChallenge() {
  if (challengeState.selected.size !== 3 || challengeState.resolved) return;
  challengeState.resolved = true;
  if (challengeState.timerId) window.clearInterval(challengeState.timerId);
  challengeState.timerId = null;

  const selected = challengeOptions.filter((option) => challengeState.selected.has(option.dataset.challenge));
  const wait = Math.max(0, 110 - selected.reduce((total, option) => total + Number(option.dataset.wait), 0));
  const coordination = Math.min(100, 45 + selected.reduce((total, option) => total + Number(option.dataset.coordination), 0));
  const trust = Math.max(0, Math.min(100, 80 + selected.reduce((total, option) => total + Number(option.dataset.trust), 0)));
  const usedRiskyAi = selected.some((option) => option.dataset.risk === "true");
  let outcome = "apparent";

  challengeWait.textContent = `${wait} min`;
  challengeCoordination.textContent = `${coordination} / 100`;
  challengeTrust.textContent = `${trust} / 100`;
  if (usedRiskyAi && trust < 60) {
    outcome = "risky";
    challengeMessage.textContent = "Solución rápida, pero riesgosa: bajó la espera, aunque una IA que nadie puede explicar pone en juego la confianza y la equidad.";
  } else if (wait <= 50 && trust >= 70) {
    outcome = "transformed";
    challengeMessage.textContent = "Sistema transformado: combinaron procesos, datos y tecnología responsable sin trasladar el problema a los pacientes.";
  } else if (wait <= 70 && trust >= 60) {
    outcome = "partial";
    challengeMessage.textContent = "Mejora parcial: avanzaron, pero todavía queda un cuello de botella por resolver en el sistema.";
  } else {
    challengeMessage.textContent = "Cambio aparente: la propuesta mejora la experiencia, pero la espera sigue demasiado alta. Hay que mirar el sistema completo.";
  }

  challengeState.result = { wait, coordination, trust, outcome, budgetUsed: 100 - challengeState.budget };
  challengeOptions.forEach((option) => { option.disabled = true; });
  syncChallengeControls();
  restartPanelAnimation(document.querySelector(".challenge-outcome"));
  renderChallengeReport(challengeState.result, selected);
  challengeReport.showModal();
}

function resetChallenge() {
  if (challengeState.timerId) window.clearInterval(challengeState.timerId);
  challengeState.selected.clear();
  challengeState.budget = 100;
  challengeState.seconds = 90;
  challengeState.timerId = null;
  challengeState.resolved = false;
  challengeState.result = null;
  if (challengeReport.open) challengeReport.close();
  challengeOptions.forEach((option) => {
    option.disabled = false;
    option.classList.remove("is-selected");
    option.setAttribute("aria-pressed", "false");
  });
  challengeTimer.textContent = "01:30";
  challengeWait.textContent = "110 min";
  challengeCoordination.textContent = "45 / 100";
  challengeTrust.textContent = "80 / 100";
  challengeMessage.textContent = "Selecciona tres intervenciones sin superar los 100 créditos.";
  challengeReport.removeAttribute("data-outcome");
  challengeReportKicker.textContent = "Informe de la estrategia";
  challengeReportTitle.textContent = "Resultado del reto";
  challengeReportSummary.textContent = "Aquí aparecerá la explicación de tus decisiones.";
  challengeReportMeta.textContent = "Tres intervenciones dentro del presupuesto.";
  challengeChart.replaceChildren();
  challengeDecisionList.replaceChildren();
  challengeIndustrialReading.textContent = "";
  challengeInformaticsReading.textContent = "";
  challengeRiskReading.textContent = "";
  challengeNextReading.textContent = "";
  syncChallengeControls();
  restartPanelAnimation(document.querySelector(".challenge-outcome"));
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  const jump = event.target.closest("[data-jump]");
  const toggle = event.target.closest("[data-career]");
  const skill = event.target.closest("[data-skill]");
  const quiz = event.target.closest("[data-score]");
  const challenge = event.target.closest("[data-challenge]");

  if (action) {
    const kind = action.dataset.action;
    if (kind === "next") next();
    if (kind === "prev") prev();
    if (kind === "jump") goTo(Number(action.dataset.target));
    if (kind === "overview") overview.showModal();
    if (kind === "close-overview") overview.close();
    if (kind === "reset-quiz") resetQuiz();
    if (kind === "confirm-challenge") confirmChallenge();
    if (kind === "reset-challenge") resetChallenge();
    if (kind === "close-challenge-report" && challengeReport.open) challengeReport.close();
    if (kind === "fullscreen") {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.().catch(() => {});
    }
  }

  if (jump) {
    goTo(Number(jump.dataset.jump));
    if (overview.open) overview.close();
  }

  if (toggle) {
    document.querySelectorAll("[data-career]").forEach((item) => {
      const selected = item === toggle;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderCareer(toggle.dataset.career);
  }

  if (skill) {
    document.querySelectorAll("[data-skill]").forEach((item) => {
      const selected = item === skill;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderSkill(skill.dataset.skill);
  }

  if (quiz) {
    answerQuiz(quiz.dataset.score, quiz);
  }

  if (challenge) {
    toggleChallengeOption(challenge);
  }
});

document.addEventListener("keydown", (event) => {
  if (challengeReport.open) {
    if (event.key === "Escape") challengeReport.close();
    return;
  }
  if (overview.open) {
    if (event.key === "Escape") overview.close();
    return;
  }
  if (event.target instanceof Element && event.target.closest("button, a, input, select, textarea")) return;

  const handled = ["ArrowRight", "PageDown", " ", "ArrowLeft", "PageUp", "Home", "End"].includes(event.key);
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") next();
  if (event.key === "ArrowLeft" || event.key === "PageUp") prev();
  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(scenes.length - 1);
  if (handled) event.preventDefault();
});

document.addEventListener(
  "wheel",
  (event) => {
    if (overview.open || challengeReport.open || Math.abs(event.deltaY) < 20 || wheelLock) return;
    const activeScene = scenes[current];
    const maxScroll = activeScene.scrollHeight - activeScene.clientHeight;
    if (maxScroll > 4) {
      const movingDownInside = event.deltaY > 0 && activeScene.scrollTop < maxScroll - 2;
      const movingUpInside = event.deltaY < 0 && activeScene.scrollTop > 2;
      if (movingDownInside || movingUpInside) return;
    }
    wheelLock = true;
    if (event.deltaY > 0) next();
    else prev();
    window.setTimeout(() => {
      wheelLock = false;
    }, 760);
  },
  { passive: true },
);

document.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (event) => {
    if (challengeReport.open) return;
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = touchStartX - event.changedTouches[0].clientX;
    const deltaY = touchStartY - event.changedTouches[0].clientY;
    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      if (deltaX > 0) next();
      else prev();
    }
    touchStartX = null;
    touchStartY = null;
  },
  { passive: true },
);

function startSignalCanvas() {
  const canvas = document.querySelector("#signal-canvas");
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    width = canvas.width = Math.floor(window.innerWidth * window.devicePixelRatio);
    height = canvas.height = Math.floor(window.innerHeight * window.devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const count = Math.min(76, Math.max(32, Math.floor(window.innerWidth / 22)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .28 * window.devicePixelRatio,
      vy: (Math.random() - .5) * .28 * window.devicePixelRatio,
      r: (index % 9 === 0 ? 2.2 : 1.2) * window.devicePixelRatio,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = window.devicePixelRatio;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 170 * window.devicePixelRatio) {
          ctx.strokeStyle = `rgba(23,183,216,${(1 - d / (170 * window.devicePixelRatio)) * .22})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.fillStyle = "rgba(205,181,124,.58)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!prefersReduced) requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  resize();
  tick();
}

hydrateIcons();
buildProgress();
buildOverview();
document.querySelectorAll("[data-career]").forEach((item) => item.setAttribute("aria-selected", String(item.classList.contains("is-selected"))));
document.querySelectorAll("[data-skill]").forEach((item) => item.setAttribute("aria-pressed", String(item.classList.contains("is-active"))));
quizOptions.forEach((item) => item.setAttribute("aria-pressed", "false"));
challengeOptions.forEach((item) => item.setAttribute("aria-pressed", "false"));
renderCareer("industrial");
renderSkill("analizar");
syncChallengeControls();
updateChrome();
startSignalCanvas();
