import Image from "next/image";

const otherProjects = [
  {
    id: 1,
    title: "SIBETA",
    description:
      "Sistem informasi absensi digital yang menggunakan platform platform untuk mendukung aktivitas mahasiswa dengan tampilan yang bersih dan fungsional.",
    image: "/images/projects/sibeta.png",
    tags: ["Figma", "Tailwind", "PHP"],
    theme: "light",
  },
  {
    id: 2,
    title: "UI/UX Loops",
    description:
      "Platform desain website yang berfokus pada pengguna untuk berbagai kebutuhan modern yang dapat diakses dengan genre muda.",
    image: "/images/projects/Loopz.webp",
    tags: ["Figma"],
    theme: "dark",
  },
  {
    id: 3,
    title: "PRESMA",
    description:
      "Sistem Pencatatan Prestasi Mahasiswa adalah website platform untuk membantu mahasiswa mencatat prestasi, kegiatan dan pengalaman secara terstruktur.",
    image: "/images/projects/presma.png",
    tags: ["Laravel", "PHP"],
    theme: "light",
  },
  {
    id: 4,
    title: "UI/UX EazyCreative",
    description:
      "Sebuah desain website yang berfokus ulang unik yang mencengangkan untuk berbagai generasi muda agar terus berkarya dalam bidang masing-masing.",
    image: "/images/projects/Eazy Landing page.webp",
    tags: ["Figma"],
    theme: "dark",
  },
];

export default function OtherProjectSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">OtherProject</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Be My Beberapa Proyek Semester Kampus
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className={`overflow-hidden rounded-xl border shadow-md ${
                project.theme === "dark"
                  ? "border-neutral-700 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-900"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
                <p className="mb-3 text-sm opacity-70">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  View project →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
