import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Project1 from "../assets/projects/Project 1.png";
import Project2 from "../assets/projects/Project 2.png";

const projects = [
  {
    id: 1,
    title: "Student Feedback Portal",
    description:
      "Role-based full stack web application that enables students to submit feedback and allows faculty/admins to analyze responses via dashboards.",
    image: Project1,
    tags: [
      "React.js",
      "Tailwind CSS",
      "ASP.NET Core Web API",
      "SQL Server",
      "JWT Auth",
    ],
    codeLinks: [
      {
        label: "Frontend Code",
        url: "https://github.com/vaibhavkdev/StudentFeedbackPortal",
      },
      {
        label: "API Code",
        url: "https://github.com/vaibhavkdev/studentFeedbackPortalAPI",
      },
    ],
    demoUrl: "",
  },
  {
    id: 2,
    title: "InvestiFy – Stock Portfolio Manager",
    description:
      "Stock portfolio web application with authentication, role-based access, personalized stock portfolios, and real-time stock data insights.",
    image: Project2,
    tags: [
      "React + TypeScript",
      "Tailwind CSS",
      "ASP.NET Core Web API",
      "Entity Framework",
      "SQL Server",
      "JWT Auth",
    ],
    codeLinks: [
      { label: "Code", url: "https://github.com/vaibhavkdev/InvestiFy" },
    ],
    demoUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary"> Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/60 shadow-xs card-hover"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-border/60 flex flex-wrap items-center gap-3">
                  {project.codeLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${link.label} on GitHub`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary/10 transition-colors duration-300"
                    >
                      <Github size={16} />
                      {link.label}
                    </a>
                  ))}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vaibhavkdev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
