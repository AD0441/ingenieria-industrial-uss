const KEY_ACTIONS = new Map([
  ["ArrowRight", "NEXT"], ["ArrowDown", "NEXT"], ["PageDown", "NEXT"],
  ["ArrowLeft", "PREV"], ["ArrowUp", "PREV"], ["PageUp", "PREV"],
  ["Home", "FIRST"], ["End", "LAST"], ["o", "OPEN_OVERVIEW"], ["O", "OPEN_OVERVIEW"],
]);

function isInteractive(target) {
  return target instanceof Element && Boolean(target.closest("button, a, input, select, textarea, [role='tab']"));
}

function isTextEntry(target) {
  return target instanceof Element && Boolean(target.closest("input, select, textarea, [contenteditable='true']"));
}

export function bindPresentationInputs(store) {
  let wheelLocked = false;
  let touchStartY = 0;
  let touchStartX = 0;

  const navigate = (type) => {
    store.dispatch({ type });
    wheelLocked = true;
    window.setTimeout(() => { wheelLocked = false; }, 560);
  };

  window.addEventListener("keydown", (event) => {
    const state = store.getState();
    if (state.overviewOpen) {
      if (event.key === "Escape") store.dispatch({ type: "CLOSE_OVERVIEW" });
      return;
    }
    if (event.key === " " && !isInteractive(event.target)) {
      event.preventDefault();
      navigate(event.shiftKey ? "PREV" : "NEXT");
      return;
    }
    const action = KEY_ACTIONS.get(event.key);
    if (action && !isTextEntry(event.target)) {
      event.preventDefault();
      action === "OPEN_OVERVIEW" ? store.dispatch({ type: action }) : navigate(action);
    }
  });

  window.addEventListener("wheel", (event) => {
    if (store.getState().overviewOpen || wheelLocked || Math.abs(event.deltaY) < 24) return;
    const active = document.querySelector(".scene.is-active");
    if (active) {
      const maxScroll = active.scrollHeight - active.clientHeight;
      if (maxScroll > 2) {
        if (event.deltaY > 0 && active.scrollTop < maxScroll - 2) return;
        if (event.deltaY < 0 && active.scrollTop > 2) return;
      }
    }
    event.preventDefault();
    navigate(event.deltaY > 0 ? "NEXT" : "PREV");
  }, { passive: false });

  window.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStartY = touch.clientY;
    touchStartX = touch.clientX;
  }, { passive: true });

  window.addEventListener("touchend", (event) => {
    if (store.getState().overviewOpen) return;
    const touch = event.changedTouches[0];
    const dy = touch.clientY - touchStartY;
    const dx = touch.clientX - touchStartX;
    if (Math.abs(dy) < 54 || Math.abs(dy) < Math.abs(dx)) return;
    const active = document.querySelector(".scene.is-active");
    if (active) {
      const maxScroll = active.scrollHeight - active.clientHeight;
      if (dy < 0 && active.scrollTop < maxScroll - 2) return;
      if (dy > 0 && active.scrollTop > 2) return;
    }
    navigate(dy < 0 ? "NEXT" : "PREV");
  }, { passive: true });
}
