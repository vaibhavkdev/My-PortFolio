import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl sm:pr-14 xl:pr-0 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Crafted with 💻 by{" "}
          <span className="font-semibold text-primary">Vaibhav</span>
          <span className="hidden sm:inline"> — </span>
          <span className="block sm:inline">All rights reserved.</span>
        </p>

        <a
          href="#hero"
          aria-label="Back to top"
          title="Back to top"
          className="p-3 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
