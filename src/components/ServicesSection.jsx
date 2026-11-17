import { Cloud, Zap, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "Full-Stack Web Development",
      description:
        "Building web applications with frontend and backend technologies to meet practical user needs.",
      highlights: [
        "Frontend interfaces",
        "Backend features and APIs",
        "Database integration",
      ],
      badge: "Flagship Expertise",
    },
    {
      icon: Zap,
      title: "Interactive & Animated Web Apps",
      description:
        "Applying careful testing and debugging habits to find and fix issues in web applications.",
      highlights: [
        "Feature testing",
        "Debugging and error handling",
        "Thoughtful user-focused solutions",
      ],
      badge: "Creative Engineering",
    },
    {
      icon: ShieldCheck,
      title: "Full-Stack API & System Architecture",
      description:
        "Designing relational databases and writing SQL queries to store, retrieve, and update application data.",
      highlights: [
        "Relational database design",
        "SQL queries",
        "MySQL integration",
      ],
      badge: "Core Engineering",
    },
    {
      icon: GraduationCap,
      title: "Technical Training & Mentorship",
      description:
        "Completed Programming Hero's online web development course and regularly practise programming challenges.",
      highlights: [
        "Programming Hero web development course",
        "Regular LeetCode practice",
        "BUP CTF-26 participant",
      ],
      badge: "Education",
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Solutions & Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Help You</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Web development, database design, and ongoing technical learning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-zinc-900/60 border border-white/10 p-8 hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {srv.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss a Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
