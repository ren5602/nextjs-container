import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/Login Loopz.webp",
    alt: "loops Login UI",
    className: "row-span-2",
  },
  { id: 2, src: "/images/gallery/Login Eazy.webp", alt: "Eazy Login UI" },
  {
    id: 3,
    src: "/images/gallery/Eazy Landing page.webp",
    alt: "Eazy Landing Page UI",
  },
  {
    id: 4,
    src: "/images/gallery/PKM.webp",
    alt: "PKM UI",
  },
  {
    id: 5,
    src: "/images/gallery/Loopz.webp",
    alt: "Loopz UI",
  },
];

export default function UIGallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">UI Gallery</h2>
          <p className="mt-2 text-sm text-neutral-500">
            Koleksi UI yang saya buat secara fluit
          </p>
        </div>
        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 md:auto-rows-[180px] md:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className={`gallery-card relative overflow-hidden rounded-xl bg-white ${
                item.className ?? ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
