import { motion, useTransform } from "motion/react";
import { ArrowDown, Code2, Rocket } from "lucide-react";

export default function AboutContent({ progress }) {
  // First slide: Philosophy & Mission
  const headOpacity = useTransform(progress, [0, 0.12, 0.35], [0, 1, 0]);
  const headY = useTransform(progress, [0, 0.12, 0.35], [40, 0, -20]);

  // Second slide: Experience & Roles
  const textOpacity = useTransform(progress, [0.38, 0.52, 0.78], [0, 1, 0]);
  const textY = useTransform(progress, [0.38, 0.52, 0.78], [40, 0, -20]);

  // Final slide: Quick highlights & CTA
  const endOpacity = useTransform(progress, [0.82, 0.94], [0, 1]);
  const endY = useTransform(progress, [0.82, 0.94], [30, 0]);

  return (
    <>
      {/* Slide 1: Mission Headline */}
      <motion.div
        style={{ opacity: headOpacity, y: headY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-3">
          <Code2 className="w-3.5 h-3.5" />
          About Me
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          I build practical web solutions for real business needs.
        </h2>
        <p className="mt-4 text-base sm:text-xl text-zinc-300 font-light">
          I study Computer Science and Engineering at the American International University-Bangladesh and work across frontend and backend development.
        </p>
      </motion.div>

      {/* Slide 2: Engineer & Educator Narrative */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute left-6 md:left-16 lg:left-24 top-1/4 z-10 max-w-2xl pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-3">
          <Rocket className="w-3.5 h-3.5" />
          Developer & Learner
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
          Web Developer focused on thoughtful, reliable applications.
        </h3>
        <p className="mt-4 text-sm sm:text-lg text-zinc-300 leading-relaxed">
          I have hands-on experience with PHP, JavaScript, Next.js, Node.js, .NET Framework, and MySQL. I bring programming fundamentals, problem-solving ability, database knowledge, and careful testing and debugging habits.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Frontend & Backend</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">MySQL & SQL</span>
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">Testing & Debugging</span>
        </div>
      </motion.div>

      {/* Slide 3: Transition to Details */}
      <motion.div
        style={{ opacity: endOpacity, y: endY }}
        className="absolute bottom-16 z-10 flex flex-col items-center justify-center w-full px-4"
      >
        <div className="text-center mb-5">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
            Dive Deeper
          </p>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Explore Skills, Tech & Featured Projects
          </h4>
        </div>
        <a
          href="#skills"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-3.5 font-bold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105 active:scale-95"
        >
          <span>Explore Skills & Tech</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </>
  );
}
