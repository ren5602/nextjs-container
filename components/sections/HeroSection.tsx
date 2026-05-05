import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 pt-24"
    >
      <div
        className="absolute inset-0 bg-[url('/images/polygon-bg.svg')] bg-cover bg-center opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            UI/UX Designer & Frontend Developer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I'm <span className="text-primary">Muhammad Nur Aziz</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-600">
            NIM: 2341720237 <br />
            I solve digital problems with agile minds, attention to detail, always
            trying to make smooth, enjoyable digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-md bg-neutral-900 px-6 py-2.5 font-medium text-white transition hover:bg-neutral-700"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-md border border-primary px-6 py-2.5 font-medium text-primary transition hover:bg-primary/5"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[340px] lg:w-[360px]">
            <Image
              src="/images/profile.png"
              alt="Portrait of Muhammad Nur Aziz"
              width={360}
              height={480}
              priority
              className="translate-y-4 rounded-sm border-2 border-neutral-900 object-cover shadow-xl lg:-mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
