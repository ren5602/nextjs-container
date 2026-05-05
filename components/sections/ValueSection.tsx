const values = [
  {
    // icon: "",
    title: "Pengguna luar yang sangat mengutamakan produk sebelum segalanya",
    desc: "Saya membuat antarmuka yang intuitif dan memahami cara kerja pikiran manusia dalam menggunakan produk digital, sehingga setiap keputusan desain selalu dimulai dari riset pengguna.",
  },
  {
    // icon: "",
    title: "Desain berbasis masalah, bukan opini developer kamu sebelumnya",
    desc: "Saya mendefinisikan masalah dengan Framework di Figma menggunakan metode design thinking: Empathize, Define, Ideate, & FDI apakah sudah sesuai dan layak.",
  },
  {
    // icon: "",
    title:
      "Produk terbaik dibangun melalui prototipe berkualitas tinggi yang punya aferens pusat",
    desc: "Saya menciptakan di Figma, lalu mulai bekerja dalam proses iterasi yang membuat prototype menjadi valid seperti yang akan dibangun di production.",
  },
  {
    // icon: "",
    title:
      "Tampilan tidak bisa berkompromi dengan kualitas — karena itu tidak profesional",
    desc: "Setiap project yang saya kerjakan selalu berisi Figma atau Office/Workspace sehingga saya berbagi pengetahuan tentang tools yang Dapat saya berikan.",
  },
];

export default function ValueSection() {
  return (
    <section id="values" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Saya tidak hanya mendesain,<br />saya memecahkan masalah
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
            Setiap proyek dibuat dari masalah nyata pengguna, dengan solusi
            kreatif yang tepat sasaran dan berdampak bagi mereka yang Mau
            Berkembang.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-neutral-200 p-6 transition hover:shadow-md"
            >
              {/* <div className="mb-3 text-3xl">{value.icon}</div> */}
              <h3 className="mb-2 text-base font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
