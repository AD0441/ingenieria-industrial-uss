const icons = {
  "arrow-right": '<svg viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>',
  "arrow-left": '<svg viewBox="0 0 24 24"><path d="M19 12H5"></path><path d="m11 18-6-6 6-6"></path></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M16 3h3a2 2 0 0 1 2 2v3"></path><path d="M8 21H5a2 2 0 0 1-2-2v-3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  factory: '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8l5 3V8l5 3V5h4v16"></path><path d="M8 17h1"></path><path d="M12 17h1"></path><path d="M16 17h1"></path></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
  tool: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"></path></svg>',
  route: '<svg viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"></circle><circle cx="18" cy="5" r="3"></circle><path d="M8.5 17A6.5 6.5 0 0 0 15 10.5V8"></path></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  leaf: '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z"></path><path d="M4 20c4-8 8-10 16-16"></path></svg>',
  network: '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="m8.5 8 2 7"></path><path d="m15.5 8-2 7"></path><path d="M9 6h6"></path></svg>',
  city: '<svg viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V8h5v13"></path><path d="M14 21V4h5v17"></path><path d="M7 11h1"></path><path d="M7 15h1"></path><path d="M16 8h1"></path><path d="M16 12h1"></path><path d="M16 16h1"></path></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"></path><path d="M9 15 4 10l5-1 6-6c2 0 4 2 4 4l-6 6-1 5-5-5"></path><path d="M15 9h.01"></path></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"></path><path d="m7 15 4-4 3 3 5-7"></path></svg>',
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 .5 5.5A3.5 3.5 0 0 0 8 17h1.5"></path><path d="M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1-.5 5.5A3.5 3.5 0 0 1 16 17h-1.5"></path><path d="M12 3v18"></path><path d="M8 9h4"></path><path d="M12 14h4"></path></svg>',
  external: '<svg viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="m10 14 11-11"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>',
  "rotate-ccw": '<svg viewBox="0 0 24 24"><path d="M3 2v6h6"></path><path d="M3 8a9 9 0 1 1 2.64 9.36"></path></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
  coins: '<svg viewBox="0 0 24 24"><ellipse cx="9" cy="6" rx="6" ry="3"></ellipse><path d="M3 6v4c0 1.7 2.7 3 6 3 1.1 0 2.1-.1 3-.4"></path><path d="M3 10v4c0 1.7 2.7 3 6 3"></path><ellipse cx="16" cy="15" rx="5" ry="3"></ellipse><path d="M11 15v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path></svg>',
  "check-circle": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path></svg>',
};

const aiDemos = {
  quickdraw: {
    eyebrow: "Demo 01 · IA que reconoce",
    title: "Quick, Draw!: la IA intenta leer tu dibujo",
    url: "https://quickdraw.withgoogle.com/",
    cta: "Abrir Quick, Draw!",
    intro: "Funciona muy bien como rompehielo: los estudiantes dibujan, la IA adivina y aparecen errores interesantes para conversar.",
    steps: ["Dibujar un objeto en 20 segundos.", "Observar cuándo acierta y cuándo se confunde.", "Preguntar qué patrones pudo haber usado.", "Conectar con datos, etiquetas y entrenamiento."],
    question: "Si dos personas dibujan distinto la misma idea, ¿qué necesita la IA para reconocer ambas?",
  },
  evolution: {
    eyebrow: "Demo 02 · IA que aprende",
    title: "Evolution: una criatura aprende por prueba y error",
    url: "https://keiwan.itch.io/evolution",
    cta: "Abrir Evolution",
    intro: "Es más visual y más ingenieril: permite hablar de objetivo, restricciones, diseño, iteración y optimización.",
    steps: ["Construir una criatura con huesos, articulaciones y músculos.", "Definir que debe avanzar lo más posible.", "Dejar que el sistema pruebe muchas variantes.", "Comparar qué diseño aprende mejor y por qué."],
    question: "Antes de que la IA mejore, ¿quién definió qué significa mejorar?",
  },
};

const skills = {
  analizar: "Analizar es separar síntomas, causas, datos y supuestos. Un industrial no parte comprando soluciones: primero entiende dónde está el cuello de botella.",
  priorizar: "Priorizar es decidir qué intervención genera más impacto con recursos limitados. En la vida real siempre hay presupuesto, tiempo y riesgo.",
  coordinar: "Coordinar significa lograr que personas, procesos y tecnología trabajen juntos. Una buena decisión técnica falla si el equipo no puede implementarla.",
  mejorar: "Mejorar es medir antes y después, aprender de los errores y ajustar. La solución no termina cuando se presenta: termina cuando funciona.",
};

