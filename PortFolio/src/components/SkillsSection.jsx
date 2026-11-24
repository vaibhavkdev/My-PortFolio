import { useState } from "react";
import { Layout, Server, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    category: "backend",
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      "C#",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      ".NET Technologies",
      "RESTful APIs",
      "Web Services",
      "SQL Server",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    category: "frontend",
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "Tailwind CSS",
    ],
  },
  {
    category: "tools",
    title: "Tools & Practices",
    icon: <Wrench className="h-6 w-6 text-primary" />,
    skills: [
      "Postman / Thunder Client",
      "Swagger",
      "Git",
      "Jira",
      "OOP Principles",
    ],
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = skillGroups.filter(
    (group) => activeCategory === "all" || group.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary"> Skills</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Category filter */}
        <div
          role="group"
          aria-label="Filter skills by category"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "px-5 py-2 rounded-full border text-sm font-medium capitalize transition-colors duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grouped skills */}
        <div
          className={cn(
            "grid grid-cols-1 gap-6",
            filteredGroups.length > 1 ? "lg:grid-cols-3" : "max-w-2xl mx-auto"
          )}
        >
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border/60 shadow-xs card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  {group.icon}
                </div>
                <h3 className="font-semibold text-xl">{group.title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
