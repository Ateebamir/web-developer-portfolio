import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // 👈 default dark

  useEffect(() => {
    // 👇 Har reload pe force dark hi karna
    setIsDarkMode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");

    // 👇 smooth transition apply on mount
    document.documentElement.classList.add("theme-transition");
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");

    if (isDarkMode) {
      // Light mode enable karo (reload pe wapas dark ho jayega)
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Dark mode enable + force save dark
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark"); // hamesha dark hi save hoga
    }

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-7 right-7 z-50 p-2 rounded-full cursor-pointer transition-colors duration-300 bg-background/20 hover:bg-background/40 shadow-md"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-orange-400" />
      )}
    </button>
  );
};
