import { useState } from "react";
import { FolderGit2, ExternalLink, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "tour-guide",
      title: "Tour Guide System",
      category: "fullstack",
      categoryLabel: "Web Technologies Course Project",
      tagline: "Explore tour destinations with secure user accounts",
      description:
        "A web application for users to register, log in, and explore tour destinations, with authentication and a MySQL database for user and tour data.",
      features: [
        "User registration, login, and session handling",
        "Server-side API integration for application data",
        "MySQL storage for users and tour destinations",
        "Feature testing and debugging",
      ],
      tech: ["PHP", "JavaScript", "Next.js", "Node.js", "MySQL"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      id: "air-management",
      title: "Air Management System",
      category: "fullstack",
      categoryLabel: "Team Project · 4–5 members",
      tagline: "Collaborative flight and passenger information management",
      description:
        "A team-built system for managing flight and passenger information. Development tasks were shared and integrated into a complete project, which the team presented with its workflow.",
      features: [
        "Managed flight and passenger information",
        "Shared and integrated team development tasks",
        "Presented the project workflow",
      ],
      tech: ["Web Technologies", "Teamwork", "Presentation"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-teal-500/20 to-emerald-500/5",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "snake-game",
      title: "Snake Game",
      category: "game",
      categoryLabel: "C++ Game",
      tagline: "A classic snake game built with C++",
      description:
        "A C++ implementation of the classic Snake game, created as a programming project.",
      features: [
        "Control the snake as it moves around the game area",
        "Collect items and grow the snake",
        "Built with C++",
      ],
      tech: ["C++"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-amber-500/20 to-orange-500/5",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
    {
      id: "friend-contact",
      title: "Keenkeeper",
      category: "fullstack",
      categoryLabel: "Web Application",
      tagline: "A React and Next.js app for friend contact information",
      description:
        "A web application for organizing and managing friends' contact information, built with React and Next.js.",
      features: [
        "Organizes friends' contact information",
        "Built with React",
        "Uses Next.js for the web application",
      ],
      tech: ["React", "Next.js"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-fuchsia-500/20 to-purple-500/5",
      badgeColor: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
    },
    {
      id: "bank-management",
      title: "Bank Management System",
      category: "fullstack",
      categoryLabel: "Java Project",
      tagline: "Core banking operations with object-oriented design",
      description:
        "A Java application supporting account creation, deposits, withdrawals, and balance checks, organized with object-oriented programming principles.",
      features: [
        "Create customer accounts",
        "Deposit and withdraw funds",
        "Check account balances",
        "Reusable object-oriented code structure",
      ],
      tech: ["Java", "Object-Oriented Programming"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-blue-500/20 to-indigo-500/5",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    {
      id: "database-projects",
      title: "Database Projects",
      category: "fullstack",
      categoryLabel: "Database Design",
      tagline: "Relational schemas and SQL for practical data management",
      description:
        "Relational database projects focused on organizing data and working with SQL queries.",
      features: [
        "Designed tables and relationships",
        "Wrote SQL queries to store and retrieve data",
        "Updated relational data through queries",
      ],
      tech: ["MySQL", "Relational Database Design", "SQL"],
      github: "https://github.com/roboXcode1",
      demo: "https://github.com/roboXcode1",
      accent: "from-purple-500/20 to-pink-500/5",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Selected academic and web development projects by Ovi Chowdhury.
          </p>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full-Stack Web" },
              { id: "game", label: "C++ Game" },
              { id: "animation", label: "Creative & Animation" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-zinc-900/60 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-2xl"
            >
              {/* Card Header & Preview Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.accent} border-b border-white/5 relative`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="Project Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-200/80 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Capabilities:
                    </div>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Repository & Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
