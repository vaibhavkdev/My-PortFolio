import { Briefcase, Code, User, Download, ArrowRight } from "lucide-react";

const techStack = [
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "C#",
  "ASP.NET Core Web API",
  "SQL Server",
  "Entity Framework Core",
  "Git",
  "Postman",
  "Jira",
];

const highlights = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Web Development",
    description:
      "Creating responsive websites and web applications with modern frameworks & libraries.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Backend & APIs",
    description:
      "Building clean, scalable RESTful APIs with ASP.NET Core, Entity Framework Core and SQL Server.",
  },
  {
    icon: <User className="h-6 w-6 text-primary" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless user experiences.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary"> Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: story */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate Full Stack .NET Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a dedicated and enthusiastic Full Stack Developer skilled in
              C#, ASP.NET Core Web API, SQL Server, and modern frontend
              libraries and frameworks such as React.js and TypeScript. I also
              build with the MERN stack. I specialize in building responsive and
              connected web applications with clean architecture and RESTful
              APIs.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I've completed multiple academic and personal projects using
              technologies like Entity Framework Core, Thunder Client/Postman,
              and Tailwind CSS. I enjoy solving real-world problems and take
              pride in writing clean, maintainable, and efficient code while
              collaborating with teams using Git.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I’m actively seeking a full-time role where I can contribute,
              learn from experienced developers, and grow in a team that values
              innovation, quality, and continuous improvement.
            </p>

            {/* Tech stack chips */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-3">Tech I work with</h4>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="cosmic-button inline-flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/Vaibhav_Kumar_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right: highlights */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-5">
            {highlights.map(({ icon, title, description }) => (
              <div key={title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    {icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
