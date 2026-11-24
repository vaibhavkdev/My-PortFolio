import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let storedTheme = null;
    try {
      storedTheme = localStorage.getItem("theme");
    } catch {
      // storage unavailable (e.g. private mode) - fall back to light theme
    }

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      try {
        localStorage.setItem("theme", "light");
      } catch {
        // ignore
      }
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDarkMode;

    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // ignore
    }
    setIsDarkMode(nextIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        // size: 44px touch target on every screen
        "fixed z-50 flex h-11 w-11 items-center justify-center rounded-full",
        // position: bottom-right on phones/tablets (clear of the navbar), top-right on large screens
        "right-5 bottom-[calc(1.25rem_+_env(safe-area-inset-bottom))]",
        "xl:bottom-auto xl:top-5",
        "bg-card/80 backdrop-blur-md border border-border shadow-xs",
        "hover:border-primary/50 hover:bg-secondary hover:scale-105 active:scale-95",
        "transition-all duration-300",
        "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
      )}
    </button>
  );
};
