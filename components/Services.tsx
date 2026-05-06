"use client";
import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    cat: "Estrategia",
    title: "Growth Marketing",
    desc: "Diseñamos un plan de crecimiento de inicio a fin: desde primer clic hasta la fidelización del cliente. Análisis, experimentos y métricas que importan.",
    bullets: ["Análisis de producto y objetivos", "Funnel de conversión", "Experimentación continua", "Indicadores claves"],
    bg: "bg-ink", fg: "text-bone",
    border: "border-bone",
  },
  {
    n: "02",
    cat: "SEO",
    title: "Posicionamiento Orgánico",
    desc: "Que Google te encuentre primero. SEO técnico, contenidos y autoridad para ganar tráfico que compra.",
    bullets: ["Auditoría técnica", "Keyword research", "Contenidos optimizados", "Posicionamiento en Google"],
    bg: "bg-bone", fg: "text-ink",
    border: "border-ink",
  },
  {
    n: "03",
    cat: "Paid Media",
    title: "Google Ads",
    // title: "Google · Meta · TikTok Ads",
    desc: "Inversión publicitaria con foco quirúrgico. Cada sol invertido vuelve medible y rentable.",
    bullets: ["Setup y tracking", "Análisis de mercado", "Optimización continua", "Reportes Tráfico/Conversión"],
  
    bg: "bg-flame", fg: "text-ink",
    border: "border-ink",
  },
  // {
  //   n: "04",
  //   cat: "Social Media",
  //   title: "Gestión + Contenido",
  //   desc: "Comunidad, contenido y estrategia. Tus redes dejan de ser un gasto y se vuelven un canal de venta.",
  //   bullets: ["Community management", "Content creation", "Calendario editorial", "Reportes de engagement"],
  //   bg: "bg-ink", fg: "text-bone",
  //   border: "border-bone",
  // },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-bone">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <div className="text-md font-mono uppercase tracking-widest mb-8 flex items-center gap-3">
          <span>(02)</span><span className="w-8 h-px bg-ink" /> Servicios
        </div>
        <h2 className="display text-4xl md:text-8xl max-w-4xl">
          Herramientas que <span className="text-flame italic font-serif">venden.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-ink/70 text-lg">
          No vendemos paquetes. Combinamos lo que tu negocio necesita para crecer hoy.
        </p>
      </div>

      <div className="relative">
        {services.map((s, i) => (
          <div
            key={s.n}
            className="sticky top-0 h-screen flex items-center"
            style={{ zIndex: i + 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.8 }}
              className={`${s.bg} ${s.fg} w-full h-[70vh] mx-4 md:mx-12 rounded-3xl border border-ink/10 shadow-2xl overflow-hidden`}
            >
              <div className="h-full grid md:grid-cols-2 gap-8 p-8 md:p-16">
                <div className="flex flex-col justify-start">
                  <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest opacity-60">
                    <span>{s.n} / 03</span>
                    <span className="w-6 h-px bg-current" />
                    {s.cat}
                  </div>
                  <h3 className="display my-4 text-3xl md:text-6xl lg:text-7xl">{s.title}</h3>
                  <a
                    href="#contacto"
                    className={`inline-flex w-fit items-center gap-3 border ${s.border} border-current/30  px-5 py-3 rounded-full text-sm font-semibold transition-colors ${s.fg === "text-bone" ? "text-bone hover:text-ink hover:bg-bone" : "text-ink hover:text-bone hover:bg-ink"}`}
                  >
                    Hablemos de esto →
                  </a>
                </div>
                <div className="flex flex-col justify-end gap-6">
                  <p className="text-lg md:text-xl opacity-80 max-w-md">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className={`flex items-center gap-3 border-t ${s.border} border-current/15 pt-3 text-sm md:text-base`}>
                        <span className={s.fg === "text-bone" ? "text-flame" : "text-ink"}>✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
