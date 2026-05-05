import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">
        <div className="max-w-md">
          <h2 className="mb-4 text-4xl font-extrabold">Let's Work Together</h2>
          <p className="mb-6 text-sm text-neutral-600">
            Saya siap bergabung ke tim atau memulai freelance project. Thanks
            for visiting!
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:email@example.com"
              className="rounded-md bg-neutral-900 px-6 py-2.5 font-medium text-white transition hover:bg-neutral-700"
            >
              Contact Me Now
            </a>
            <a
              href="https://drive.google.com/file/d/19TTflayphUbqj6WjkxRgyqC2fDpM5gD0/view?usp=sharing"
              className="rounded-md border border-primary px-6 py-2.5 font-medium text-primary transition hover:bg-primary/5" target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/anime-character.jpeg"
            alt="Anime character illustration"
            width={320}
            height={320}
            className="w-64 drop-shadow-xl lg:w-80 animate-float"
          />
        </div>
      </div>
    </section>
  );
}
