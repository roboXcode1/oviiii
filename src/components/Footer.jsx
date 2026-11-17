import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { GithubIcon } from "./Icons";

const currentYear = new Date().getFullYear();

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Introduction", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const focusAreas = ["Frontend & backend development", "JavaScript & PHP", "Next.js & Node.js", "MySQL & relational databases"];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[min(80vw,800px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Have a project in mind?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
              I&apos;m open to connecting about web development projects, collaboration, and learning opportunities.
            </p>
          </div>
          <a
            href="mailto:ovichowdhuryflixy@gmail.com"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Contact Ovi <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_1fr_1.2fr] lg:gap-8">
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 text-base font-extrabold text-black">
                OC
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Ovi Chowdhury
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Web developer working across frontend and backend technologies, and a Computer Science &amp; Engineering undergraduate at AIUB.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://github.com/roboXcode1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href="mailto:ovichowdhuryflixy@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">Explore</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-cyan-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-white">
              <Code2 className="h-4 w-4 text-cyan-300" /> Areas of Focus
            </h3>
            <ul className="space-y-2.5">
              {focusAreas.map((item) => (
                <li key={item} className="text-sm text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-zinc-500">
              Also practising problem solving on LeetCode and CTF challenges.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">Education &amp; Contact</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <p>
                  B.Sc. in CSE, AIUB
                  <span className="mt-0.5 block text-xs text-zinc-500">Expected 2027 · CGPA 3.50</span>
                </p>
              </div>
              <a href="mailto:ovichowdhuryflixy@gmail.com" className="flex items-center gap-2.5 transition hover:text-cyan-300">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <span className="break-all">ovichowdhuryflixy@gmail.com</span>
              </a>
              <a href="tel:+8801308718861" className="flex items-center gap-2.5 transition hover:text-cyan-300">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>01308718861</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>Bashundhara Residential Area, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <div className="text-xs leading-5 text-zinc-500">
            <p>© {currentYear} Ovi Chowdhury. All rights reserved.</p>
            <p className="mt-1">Bangla · Native</p>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
            title="Back to top"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
