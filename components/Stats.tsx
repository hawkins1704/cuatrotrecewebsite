"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (latest) => Math.round(latest).toString() + suffix);
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2, ease: [0.2, 0.8, 0.2, 1] });
  }, [inView, to, v]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 400, s: "+", l: "Leads generados por cliente activo" },
  { v: 10, s: "+", l: "Negocios escalados en Perú y USA" },
  { v: 20, s: "K+", l: "Impresiones generadas al mes por cliente activo" },
  { v: 4000, s: "+", l: "Soles invertidos mensualmente en campañas activas" },
];

export default function Stats() {
  return (
    <section className="bg-ink text-bone py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-md font-mono uppercase tracking-widest mb-12 flex items-center gap-3 opacity-70">
          <span>(04)</span><span className="w-8 h-px bg-bone" /> Resultados
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-bone/20 pt-6"
            >
              <div className="display text-5xl md:text-7xl text-flame">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <p className="mt-4 text-sm md:text-base opacity-70 max-w-[20ch]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
