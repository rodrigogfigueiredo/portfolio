"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setTheme(root.dataset.theme === "dark" ? "dark" : "light");
    update();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (window.localStorage.getItem("portfolio-theme")) return;
      root.dataset.theme = media.matches ? "dark" : "light";
      update();
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </>
        ) : (
          <path d="M20.2 15.8A8.6 8.6 0 0 1 8.2 3.8 8.7 8.7 0 1 0 20.2 15.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        )}
      </svg>
      <span className="theme-toggle__label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
