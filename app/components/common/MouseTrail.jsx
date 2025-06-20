'use client';
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const MouseTrail = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for trailing effect
  const trailX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] left-0 top-0 w-3 h-3 rounded-full bg-[#1e84b5]/60 backdrop-blur-[2px]"
      style={{
        x: trailX,
        y: trailY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{ type: "spring" }}
    />
  );
};

export default MouseTrail;