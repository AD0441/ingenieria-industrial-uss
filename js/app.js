import { createPresentationStore } from "./state.js";
import { bindPresentationInputs } from "./input.js";

const scenes = [...document.querySelectorAll(".scene")];
const store = createPresentationStore(scenes.length);
const progress = document.querySelector("#progress");
const overview = document.querySelector("#overview");
const overviewList = document.querySelector("#overview-list");
const chapterNumber = document.querySelector("#chapter-number");
const chapterTitle = document.querySelector("#chapter-title");
const chromeLogo = document.querySelector("#chrome-logo");
const prevButton = document.querySelector("[data-action='prev']");
const nextButtons = [...document.querySelectorAll("[data-action='next']")];
const fullscreenButton = document.querySelector("[data-action='fullscreen']");

const fullscreenApi = {
  element: () => document.fullscreenElement || document.webkitFullscreenElement,
  request: document.documentElement.requestFullscreen
    ? () => document.documentElement.requestFullscreen({ navigationUI: "hide" })
    : document.documentElement.webkitRequestFullscreen
      ? () => document.documentElement.webkitRequestFullscreen()
      : null,
  exit: document.exitFullscreen
    ? () => document.exitFullscreen()
    : document.webkitExitFullscreen
      ? () => document.webkitExitFullscreen()
      : null,
};

const scenarios = {
  agua: ["Seguridad hídrica", "Comprender fuentes, demanda, calidad, infraestructura y comportamiento para abastecer con continuidad y uso responsable."],
  salud: ["Flujo de atención", "Modelar demanda, rediseñar etapas, asignar capacidad y reducir esperas sin perder seguridad ni trato humano."],
  energia: ["Sistema resiliente", "Pronosticar demanda, coordinar activos y equilibrar costo, continuidad de servicio, emisiones y riesgo."],
  movilidad: ["Movilidad conectada", "Integrar rutas, capacidad, horarios, seguridad y datos para mover personas y bienes con menos tiempo e impacto."],
};

const sciences = {
  calculus: ["Cálculo", "Describe cambio, acumulación y comportamiento dinámico; permite buscar óptimos bajo restricciones."],
  physics: ["Física", "Explica energía, movimiento, electricidad y fenómenos que ningún diseño puede ignorar."],
  mechanics: ["Mecánica", "Relaciona fuerzas, equilibrio, materiales y seguridad con el comportamiento real de estructuras y máquinas."],
  algebra: ["Álgebra", "Representa relaciones entre muchas variables y hace posible resolver modelos complejos de forma sistemática."],
  stats: ["Estadística", "Permite aprender de datos incompletos, distinguir patrón de ruido y decidir bajo incertidumbre."],
};

const lenses = {
  operations: ["Operaciones y calidad", "Analiza flujo, capacidad, variabilidad y servicio para mejorar el desempeño cotidiano."],
  economy: ["Economía y viabilidad", "Compara costos, beneficios, riesgo y valor para decidir si una solución puede sostenerse."],
  people: ["Personas y organización", "Considera capacidades, incentivos, coordinación, liderazgo y adopción del cambio."],
  data: ["Datos y evidencia", "Convierte observaciones en indicadores, modelos y decisiones que pueden explicarse y revisarse."],
  impact: ["Sostenibilidad e impacto", "Evalúa consecuencias ambientales, sociales y de largo plazo sobre el sistema completo."],
};

const technologies = {
  ai: ["Inteligencia artificial", "Permite predecir, clasificar y apoyar decisiones; el valor aparece cuando la pregunta, los datos y la validación son correctos."],
  code: ["Programación", "Automatiza análisis, conecta datos y convierte una idea en una solución reproducible que otros pueden usar y mejorar."],
  robot: ["Robótica", "Desplaza tareas repetitivas o riesgosas y exige rediseñar procesos, roles, seguridad y colaboración entre personas y máquinas."],
  print: ["Impresión 3D", "Acorta el paso del diseño al prototipo: permite probar geometrías, costos y funcionamiento antes de escalar."],
  iot: ["Internet de las cosas", "Convierte equipos y procesos físicos en datos continuos para detectar desviaciones, aprender y actuar a tiempo."],
};

const challenges = {
  climate: ["Cambio climático", "Diseñar sistemas resilientes, reducir emisiones y adaptarse a eventos extremos sin trasladar el problema a otros territorios o personas."],
  resources: ["Energía y recursos", "Producir más valor usando menos materiales, agua y energía, considerando disponibilidad, costo y seguridad."],
  health: ["Salud y demografía", "Responder a poblaciones que envejecen, nuevas demandas sanitarias y desigualdades de acceso con sistemas coordinados."],
  cities: ["Ciudades y logística", "Integrar movilidad, vivienda, abastecimiento, residuos e infraestructura en territorios cada vez más densos."],
  digital: ["Transformación digital", "Adoptar IA y automatización con ciberseguridad, ética, trazabilidad y capacidades humanas para gobernarlas."],
};

function createChrome() {
  progress.innerHTML = scenes.map(() => "<span></span>").join("");
  overviewList.innerHTML = scenes.map((scene, index) => `
    <button type="button" data-go="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${scene.dataset.title}</strong>
    </button>
  `).join("");
}

function renderFullscreenControl() {
  if (!fullscreenButton) return;
  const supported = Boolean(fullscreenApi.request && fullscreenApi.exit);
  const active = Boolean(fullscreenApi.element());
  fullscreenButton.hidden = !supported;
  fullscreenButton.setAttribute("aria-pressed", String(active));
  fullscreenButton.setAttribute("aria-label", active ? "Salir de pantalla completa" : "Entrar en pantalla completa");
  fullscreenButton.dataset.tooltip = active ? "Salir de pantalla completa" : "Pantalla completa";
}

