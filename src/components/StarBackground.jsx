import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    generateStars();

    if (document.documentElement.classList.contains("dark")) {
      generateMeteors(true); // 👈 first load = sab ek sath bina delay
    }

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    setMounted(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mounted && document.documentElement.classList.contains("dark")) {
      generateMeteors(false); // 👈 baad me normal behaviour
    }
  }, [mounted]);

  // ⭐ Stars generate (pure random)
  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleDuration: Math.random() * 3 + 2,
        twinkleDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  };

  // ☄️ Meteors generate (3–5 with natural spacing)
  const generateMeteors = (firstRun = false) => {
    const numberOfMeteors = Math.floor(Math.random() * 3) + 3; // 3–5 meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: Date.now() + i,
        size: Math.random() * 1 + 0.5,
        x: (i * (100 / numberOfMeteors)) + Math.random() * 10, // evenly spread with slight randomness
        y: Math.random() * 70 + 10, // avoid top/bottom crowding
        delay: firstRun ? 0 : Math.random() * 2, // first run = sab ek sath
        animationDuration: Math.random() * 2 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animation: `twinkle ${star.twinkleDuration}s infinite`,
            animationDelay: star.twinkleDelay + "s",
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
