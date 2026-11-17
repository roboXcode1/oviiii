import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Qualifications", href: "#education" },
  { label: "About", href: "#about" },
];

export default function HeroContent() {
  return (
    <section id="hero" className="bg-black px-2 pt-20 sm:px-4 sm:pt-24">
      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-[1800px] grid-cols-1 overflow-hidden rounded-b-[3rem] bg-[#09090b] sm:rounded-b-[4.5rem] md:min-h-[min(760px,calc(100svh-7rem))] md:grid-cols-[0.92fr_1.08fr] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-1 flex min-h-[370px] items-center justify-center px-4 py-6 sm:min-h-[460px] md:order-1 md:min-h-0 md:px-6 md:py-8">
          <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
            <img
              src="/image.png"
              alt="Ovi Chowdhury"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="relative order-2 flex items-center px-6 pb-12 pt-6 sm:px-10 sm:pb-16 md:order-2 md:px-10 md:py-14 lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-2xl text-center md:mx-0 md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Hello, I&apos;m Ovi Chowdhury
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Web Developer
              <span className="mt-1 block text-cyan-300">Frontend &amp; Backend</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              I&apos;m a CSE undergraduate at AIUB with hands-on experience building web applications using PHP, JavaScript, Next.js, Node.js, .NET Framework, and MySQL. I enjoy solving problems and creating practical, user-friendly solutions.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-400 md:justify-start">
              <MapPin className="h-4 w-4 shrink-0" />
              Bashundhara Residential Area, Dhaka, Bangladesh
            </div>

            <div className="mt-6 grid gap-3 sm:gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 md:justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="hidden h-4 w-4 md:block" />
                </a>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-cyan-300"
            >
              View my projects <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
