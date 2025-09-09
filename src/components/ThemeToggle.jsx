import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // 👈 default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    document.documentElement.classList.add("theme-transition");
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="fixed max-sm:hidden top-7 right-7 z-50 p-2 rounded-full transition-colors duration-300 bg-background/20 hover:bg-background/40 shadow-md cursor-pointer"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-orange-400" />
        )}
      </button>

      {/* Tooltip */}
      <span className="fixed top-16 right-7 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-lg pointer-events-none">
        Toggle Theme
      </span>
    </div>
  );
};