const scenes = [...document.querySelectorAll(".scene")];
const deck = document.querySelector("#deck");
const chapterNumber = document.querySelector("#chapter-number");
const chapterTitle = document.querySelector("#chapter-title");
const progress = document.querySelector("#progress");
const railNav = document.querySelector(".rail-nav");
const overview = document.querySelector("#overview");
const overviewList = document.querySelector("#overview-list");
const aiDemoDetail = document.querySelector("#ai-demo-detail");
const aiDemoButtons = [...document.querySelectorAll("[data-ai-demo]")];
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
const challengeDelivery = document.querySelector("#challenge-wait");
const challengeQuality = document.querySelector("#challenge-coordination");
const challengeCost = document.querySelector("#challenge-trust");
const challengeMessage = document.querySelector("#challenge-message");
const challengeConfirm = document.querySelector('[data-action="confirm-challenge"]');
const challengeReport = document.querySelector("#challenge-report");
const challengeReportKicker = document.querySelector("#challenge-report-kicker");
const challengeReportTitle = document.querySelector("#challenge-report-title");
const challengeReportSummary = document.querySelector("#challenge-report-summary");
const challengeReportMeta = document.querySelector("#challenge-report-meta");
const challengeChart = document.querySelector("#challenge-chart");
const challengeDecisionList = document.querySelector("#challenge-decision-list");
const challengeOperationsReading = document.querySelector("#challenge-industrial-reading");
const challengeAnalyticsReading = document.querySelector("#challenge-informatics-reading");
const challengeRiskReading = document.querySelector("#challenge-risk-reading");
const challengeNextReading = document.querySelector("#challenge-next-reading");

let current = 0;
let wheelLock = false;
let touchStartY = null;
let touchStartX = null;
let quizAnswers = 0;
const quizLimit = 3;
const quizScores = { operaciones: 0, analitica: 0, gestion: 0, sostenibilidad: 0 };
const challengeState = { selected: new Set(), budget: 100, seconds: 90, timerId: null, resolved: false, result: null };

const challengeInterventions = {
  flujo: { title: "Rediseñar el flujo", area: "Operaciones", impact: "-24 h de entrega · +10 calidad · -5 costo", explanation: "Ataca el cuello de botella principal: esperas internas, recorridos innecesarios y etapas que no agregan valor." },
  calidad: { title: "Control de calidad", area: "Calidad", impact: "-8 h de entrega · +25 calidad · -4 costo", explanation: "Detecta fallas antes de que avancen por el proceso. Reduce reprocesos y protege la confianza del cliente." },
  tablero: { title: "Tablero de datos", area: "Analítica", impact: "-18 h de entrega · +8 calidad · -12 costo", explanation: "Hace visible demanda, inventario y capacidad para decidir con evidencia y anticipar saturaciones." },
  proveedores: { title: "Mejorar proveedores", area: "Supply chain", impact: "-12 h de entrega · +14 calidad · -6 costo", explanation: "Reduce variabilidad de insumos y quiebres de stock. La operación se vuelve más estable." },
  maquina: { title: "Comprar otra máquina", area: "Riesgo de solución aparente", impact: "-20 h de entrega · +3 calidad · +18 costo · -8 sostenibilidad", explanation: "Puede aumentar capacidad, pero si el problema era flujo, calidad o proveedores, solo agrega costo y complejidad." },
  energia: { title: "Plan energético", area: "Sostenibilidad", impact: "-2 h de entrega · -8 costo · +22 sostenibilidad", explanation: "No resuelve solo la entrega, pero mejora eficiencia y permite sostener la operación con menor impacto." },
};

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    if (icons[name]) node.innerHTML = icons[name];
  });
}

function buildProgress() {
  progress.innerHTML = scenes.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("");
  railNav.innerHTML = scenes.map((_, index) => `<button class="rail-dot ${index === 0 ? "is-active" : ""}" type="button" data-jump="${index}" aria-label="Ir al capítulo ${index + 1}"></button>`).join("");
}

function buildOverview() {
  overviewList.innerHTML = scenes.map((scene, index) => `<button type="button" data-jump="${index}" class="${index === current ? "is-current" : ""}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${scene.dataset.title}</strong></button>`).join("");
}

