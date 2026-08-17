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

let current = 0;
let wheelLock = false;
let touchStartY = null;
let touchStartX = null;
const quizScores = { industrial: 0, informatica: 0 };

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
  quizScores[score] += 1;
  button.classList.add("is-selected");
  button.setAttribute("aria-pressed", "true");
  button.disabled = true;
  const winner =
    quizScores.industrial === quizScores.informatica
      ? "Hay empate: te atrae tanto mejorar sistemas como crear tecnología."
      : quizScores.industrial > quizScores.informatica
        ? "Tu selección se inclina hacia Civil Industrial: sistemas, procesos, decisiones y coordinación."
        : "Tu selección se inclina hacia Civil Informática: software, IA, datos y tecnología funcionando.";
  quizResult.textContent = `${winner} Puedes volver a elegir otras opciones para comparar tu tendencia.`;
  restartPanelAnimation(quizResult);
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  const jump = event.target.closest("[data-jump]");
  const toggle = event.target.closest("[data-career]");
  const skill = event.target.closest("[data-skill]");
  const quiz = event.target.closest("[data-score]");

  if (action) {
    const kind = action.dataset.action;
    if (kind === "next") next();
    if (kind === "prev") prev();
    if (kind === "jump") goTo(Number(action.dataset.target));
    if (kind === "overview") overview.showModal();
    if (kind === "close-overview") overview.close();
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
});

document.addEventListener("keydown", (event) => {
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
    if (overview.open || Math.abs(event.deltaY) < 20 || wheelLock) return;
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
document.querySelectorAll("[data-score]").forEach((item) => item.setAttribute("aria-pressed", "false"));
renderCareer("industrial");
renderSkill("analizar");
updateChrome();
startSignalCanvas();
