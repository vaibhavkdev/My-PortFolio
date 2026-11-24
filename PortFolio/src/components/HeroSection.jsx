import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-28"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Vaibhav
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Kumar
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            I'm a passionate full-stack developer with a strong foundation in
            building modern, responsive, and secure web applications. Proficient
            in both frontend technologies like React and Tailwind CSS, and
            backend development using ASP.NET Core Web API with SQL Server, I
            enjoy creating clean, scalable, and user-friendly interfaces backed
            by robust server-side logic.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button inline-flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};
