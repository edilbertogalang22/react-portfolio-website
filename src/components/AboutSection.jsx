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
              <span className="font-serif italic font-normal text-primary">
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
                Fresh graduate in Information Systems with a strong interest in
                web development. Beginning to explore front-end technologies and
                currently learning React. Passionate about exploring new
                technologies and building hands-on projects in the IT field.
              </p>
              <p>
                “I used React with Vite and Tailwind for the frontend, Node.js
                and Express for the backend, MySQL as the database, and
                implemented authentication using JWT, CORS middleware for
                cross-origin requests, Multer for file uploads, and Express
                Router for modular API structure.”
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Quote Card */}
            <div
              className="glass rounded-2xl p-6 glow-border"
              data-reveal
              data-delay="400"
            >
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
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