async function toggleFullscreen() {
  if (!fullscreenApi.request || !fullscreenApi.exit) return;
  try {
    if (fullscreenApi.element()) await fullscreenApi.exit();
    else await fullscreenApi.request();
  } catch {
    renderFullscreenControl();
  }
}

function renderScenario(value) {
  const [title, body] = scenarios[value];
  document.querySelector("#scenario-answer").innerHTML = `<span>Mirada industrial</span><strong>${title}</strong><p>${body}</p>`;
  document.querySelectorAll("[data-scenario]").forEach((button) => button.classList.toggle("is-selected", button.dataset.scenario === value));
}

function renderTabGroup(value, dataAttribute, detailSelector, collection) {
  const [title, body] = collection[value];
  const detail = document.querySelector(detailSelector);
  if (detail) detail.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
  document.querySelectorAll(`[${dataAttribute}]`).forEach((button) => {
    const selected = button.getAttribute(dataAttribute) === value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

function renderTechnology(value) {
  const [title, body] = technologies[value];
  document.querySelector("#tech-detail").innerHTML = `<strong>${title}</strong><p>${body}</p>`;
  document.querySelectorAll("[data-tech]").forEach((button) => {
    const selected = button.dataset.tech === value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-selected", String(selected));
  });
}

let previousIndex = -1;
function render(state) {
  scenes.forEach((scene, index) => {
    const active = index === state.index;
    scene.classList.toggle("is-active", active);
    scene.setAttribute("aria-hidden", String(!active));
    if (active && previousIndex !== state.index) scene.scrollTop = 0;
  });

  const activeScene = scenes[state.index];
  const light = activeScene.classList.contains("scene--light");
  document.body.classList.toggle("theme-light", light);
  chromeLogo.src = light ? "assets/uss-facultad-color.png" : "assets/uss-facultad-blanco.png";
  chapterNumber.textContent = `${String(state.index + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  chapterTitle.textContent = activeScene.dataset.title;
  [...progress.children].forEach((bar, index) => bar.classList.toggle("is-active", index === state.index));
  prevButton.disabled = state.index === 0;
  nextButtons.forEach((button) => { button.disabled = state.index === scenes.length - 1; });
  overviewList.querySelectorAll("button").forEach((button, index) => button.classList.toggle("is-current", index === state.index));

  if (state.overviewOpen && !overview.open) overview.showModal();
  if (!state.overviewOpen && overview.open) overview.close();
  renderScenario(state.scenario);
  renderTabGroup(state.science, "data-science", "#science-detail", sciences);
  renderTabGroup(state.lens, "data-lens", "#lens-detail", lenses);
  renderTechnology(state.tech);
  renderTabGroup(state.challenge, "data-challenge", "#challenge-detail", challenges);
  history.replaceState(null, "", `#${String(state.index + 1).padStart(2, "0")}`);
  previousIndex = state.index;
}

function bindControls() {
  document.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      const action = actionButton.dataset.action;
      if (action === "next") store.dispatch({ type: "NEXT" });
      if (action === "prev") store.dispatch({ type: "PREV" });
      if (action === "overview") store.dispatch({ type: "OPEN_OVERVIEW" });
      if (action === "close-overview") store.dispatch({ type: "CLOSE_OVERVIEW" });
      if (action === "fullscreen") toggleFullscreen();
    }
    const go = event.target.closest("[data-go]");
    if (go) store.dispatch({ type: "GO", index: Number(go.dataset.go) });
    const scenario = event.target.closest("[data-scenario]");
    if (scenario) store.dispatch({ type: "SELECT_SCENARIO", value: scenario.dataset.scenario });
    const science = event.target.closest("[data-science]");
    if (science) store.dispatch({ type: "SELECT_SCIENCE", value: science.dataset.science });
    const lens = event.target.closest("[data-lens]");
    if (lens) store.dispatch({ type: "SELECT_LENS", value: lens.dataset.lens });
    const tech = event.target.closest("[data-tech]");
    if (tech) store.dispatch({ type: "SELECT_TECH", value: tech.dataset.tech });
    const challenge = event.target.closest("[data-challenge]");
    if (challenge) store.dispatch({ type: "SELECT_CHALLENGE", value: challenge.dataset.challenge });
  });

  overview.addEventListener("close", () => {
    if (store.getState().overviewOpen) store.dispatch({ type: "CLOSE_OVERVIEW" });
  });
  overview.addEventListener("click", (event) => {
    if (event.target === overview) store.dispatch({ type: "CLOSE_OVERVIEW" });
  });
  document.addEventListener("fullscreenchange", renderFullscreenControl);
  document.addEventListener("webkitfullscreenchange", renderFullscreenControl);
}

function enableDebug() {
  if (!new URLSearchParams(location.search).has("debug")) return;
  const panel = document.querySelector("#debug-panel");
  panel.hidden = false;
  let frames = 0;
  let last = performance.now();
  let fps = 0;
  const tick = (now) => {
    frames += 1;
    if (now - last >= 500) {
      fps = Math.round(frames * 1000 / (now - last));
      frames = 0;
      last = now;
      const state = store.getState();
      panel.value = `slide ${state.index + 1}/${scenes.length} · ${innerWidth}×${innerHeight} · ${fps} fps`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

createChrome();
bindControls();
bindPresentationInputs(store);
store.subscribe(render);
window.lucide?.createIcons({ attrs: { "stroke-width": 1.8 } });
renderFullscreenControl();
enableDebug();
