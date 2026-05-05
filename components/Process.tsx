"use client";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Analizamos tu negocio, tu mercado y tus números. Definimos qué mover para crecer." },
  { n: "02", title: "Estrategia", desc: "Diseñamos un plan a la medida — los canales, las acciones y las metas medibles." },
  { n: "03", title: "Ejecución", desc: "Lanzamos campañas, contenidos y optimizaciones. Velocidad con criterio." },
  { n: "04", title: "Optimización", desc: "Iteramos cada semana sobre la data. Lo que no funciona, fuera. Lo que sí, escala." },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-16 md:py-16 bg-bone">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-md font-mono uppercase tracking-widest mb-8 flex items-center gap-3">
          <span>(03)</span><span className="w-8 h-px bg-ink" /> Proceso
        </div>
        <h2 className="display text-5xl md:text-8xl max-w-4xl mb-16">
          Cuatro pasos. <br/>Cero <span className="text-flame italic font-serif">humo.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-bone p-10 md:p-14 group hover:bg-ink hover:text-bone transition-colors"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="display text-4xl text-flame">{s.n}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-flame">→</span>
              </div>
              <h3 className="display text-4xl md:text-5xl mb-4">{s.title}</h3>
              <p className="text-lg opacity-70 max-w-md">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
