import Image from "next/image";

export default function CollegeProjectSection() {
  return (
    <section id="college" className="scroll-mt-24 bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold">My College Project</h2>
          <p className="mt-1 text-sm font-semibold text-primary">Jawara Apps</p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-neutral-500">
            Jawara Apps adalah aplikasi mobile yang dirancang untuk memudahkan
            pengelolaan data warga dan pencatatan pembayaran secara digital.
          </p>
        </div>
        <div className="mb-10 flex justify-center gap-2">
          {["Mobile App", "Figma", "Dev"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-lg">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/projects/jawara.png"
              alt="Jawara Apps overview"
              fill
              sizes="(max-width: 768px) 90vw, 60vw"
              unoptimized
              className="object-cover object-[50%_5%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
