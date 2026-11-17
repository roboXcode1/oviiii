export default function IntroductionVideo() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-[#09090b] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="w-full lg:w-[68%]">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-teal-300">
            In My Own Words
          </p>
          <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
            Introduction Video
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-md border border-white/10 bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/8bXpiumhJUQ"
              title="Ovi Chowdhury — Introduction Video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.youtube.com/shorts/8bXpiumhJUQ"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-[11px] font-medium text-teal-300 transition hover:text-teal-200"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
