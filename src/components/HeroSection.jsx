import { ArrowDown } from "lucide-react";
import profilePic from "../assets/profilePic.jpg";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const HeroSection = () => {
  useScrollReveal();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Profile Pic */}
      <div className="mb-6" data-reveal data-delay="0">
        <img
          src={profilePic}
          alt="Edilberto Galang"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center gap-2">
        <span data-reveal data-delay="100">Hi, I'm</span>
        <span data-reveal data-delay="200" className="text-primary">
          Edilberto
        </span>
        <span data-reveal data-delay="300" className="text-gradient">
          Galang
        </span>
      </h1>

      {/* Description */}
      <p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center mt-4"
        data-reveal
        data-delay="400"
      >
        Fresh graduate in Bachelor of Science Information Systems with a
        strong interest in web development. Beginning to explore front-end
        technologies and currently learning React. Passionate about exploring
        new technologies and building hands-on projects in the IT field.
      </p>

      {/* Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
        data-reveal
        data-delay="500"
      >
        <a href="#contact" className="cosmic-button">
          Get In Touch
        </a>
        <a
          href=""
          className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
        data-reveal
        data-delay="600"
      >
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
