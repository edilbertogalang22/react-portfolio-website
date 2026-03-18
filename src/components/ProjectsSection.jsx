import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Simple Crud",
    description: "A simple CRUD Admin Dashboard ",
    images: [
      "/projects/project1/AddingUserModal.jpg",
      "/projects/project1/ViewUserModal.jpg",
      "/projects/project1/UpdateUserModal.jpg",
      "/projects/project1/DeleteUserModal.jpg",
      "/projects/project1/LandingPage.jpg",
      "/projects/project1/AdminDashboard.jpg",
    ],
    tags: ["React JS", "TailwindCSS", "Node JS", "Express", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  // State to track the selected project
  const [selectedProject, setSelectedProject] = useState(null);
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to track image zoom
  const [isZoomed, setIsZoomed] = useState(false);

  // Function to handle image zoom
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  // Function to handle image zoom
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              {/* PREVIEW IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a href={project.demoUrl} target="_blank">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL GALLERY */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => {
              setSelectedProject(null);
              setIsZoomed(false);
            }}
          >
            <div
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                className="absolute  right-4 z-50 bg-black/60 hover:bg-black text-white text-2xl px-3 py-1 rounded"
                onClick={() => {
                  setSelectedProject(null);
                  setIsZoomed(false);
                }}
              >
                ✕
              </button>

              {/* MAIN IMAGE */}
              <img
                src={selectedProject.images[currentImageIndex]}
                alt="project"
                onClick={() => setIsZoomed(!isZoomed)}
                className={`w-full rounded-lg cursor-zoom-in transition duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
              />

              {/* THUMBNAILS */}
              <div className="flex gap-2 mt-4 justify-center flex-wrap">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 object-cover rounded cursor-pointer border ${
                      currentImageIndex === index
                        ? "border-white"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>

              {/* LEFT BUTTON */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
              >
                ◀
              </button>

              {/* RIGHT BUTTON */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
              >
                ▶
              </button>

              {/* COUNTER */}
              <div className="text-center text-white mt-2">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
          </div>
        )}

        {/* GITHUB BUTTON */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/edilbertogalang22"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
