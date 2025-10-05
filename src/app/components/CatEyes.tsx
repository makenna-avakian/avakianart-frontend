"use client";

import { useEffect, useState } from "react";

export default function CatEyes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [fingers, setFingers] = useState(Array(6).fill(false));
  const [isAngry, setIsAngry] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isAngry) {
        setMouse({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isAngry]);

  const getPupilStyle = (eyeX: number, eyeY: number) => {
    if (isAngry) {
      // Look straight (centered pupils)
      return { transform: `translate(0px, 0px)` };
    }

    const dx = mouse.x - eyeX;
    const dy = mouse.y - eyeY;
    const angle = Math.atan2(dy, dx);

    const radius = 15;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    return { transform: `translate(${offsetX}px, ${offsetY}px)` };
  };

  const handleFingerClick = (index: number) => {
    setFingers((prev) => {
      const updated = prev.map((f, i) => (i === index ? !f : f));

      if (updated.every((f) => f)) {
        setIsAngry(true);
        setTimeout(() => setIsFalling(true), 1000);
      }

      return updated;
    });
  };

  return (
    <div
      className={`absolute bottom-0 w-full h-[15vh] bg-white flex items-center justify-center gap-12 transition-transform duration-1000 ${
        isFalling ? "translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Left Fingers */}
      <div className="flex gap-2 absolute left-40 bottom-0 items-end">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleFingerClick(i)}
            className={`w-6 ${
              fingers[i] ? "h-14" : "h-6"
            } bg-white outline outline-4 outline-black rounded-t-full cursor-pointer transition-all duration-300`}
          />
        ))}
      </div>

      {/* Left Eye */}
      <div className="relative w-32 h-20 flex items-center justify-center overflow-visible">
        {/* Eye shape */}
        <div className="absolute w-full h-full rounded-full border-4 border-black rounded-[50%/70%]"></div>

        {/* Eyebrow */}
        {isAngry && (
          <div className="absolute -top-4 left-15 w-16 h-1 bg-black rotate-12 rounded-full"></div>
        )}

        {/* Pupil */}
        <div
          className="absolute w-8 h-8 bg-black rounded-full transition-transform duration-75"
          style={getPupilStyle(window.innerWidth / 2 - 100, window.innerHeight - 50)}
        ></div>
      </div>

      {/* Right Eye */}
      <div className="relative w-32 h-20 flex items-center justify-center overflow-visible">
        {/* Eye shape */}
        <div className="absolute w-full h-full rounded-full border-4 border-black rounded-[50%/70%]"></div>

        {/* Eyebrow */}
        {isAngry && (
          <div className="absolute -top-4 right-15 w-16 h-1 bg-black -rotate-12 rounded-full"></div>
        )}

        {/* Pupil */}
        <div
          className="absolute w-8 h-8 bg-black rounded-full transition-transform duration-75"
          style={getPupilStyle(window.innerWidth / 2 + 100, window.innerHeight - 50)}
        ></div>
      </div>

      {/* Right Fingers */}
      <div className="flex gap-2 absolute right-40 bottom-0 items-end">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i + 3}
            onClick={() => handleFingerClick(i + 3)}
            className={`w-6 ${
              fingers[i + 3] ? "h-14" : "h-6"
            } bg-white outline outline-4 outline-black rounded-t-full cursor-pointer transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
