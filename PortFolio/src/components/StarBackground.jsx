import { useCallback, useEffect, useState } from "react";

// star:   id, size, x, y, opacity, animationDuration
// meteor: id, size, x, y, delay, animationDuration

const MAX_STARS = 150;
const NUMBER_OF_METEORS = 4;

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [reduceMotion, setReduceMotion] = useState(false);

  const generateStars = useCallback(() => {
    const numberOfStars = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 10000),
      MAX_STARS,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  }, []);

  const generateMeteors = useCallback(() => {
    const newMeteors = [];

    for (let i = 0; i < NUMBER_OF_METEORS; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  }, []);

  useEffect(() => {
    // Respect the visitor's "reduce motion" system setting
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);
    const handleMotionChange = (e) => setReduceMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    generateStars();
    generateMeteors();

    // Regenerate stars only after resizing has stopped
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(generateStars, 250);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [generateStars, generateMeteors]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={reduceMotion ? "star" : "star animate-pulse-subtle"}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {!reduceMotion &&
        meteors.map((meteor) => (
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
