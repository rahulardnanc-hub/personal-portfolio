// src/components/Hero.tsx
import { useCallback } from "react";
// Add this line below your existing imports
import type { Engine, ISourceOptions } from "tsparticles-engine"; 
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Replace your entire particlesOptions object with this one.

const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent", // Explicitly setting the background to transparent
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#059669",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* The Particle Animation Component */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      
      {/* The Text Content */}
      <div className="relative z-10 text-center text-white container mx-auto px-4">
        <img 
          src="/Profile.png"
          alt="Rahul Chandra" 
          className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-emerald-500 shadow-lg 
                     transition-transform duration-300 hover:scale-105 hover:shadow-xl" 
        />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-display">
          Build Modern Web Experiences
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Hi, I'm Rahul. A Passionate Frontend Developer.
        </p>
        <a 
          href="#projects" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}