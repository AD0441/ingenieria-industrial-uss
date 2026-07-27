const STORAGE_KEY = "uss-engineering-xxi-presentation-v1";

function loadIndex(total) {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return Number.isInteger(parsed.index) ? Math.min(total - 1, Math.max(0, parsed.index)) : 0;
  } catch {
    return 0;
  }
}

export function createPresentationStore(total) {
  let state = {
    index: loadIndex(total),
    overviewOpen: false,
    scenario: "agua",
    science: "calculus",
    lens: "operations",
    tech: "ai",
    challenge: "climate",
  };
  const listeners = new Set();

  const persist = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ index: state.index }));
    } catch {
      // The presentation remains fully usable when storage is unavailable.
    }
  };

  const emit = () => listeners.forEach((listener) => listener(state));

  return {
    getState: () => state,
    subscribe(listener) {
      listeners.add(listener);
      listener(state);
      return () => listeners.delete(listener);
    },
    dispatch(action) {
      const previousIndex = state.index;
      switch (action.type) {
        case "NEXT": state = { ...state, index: Math.min(total - 1, state.index + 1) }; break;
        case "PREV": state = { ...state, index: Math.max(0, state.index - 1) }; break;
        case "FIRST": state = { ...state, index: 0 }; break;
        case "LAST": state = { ...state, index: total - 1 }; break;
        case "GO": state = { ...state, index: Math.min(total - 1, Math.max(0, action.index)), overviewOpen: false }; break;
        case "OPEN_OVERVIEW": state = { ...state, overviewOpen: true }; break;
        case "CLOSE_OVERVIEW": state = { ...state, overviewOpen: false }; break;
        case "SELECT_SCENARIO": state = { ...state, scenario: action.value }; break;
        case "SELECT_SCIENCE": state = { ...state, science: action.value }; break;
        case "SELECT_LENS": state = { ...state, lens: action.value }; break;
        case "SELECT_TECH": state = { ...state, tech: action.value }; break;
        case "SELECT_CHALLENGE": state = { ...state, challenge: action.value }; break;
        default: return;
      }
      if (state.index !== previousIndex) persist();
      emit();
    },
  };
}
