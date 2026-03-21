import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const AboutSection = () => {
  useScrollReveal();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-reveal
          data-delay="100"
        >
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
              data-reveal
              data-delay="200"
            >
              Building the future,
              <span className="font-normal text-primary">
                {" "}
                one component at a time.
              </span>
            </h2>

            {/* Paragraphs */}
            <div
              className="space-y-4 text-muted-foreground"
              data-reveal
              data-delay="300"
            >
              <p>
                I'm a recent graduate in Information Systems, currently diving
                deep into web development. I'm actively learning React, Node.js,
                and related technologies to build practical, hands-on projects
                that solve real-world problems.
              </p>
              <p>
                My focus is on creating clean, maintainable code and learning
                best practices for both frontend and backend development. I'm
                exploring React with Vite and Tailwind for responsive
                interfaces, Node.js with Express for server-side logic, and
                MySQL for data management.
              </p>
              <p>
                Outside coding, I enjoy discovering new technologies,
                experimenting with projects, playing video games, watching
                movies, and listening to music. I believe in continuous learning
                and collaboration to grow as a developer and contribute to
                impactful projects.
              </p>
            </div>

            {/* Quote Card */}
            <div
              className="glass rounded-2xl p-6 glow-border"
              data-reveal
              data-delay="400"
            >
              <p className="text-lg font-medium text-foreground">
                "My mission is to create user-friendly and visually appealing
                websites that deliver exceptional user experiences. I believe in
                the power of collaboration and continuous learning to drive
                innovation and excellence in web development."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl"
                data-reveal
                data-delay={500 + idx * 100} // stagger each card dynamically
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
