"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  ["NO", "somos una agencia de marketing tradicional."],
  ["NO", "ofrecemos servicios por ofrecerlos."],
  ["SÍ", "nos basamos en datos y resultados."],
  ["SÍ", "tenemos el objetivo claro: Tu crecimiento"],
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="manifiesto" ref={ref} className="relative pt-32 md:pt-48 overflow-hidden">
      <motion.div
        style={{ x }}
        className="absolute -left-20 top-10 display text-[20vw] text-ink/[0.04] whitespace-nowrap pointer-events-none"
      >
        MANIFIESTO · MANIFIESTO ·
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <h2 className="text-md font-mono uppercase tracking-widest mb-12 flex items-center gap-3">
          <span>(01)</span><span className="w-8 h-px bg-ink" /> Manifiesto
        </h2>

        <div className="space-y-2 md:space-y-4">
          {lines.map(([tag, text], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex items-baseline gap-4 md:gap-8 border-b border-ink/10 pb-4 md:pb-8 group"
            >
              <span className={`display text-2xl md:text-4xl ${tag === "NO" ? "text-flame" : "text-ink"}`}>
                {tag}
              </span>
              <span className="display text-3xl md:text-6xl lg:text-7xl group-hover:text-flame transition-colors">
                {text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-2xl text-lg text-ink/70"
        >
          Usamos los servicios digitales como herramientas. El objetivo siempre es el mismo:
          <span className="text-ink font-semibold"> más leads → más clientes → más ventas.</span>
        </motion.p>
      </div>
    </section>
  );
}
