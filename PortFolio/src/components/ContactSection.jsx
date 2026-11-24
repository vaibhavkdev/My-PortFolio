import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    label: "Email",
    value: "vaibhavkumar75offical@gmail.com",
    href: "mailto:vaibhavkumar75offical@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    label: "Phone",
    value: "+(91) 7518506616",
    href: "tel:+917518506616",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-input bg-background placeholder:text-muted-foreground/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

export const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showError = (title, description) =>
    toast({ title, description, variant: "destructive" });

  const validate = () => {
    const data = new FormData(form.current);
    const name = (data.get("user_name") || "").trim();
    const email = (data.get("user_email") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!name) {
      showError("Name is required", "Please enter your full name.");
      form.current.user_name.focus();
      return false;
    }
    if (!email) {
      showError("Email is required", "Please enter your email address.");
      form.current.user_email.focus();
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(
        "Invalid email",
        "Please enter a valid email address, like name@example.com.",
      );
      form.current.user_email.focus();
      return false;
    }
    if (message.length < 10) {
      showError(
        "Message is too short",
        "Please write at least 10 characters so I know how to help.",
      );
      form.current.message.focus();
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!navigator.onLine) {
      showError(
        "No internet connection",
        "Please check your connection and try again.",
      );
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ycnfvge",
        "template_krtpicb",
        form.current,
        "whBhfdVzJW7pILw1o",
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showError(
          "Failed to send",
          error?.status === 429
            ? "Too many requests right now. Please try again in a few minutes."
            : "There was an error sending your message. Please try again.",
        );
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary"> Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60"
                >
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium">{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <a
                href="https://www.linkedin.com/in/vaibhav-kumar-75abc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-border/60 shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              ref={form}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Your Full Name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="hello@gmail.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  className={cn(inputClass, "resize-none min-h-[160px]")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
