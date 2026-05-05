import Image from "next/image";

const tools = [
  { label: "Figma", src: "/images/tools/figma.svg" },
  { label: "React", src: "/images/tools/react.svg" },
  { label: "GitHub", src: "/images/tools/github.svg" },
  { label: "Framer", src: "/images/tools/framer.svg" },
  { label: "Laravel", src: "/images/tools/laravel.svg" },
  { label: "Canva", src: "/images/tools/canva.svg" },
];

export default function SkillToolSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-snug">
            Inovasi Digital yang
            <br />
            Berpusat pada Pengguna
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            Saya Designer yang bisa ngoding, developer yang peduli desain. saya
            merancang antarmuka di Figma & Frammer, lalu mewujudkannya dengan
            HTML, CSS, Javascript, Laravel dan React dari piksel pertama hingga
            baris terakhir
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 p-4 transition hover:shadow-md"
            >
              <Image src={tool.src} alt={tool.label} width={36} height={36} />
              <span className="text-xs font-medium text-neutral-600">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
