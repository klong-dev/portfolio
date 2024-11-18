import { Github, Linkedin, Twitter, Mail, Heart, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Hoàng Kim Long</h2>
            <p className="text-sm text-muted-foreground text-center md:text-left">Software Developer focusing on backend development with NestJS. Passionate about learning web technologies and the JavaScript ecosystem.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <nav className="flex flex-col items-center md:items-start space-y-2">
              <Link to="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link to="/projects" className="text-sm hover:underline">
                Projects
              </Link>
              <Link to="/blog" className="text-sm hover:underline">
                Blog
              </Link>
              <Link to="/resume" className="text-sm hover:underline">
                Resume
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <div className="flex space-x-4">
              <Link to="https://github.com/klong-dev" target="_blank" rel="noreferrer" className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="size-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="https://www.facebook.com/hklong04/" target="_blank" rel="noreferrer" className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="size-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="www.linkedin.com/in/long8204" target="_blank" rel="noreferrer" className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="mailto:longhoang8204@gmail.com" className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="size-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">© {currentYear} Hoàng Kim Long. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="size-4 mx-1 text-red-500" /> in Viet Nam.
          </p>
          <p className="text-sm text-muted-foreground">
            <Link to="https://github.com/klong-dev/portfolio" className="hover:underline">
              View Source
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
