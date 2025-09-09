import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Section detection
      let current = 0;
      navItems.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = index;
          }
        }
      });

      // Only update activeIndex if no click override
      if (clickedIndex === null) setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [clickedIndex]);

  const handleClick = (index) => {
    setClickedIndex(index);
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Reset click override when section changes on scroll
  useEffect(() => {
    const handleScrollReset = () => {
      if (clickedIndex !== null) {
        const section = document.querySelector(navItems[clickedIndex].href);
        if (section) {
          const top = section.offsetTop - 80;
          const bottom = top + section.offsetHeight;
          if (!(window.scrollY >= top && window.scrollY < bottom)) {
            setClickedIndex(null); // remove click override when section left
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollReset);
    return () => window.removeEventListener("scroll", handleScrollReset);
  }, [clickedIndex]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 backdrop-blur-sm scroll-smooth py-6",
        isScrolled ? "bg-background/70 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo / Ateeb-Malik */}
        <a
          href="#hero"
          className="text-3xl md:text-4xl font-extrabold flex items-center transition-all duration-300 neon-glow"
        >
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
            Web-Developer
          </span>
          <span className="ml-2 hidden md:inline text-foreground/80">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-14">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => handleClick(index)}
              className={cn(
                "relative font-medium transition-colors duration-300 text-foreground/80 hover:text-orange-500",
                activeIndex === index
                  ? "text-orange-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-orange-500 after:rounded"
                  : ""
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex ml-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-all duration-300 shadow-md cursor-pointer hover:scale-110"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
          ) : (
            <Moon className="h-6 w-6 text-orange-500" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 relative top-2"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed top-20 left-4 right-4 h-[60vh] bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center rounded-2xl transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-95"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-medium">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => handleClick(index)}
                className={cn(
                  "text-foreground/80 hover:text-orange-500",
                  activeIndex === index ? "text-orange-500 underline" : ""
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