function setTheme(index) {
  document.body.classList.toggle("theme-light", scenes[index].classList.contains("scene--light"));
}

function goTo(index) {
  const nextIndex = Math.max(0, Math.min(index, scenes.length - 1));
  if (nextIndex === current) return;
  deck.dataset.direction = nextIndex > current ? "forward" : "backward";
  scenes[current].classList.remove("is-active");
  current = nextIndex;
  scenes[current].classList.add("is-active");
  scenes[current].scrollTop = 0;
  window.scrollTo(0, 0);
  updateChrome();
}

function updateChrome() {
  chapterNumber.textContent = `${String(current + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  chapterTitle.textContent = scenes[current].dataset.title;
  progress.querySelectorAll("span").forEach((item, index) => item.classList.toggle("is-active", index <= current));
  railNav.querySelectorAll(".rail-dot").forEach((item, index) => item.classList.toggle("is-active", index === current));
  scenes.forEach((scene, index) => scene.setAttribute("aria-hidden", String(index !== current)));
  document.querySelector('[data-action="prev"]').disabled = current === 0;
  document.querySelector('[data-action="next"]').disabled = current === scenes.length - 1;
  buildOverview();
  setTheme(current);
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function restartPanelAnimation(panel) {
  if (!panel) return;
  panel.classList.remove("is-updating");
  requestAnimationFrame(() => panel.classList.add("is-updating"));
}

function renderSkill(key) {
  skillDetail.textContent = skills[key];
  restartPanelAnimation(skillDetail);
}

function renderAiDemo(key) {
  const demo = aiDemos[key];
  if (!demo || !aiDemoDetail) return;
  aiDemoDetail.innerHTML = `
    <div class="ai-demo-detail__copy">
      <span>${demo.eyebrow}</span>
      <h3>${demo.title}</h3>
      <p>${demo.intro}</p>
      <a class="command command--primary" href="${demo.url}" target="_blank" rel="noopener noreferrer"><span>${demo.cta}</span><i data-icon="external" aria-hidden="true"></i></a>
    </div>
    <div class="ai-demo-detail__steps">
      ${demo.steps.map((step, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><p>${step}</p></article>`).join("")}
      <div class="ai-demo-question"><strong>Pregunta para cerrar</strong><p>${demo.question}</p></div>
    </div>
  `;
  hydrateIcons(aiDemoDetail);
  restartPanelAnimation(aiDemoDetail);
}

function selectAiDemo(button) {
  aiDemoButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderAiDemo(button.dataset.aiDemo);
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
  const [dimension, points] = Object.entries(quizScores).sort((a, b) => b[1] - a[1])[0];
  const messages = {
    operaciones: "Tus elecciones se inclinan hacia operaciones: flujos, capacidad, logística y mejora continua.",
    analitica: "Tus elecciones se inclinan hacia analítica: datos, modelos, IA aplicada y decisiones con evidencia.",
    gestion: "Tus elecciones se inclinan hacia gestión: proyectos, evaluación económica, estrategia y recursos.",
    sostenibilidad: "Tus elecciones se inclinan hacia sostenibilidad: eficiencia, energía, impacto y responsabilidad.",
  };
  const tie = Object.values(quizScores).filter((value) => value === points).length > 1;
  quizMessage.textContent = tie ? "Aparece un perfil mixto: te atrae mirar sistemas desde varias dimensiones. Eso es muy propio de Civil Industrial." : `${messages[dimension]} Puedes reiniciar y probar otra combinación.`;
  restartPanelAnimation(quizResult);
}

function resetQuiz() {
  quizAnswers = 0;
  Object.keys(quizScores).forEach((key) => { quizScores[key] = 0; });
  quizOptions.forEach((option) => {
    option.disabled = false;
    option.classList.remove("is-selected");
    option.setAttribute("aria-pressed", "false");
  });
  quizProgress.textContent = "0 de 3 seleccionadas";
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
      challengeMessage.textContent = challengeState.selected.size === 3 ? "Tiempo cumplido. Confirma la estrategia para revelar sus consecuencias." : "Tiempo cumplido. Completa tus tres decisiones y confirma la estrategia.";
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
  return `<article class="challenge-chart-row ${improved ? "is-improved" : ""} ${worsened ? "is-worse" : ""}">
    <div><strong>${label}</strong><small>${lowerIsBetter ? "Menor es mejor" : "Mayor es mejor"}</small></div>
    <div class="challenge-chart-bars">
      <span class="challenge-chart-bar challenge-chart-bar--before"><i style="--bar:${beforeWidth}%"></i><b>Antes: ${before}${suffix}</b></span>
      <span class="challenge-chart-bar challenge-chart-bar--after"><i style="--bar:${afterWidth}%"></i><b>Después: ${after}${suffix}</b></span>
    </div>
  </article>`;
}

function renderChallengeReport(result, selected) {
  const { delivery, quality, cost, sustainability, outcome, budgetUsed } = result;
  const outcomeCopy = {
    transformed: { kicker: "Sistema transformado", title: "La estrategia ataca el flujo completo", summary: "La combinación reduce atrasos, mejora calidad y baja costo sin esconder consecuencias. Es una respuesta industrial: proceso, datos y criterio.", risk: "La implementación puede fallar si el equipo no adopta los nuevos estándares o si los datos del tablero llegan tarde.", next: "Piloto de dos semanas, medición por etapa, reunión diaria de aprendizaje y ajuste de capacidad según demanda real." },
    balanced: { kicker: "Mejora balanceada", title: "La operación mejora, pero aún queda trabajo", summary: "La estrategia logra avances visibles, aunque todavía queda un indicador débil. Hay que seguir midiendo y ajustar el cuello de botella principal.", risk: "Una mejora parcial puede perderse cuando suba la demanda o aparezca variabilidad en proveedores.", next: "Revisar datos de atraso por etapa y escoger una segunda ola enfocada en el indicador más débil." },
    costly: { kicker: "Solución cara", title: "Más capacidad no siempre significa mejor sistema", summary: "La compra de maquinaria acelera una parte, pero aumenta costos y puede empeorar sostenibilidad si no se corrige el flujo.", risk: "Invertir en capacidad antes de entender el sistema puede agrandar el problema y dejar costos fijos innecesarios.", next: "Validar si la máquina era el cuello de botella real; rediseñar flujo y medir ocupación antes de comprar más capacidad." },
    apparent: { kicker: "Cambio aparente", title: "La propuesta mejora algo, pero no resuelve la crisis", summary: "La estrategia toca síntomas sueltos, pero no cambia suficiente la entrega, calidad o costo. Faltó mirar el sistema completo.", risk: "Celebrar una mejora cosmética puede retrasar decisiones estructurales y aumentar el desgaste del equipo.", next: "Mapear el proceso de punta a punta, medir tiempos reales y priorizar una intervención operacional con datos." },
  }[outcome];

  challengeReport.dataset.outcome = outcome;
  challengeReportKicker.textContent = outcomeCopy.kicker;
  challengeReportTitle.textContent = outcomeCopy.title;
  challengeReportSummary.textContent = outcomeCopy.summary;
  challengeReportMeta.textContent = `${selected.length} intervenciones · ${budgetUsed} créditos utilizados · ${100 - budgetUsed} créditos disponibles`;
  challengeChart.innerHTML = [
    renderChallengeMetric("Entrega", 14, delivery, " días", true),
    renderChallengeMetric("Calidad", 62, quality, "/100"),
    renderChallengeMetric("Costo unitario", 100, cost, "/100", true),
    renderChallengeMetric("Sostenibilidad", 52, sustainability, "/100"),
  ].join("");
  challengeDecisionList.innerHTML = selected.map((option, index) => {
    const intervention = challengeInterventions[option.dataset.challenge];
    return `<article><span>${String(index + 1).padStart(2, "0")}</span><div><small>${intervention.area}</small><strong>${intervention.title}</strong><b>${intervention.impact}</b><p>${intervention.explanation}</p></div></article>`;
  }).join("");

  const hasOperations = selected.some((option) => ["flujo", "calidad", "proveedores"].includes(option.dataset.challenge));
  const hasAnalytics = selected.some((option) => option.dataset.challenge === "tablero");
  challengeOperationsReading.textContent = hasOperations ? "La estrategia interviene procesos, capacidad, calidad o proveedores: cambia causas, no solo síntomas." : "Faltó intervenir la operación. Sin cambios en flujo, calidad o abastecimiento, la mejora queda frágil.";
  challengeAnalyticsReading.textContent = hasAnalytics ? "El tablero transforma datos en visibilidad para sostener decisiones y aprender rápido durante la implementación." : "Faltó una capa de datos que permita monitorear si la solución funciona cuando cambie la demanda.";
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
    challengeMessage.textContent = remaining === 0 ? "Estrategia lista. Confirma para revelar el impacto." : `Te ${remaining === 1 ? "queda" : "quedan"} ${remaining} ${remaining === 1 ? "decisión" : "decisiones"}.`;
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
  const delivery = Math.round(Math.max(4, 14 - selected.reduce((total, option) => total + Number(option.dataset.time), 0) / 8) * 10) / 10;
  const quality = Math.min(100, 62 + selected.reduce((total, option) => total + Number(option.dataset.quality), 0));
  const cost = Math.max(72, Math.min(130, 100 - selected.reduce((total, option) => total + Number(option.dataset.costimpact), 0)));
  const sustainability = Math.max(0, Math.min(100, 52 + selected.reduce((total, option) => total + Number(option.dataset.sustainability), 0)));
  const usedCostlyMachine = selected.some((option) => option.dataset.risk === "true");
  let outcome = "apparent";

  challengeDelivery.textContent = `${delivery} días`;
  challengeQuality.textContent = `${quality} / 100`;
  challengeCost.textContent = `${cost} / 100`;
  if (usedCostlyMachine && cost > 105) {
    outcome = "costly";
    challengeMessage.textContent = "Solución cara: bajaron tiempos, pero aumentaron costo y complejidad sin demostrar que la máquina era el verdadero cuello de botella.";
  } else if (delivery <= 8 && quality >= 85 && cost <= 95) {
    outcome = "transformed";
    challengeMessage.textContent = "Sistema transformado: combinaron flujo, calidad y datos para mejorar sin trasladar el problema a otro indicador.";
  } else if (delivery <= 10 && quality >= 75 && cost <= 105) {
    outcome = "balanced";
    challengeMessage.textContent = "Mejora balanceada: hay avance real, aunque queda un indicador por reforzar con una segunda iteración.";
  } else {
    challengeMessage.textContent = "Cambio aparente: la propuesta mejora una parte, pero la crisis sigue viva. Hay que mirar el sistema completo.";
  }

  challengeState.result = { delivery, quality, cost, sustainability, outcome, budgetUsed: 100 - challengeState.budget };
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
  challengeDelivery.textContent = "14 días";
  challengeQuality.textContent = "62 / 100";
  challengeCost.textContent = "100 / 100";
  challengeMessage.textContent = "Selecciona tres intervenciones sin superar los 100 créditos.";
  challengeReport.removeAttribute("data-outcome");
  challengeReportKicker.textContent = "Informe de la estrategia";
  challengeReportTitle.textContent = "Resultado del reto";
  challengeReportSummary.textContent = "Aquí aparecerá la explicación de tus decisiones.";
  challengeReportMeta.textContent = "Tres intervenciones dentro del presupuesto.";
  challengeChart.replaceChildren();
  challengeDecisionList.replaceChildren();
  challengeOperationsReading.textContent = "";
  challengeAnalyticsReading.textContent = "";
  challengeRiskReading.textContent = "";
  challengeNextReading.textContent = "";
  syncChallengeControls();
  restartPanelAnimation(document.querySelector(".challenge-outcome"));
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  const jump = event.target.closest("[data-jump]");
  const skill = event.target.closest("[data-skill]");
  const aiDemo = event.target.closest("[data-ai-demo]");
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

  if (skill) {
    document.querySelectorAll("[data-skill]").forEach((item) => {
      const selected = item === skill;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderSkill(skill.dataset.skill);
  }

  if (aiDemo) selectAiDemo(aiDemo);
  if (quiz) answerQuiz(quiz.dataset.score, quiz);
  if (challenge) toggleChallengeOption(challenge);
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

document.addEventListener("wheel", (event) => {
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
  window.setTimeout(() => { wheelLock = false; }, 760);
}, { passive: true });

document.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
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
}, { passive: true });

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
      vx: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
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
          ctx.strokeStyle = `rgba(23,183,216,${(1 - d / (170 * window.devicePixelRatio)) * 0.22})`;
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
document.querySelectorAll("[data-skill]").forEach((item) => item.setAttribute("aria-pressed", String(item.classList.contains("is-active"))));
aiDemoButtons.forEach((item) => item.setAttribute("aria-selected", String(item.classList.contains("is-selected"))));
quizOptions.forEach((item) => item.setAttribute("aria-pressed", "false"));
challengeOptions.forEach((item) => item.setAttribute("aria-pressed", "false"));
renderAiDemo("quickdraw");
renderSkill("analizar");
syncChallengeControls();
updateChrome();
startSignalCanvas();
