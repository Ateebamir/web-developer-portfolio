import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [mounted, setMounted] = useState(false); // 👈 mounted trick

  useEffect(() => {
    generateStars();

    // jab component mount ho to meteors check karo
    if (document.documentElement.classList.contains("dark")) {
      generateMeteors();
    }

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    // 👇 force re-render after mount so meteors always appear first time
    setMounted(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // agar mounted ho aur theme dark ho → meteors dobara generate karo
  useEffect(() => {
    if (mounted && document.documentElement.classList.contains("dark")) {
      generateMeteors();
    }
  }, [mounted]);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 2 + 1,
        animationDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: i * 0.5,
        animationDuration: Math.random() * 2 + 2,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
          }}
        />
      ))}

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
