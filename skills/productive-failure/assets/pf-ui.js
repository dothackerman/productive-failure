(() => {
  "use strict";

  const status = document.querySelector("[data-pf-status]");
  let statusTimer;

  function announce(message) {
    if (!status) return;
    window.clearTimeout(statusTimer);
    status.textContent = message;
    statusTimer = window.setTimeout(() => {
      status.textContent = "";
    }, 3500);
  }

  function storageKey(field) {
    const page = document.body.dataset.pfCycle || window.location.pathname;
    return `pf:${page}:${field.dataset.pfKey || field.id}`;
  }

  function updateCount(field) {
    const output = document.querySelector(`[data-pf-count-for="${CSS.escape(field.id)}"]`);
    if (!output) return;
    const words = field.value.trim() ? field.value.trim().split(/\s+/u).length : 0;
    output.textContent = `${words} ${words === 1 ? "word" : "words"}`;
  }

  document.querySelectorAll("textarea[data-pf-key]").forEach((field) => {
    try {
      const saved = window.localStorage.getItem(storageKey(field));
      if (saved !== null && field.value === "") field.value = saved;
    } catch (_) {
      // Local storage can be unavailable; the learner can still use the page.
    }

    updateCount(field);
    field.addEventListener("input", () => {
      updateCount(field);
      try {
        window.localStorage.setItem(storageKey(field), field.value);
      } catch (_) {
        return;
      }
    });
  });

  document.querySelectorAll("[data-pf-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.querySelector(button.dataset.pfCopy);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.value || target.textContent || "");
        announce("Your attempt was copied.");
      } catch (_) {
        target.focus();
        if (typeof target.select === "function") target.select();
        announce("Select and copy your attempt manually.");
      }
    });
  });

  document.querySelectorAll("[data-pf-clear]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.pfClear);
      if (!target) return;
      target.value = "";
      target.dispatchEvent(new Event("input", { bubbles: true }));
      target.focus();
      announce("The local draft was cleared.");
    });
  });
})();
