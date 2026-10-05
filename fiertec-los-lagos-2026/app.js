(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const slides = $$(".slide");
  const total = slides.length;
  let current = 0;
  let lastInsightTrigger = null;

  const ui = {
    deck: $(".deck"),
    prev: $("#prev"),
    next: $("#next"),
    number: $("#slide-number"),
    title: $("#slide-title"),
    rail: $("#progress-rail"),
    overview: $("#overview"),
    overviewGrid: $("#overview-grid"),
    speaker: $("#speaker-panel"),
    speakerTitle: $("#speaker-title"),
    speakerTime: $("#speaker-time"),
    speakerNote: $("#speaker-note"),
    insightLayer: $("#insight-layer"),
    insightCard: $("#insight-card"),
    insightIcon: $("#insight-icon"),
    insightLabel: $("#insight-label"),
    insightTitle: $("#insight-title"),
    insightBody: $("#insight-body")
  };

  const focusableSelector = "button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex='-1'])";

  // Inline narrative states are independent of the secondary insight dialog.
  function renderRevealState(slide) {
    const step = Number(slide.dataset.revealStep || 0);
    $$('[data-reveal-from], [data-reveal-to]', slide).forEach((element) => {
      const from = Number(element.dataset.revealFrom || 0);
      const to = element.dataset.revealTo === undefined ? Infinity : Number(element.dataset.revealTo);
      const visible = step >= from && step < to;
      element.hidden = !visible;
      element.classList.toggle('is-revealed', visible && step > 0);
    });
  }

  function resetRevealState(slide) {
    slide.dataset.revealStep = '0';
    slide.classList.remove('is-keyboard-reveal');
    $$('[data-reveal-group] [data-reveal-choice]', slide).forEach((button) => {
      button.classList.remove('is-selected');
      button.setAttribute('aria-pressed', 'false');
    });
    $$('[data-reveal-for]', slide).forEach((element) => { element.hidden = true; });
    renderRevealState(slide);
  }

  slides.forEach(resetRevealState);

  $$('[data-insight]').forEach((trigger) => trigger.setAttribute("aria-haspopup", "dialog"));
  ui.speaker.setAttribute("aria-hidden", "true");
  ui.speaker.inert = true;

  slides.forEach((_, index) => {
    const marker = document.createElement("i");
    marker.dataset.index = index;
    ui.rail.append(marker);
  });

  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<b>${String(index + 1).padStart(2, "0")}</b><span>${slide.dataset.title}</span><small>${slide.dataset.time}</small>`;
    button.addEventListener("click", () => {
      goTo(index);
      ui.overview.close();
    });
    ui.overviewGrid.append(button);
  });

  function updateUI() {
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === current));
    const active = slides[current];
    $("#app").classList.toggle("is-story", current > 0 && current < total - 1);
    ui.number.textContent = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    ui.title.textContent = active.dataset.title;
    ui.prev.disabled = current === 0;
    ui.next.disabled = current === total - 1;
    $$("#progress-rail i").forEach((marker, index) => {
      marker.classList.toggle("is-past", index < current);
      marker.classList.toggle("is-current", index === current);
    });
    $$("#overview-grid button").forEach((button, index) => {
      const isCurrent = index === current;
      button.classList.toggle("is-current", isCurrent);
      if (isCurrent) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    ui.speakerTitle.textContent = active.dataset.title;
    ui.speakerTime.textContent = active.dataset.time;
    ui.speakerNote.textContent = active.dataset.note;
    document.title = `${active.dataset.title} · FIERTEC Los Lagos 2026`;
  }

  function closeInsight({ restoreFocus = true } = {}) {
    if (ui.insightLayer.hidden) return;
    ui.insightLayer.hidden = true;
    if (restoreFocus) lastInsightTrigger?.focus();
  }

  function goTo(index, { animate = true } = {}) {
    const nextIndex = Math.max(0, Math.min(total - 1, index));
    if (nextIndex === current) return;
    closeInsight({ restoreFocus: false });
    resetRevealState(slides[current]);
    slides.forEach((slide) => slide.classList.remove("is-instant-entry"));
    if (!animate) slides[nextIndex].classList.add("is-instant-entry");
    current = nextIndex;
    updateUI();
  }

  function openInsight(trigger, data = trigger.dataset) {
    lastInsightTrigger = trigger;
    ui.insightIcon.src = data.insightIcon || "assets/icons/idea-promising.png";
    ui.insightLabel.textContent = data.insightLabel || "PARA CONVERSAR";
    ui.insightTitle.textContent = data.insightTitle || "Una idea para mirar de cerca";
    ui.insightBody.textContent = data.insight || "";
    ui.insightCard.dataset.tone = data.insightTone || "teal";
    ui.insightLayer.hidden = false;
    $("#insight-continue").focus();
  }

  function markSelection(trigger) {
    const group = trigger.closest(".choice-list, .stage-rail, .idea-states, .recap-rail, .value-stairs, .need-ladder, .talk-prompts, .case-steps");
    if (!group) return;
    $$("button", group).forEach((button) => {
      const selected = button === trigger;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  document.addEventListener("click", (event) => {
    const revealButton = event.target.closest('button[data-reveal-next]');
    if (revealButton) {
      const slide = revealButton.closest('.slide');
      slide.classList.toggle('is-keyboard-reveal', event.detail === 0);
      slide.dataset.revealStep = String(Number(slide.dataset.revealStep || 0) + 1);
      renderRevealState(slide);
      const nextButton = slide.querySelector('button[data-reveal-next]:not([hidden])');
      if (nextButton) nextButton.focus({ preventScroll: true });
      else {
        slide.setAttribute('tabindex', '-1');
        slide.focus({ preventScroll: true });
      }
      return;
    }

    const choice = event.target.closest('button[data-reveal-choice]');
    if (choice) {
      const slide = choice.closest('.slide');
      slide.classList.toggle('is-keyboard-reveal', event.detail === 0);
      const group = choice.closest('[data-reveal-group]');
      $$('button[data-reveal-choice]', group).forEach((button) => {
        const selected = button === choice;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      $$('[data-reveal-for]', slide).forEach((element) => {
        element.hidden = element.dataset.revealFor !== choice.dataset.revealChoice;
      });
      slide.dataset.revealStep = '1';
      renderRevealState(slide);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action?.dataset.action === "next") goTo(current + 1);

    const insightTrigger = event.target.closest("[data-insight]");
    if (insightTrigger) {
      markSelection(insightTrigger);
      openInsight(insightTrigger);
    }
  });

  ui.prev.addEventListener("click", () => goTo(current - 1));
  ui.next.addEventListener("click", () => goTo(current + 1));

  function showOverview({ animate = true } = {}) {
    ui.overview.classList.toggle("is-instant", !animate);
    ui.overview.showModal();
  }

  $("#overview-toggle").addEventListener("click", () => showOverview());
  $("#overview-close").addEventListener("click", () => ui.overview.close());

  function toggleNotes(force, { animate = true } = {}) {
    const open = typeof force === "boolean" ? force : !ui.speaker.classList.contains("is-open");
    ui.speaker.classList.toggle("is-instant", !animate);
    ui.speaker.classList.toggle("is-open", open);
    ui.speaker.setAttribute("aria-hidden", String(!open));
    ui.speaker.inert = !open;
    $("#notes-toggle").setAttribute("aria-expanded", String(open));
  }

  $("#notes-toggle").addEventListener("click", () => toggleNotes());
  $("#speaker-close").addEventListener("click", () => toggleNotes(false));

  async function toggleFullscreen() {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  }

  $("#fullscreen").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    $("#fullscreen").setAttribute(
      "aria-label",
      document.fullscreenElement ? "Salir de pantalla completa" : "Entrar en pantalla completa"
    );
  });
  $("#insight-close").addEventListener("click", () => closeInsight());
  $("#insight-continue").addEventListener("click", () => closeInsight());
  $("#insight-scrim").addEventListener("click", () => closeInsight());

  $("#restart").addEventListener("click", () => goTo(0));

  function trapFocus(event, container) {
    const focusable = $$(focusableSelector, container).filter((element) => !element.hidden);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && !ui.insightLayer.hidden) {
      trapFocus(event, ui.insightCard);
      return;
    }
    const tag = document.activeElement?.tagName;
    const isTextEntry = ["INPUT", "SELECT", "TEXTAREA"].includes(tag);

    if (event.key === "Escape") {
      if (!ui.insightLayer.hidden) {
        closeInsight();
        return;
      }
      toggleNotes(false, { animate: false });
      return;
    }

    if (isTextEntry || (tag === "BUTTON" && ["Enter", " "].includes(event.key))) return;

    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      goTo(current + 1, { animate: false });
    } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goTo(current - 1, { animate: false });
    } else if (event.key.toLowerCase() === "o") {
      event.preventDefault();
      showOverview({ animate: false });
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      toggleFullscreen();
    } else if (event.key.toLowerCase() === "n") {
      event.preventDefault();
      toggleNotes(undefined, { animate: false });
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0, { animate: false });
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1, { animate: false });
    }
  });

  let touchStartX = null;
  document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 70) goTo(distance < 0 ? current + 1 : current - 1);
    touchStartX = null;
  }, { passive: true });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  updateUI();

  window.__presentationTest = {
    get current() { return current; },
    total,
    goTo,
    openInsight
  };
})();
