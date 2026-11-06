"use strict";

// Resolve saved choices in the head, before the page is first painted.
(() => {
  const lightStyles = document.getElementById("light-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const storageKey = "rafay-portfolio-theme";
  let chosenTheme = null;
  let toggle = null;
  let activeTransition = null;
  let fadeTimeout;

  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") chosenTheme = savedTheme;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }

  function currentTheme() {
    if (lightStyles.media === "all") return "light";
    if (lightStyles.media === "not all") return "dark";
    return systemTheme.matches ? "light" : "dark";
  }

  function updateControls() {
    const theme = currentTheme();
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = theme === "light" ? "#f7f7f9" : "#09090b";
    });
    if (toggle) {
      toggle.querySelector("span").textContent = `View in ${theme === "light" ? "dark" : "light"} mode`;
    }
  }

  function applyChoice(theme) {
    lightStyles.media = theme === "light" ? "all" : "not all";
    updateControls();
  }

  function animateChoice(theme) {
    activeTransition?.skipTransition();
    if (reducedMotion.matches) {
      applyChoice(theme);
      return;
    }

    // Cross-fade the whole palette, including gradients and glass textures.
    if (typeof document.startViewTransition === "function") {
      const transition = document.startViewTransition(() => applyChoice(theme));
      activeTransition = transition;
      transition.ready.catch(() => {});
      transition.finished.catch(() => {}).finally(() => {
        if (activeTransition === transition) activeTransition = null;
      });
      return;
    }

    // Older browsers still fade individual colours without affecting layout.
    const root = document.documentElement;
    clearTimeout(fadeTimeout);
    root.classList.add("theme-changing");
    void document.body.offsetWidth;
    applyChoice(theme);
    fadeTimeout = setTimeout(() => root.classList.remove("theme-changing"), 500);
  }

  applyChoice(chosenTheme || currentTheme());

  systemTheme.addEventListener("change", (event) => {
    if (!chosenTheme) animateChoice(event.matches ? "light" : "dark");
  });

  document.addEventListener("DOMContentLoaded", () => {
    toggle = document.getElementById("theme-toggle");
    updateControls();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      chosenTheme = (chosenTheme || currentTheme()) === "light" ? "dark" : "light";
      animateChoice(chosenTheme);
      try {
        localStorage.setItem(storageKey, chosenTheme);
      } catch {
        // Keep the selected appearance for this visit without storage.
      }
    });
  });
})();
