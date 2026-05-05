"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-12 overflow-hidden">
      {/* Background flame blob */}
      <motion.div
        style={{ y }}
        className="absolute -top-32 -right-32 w-[60vw] h-[60vw] bg-flame rounded-full blur-3xl opacity-20 pointer-events-none"
      />
    

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl w-full px-6">
        <div className="flex items-center gap-3 mb-8 text-xs font-mono uppercase tracking-widest">
          <span className="w-8 h-px bg-ink" />
          Agencia de Crecimiento Digital · Lima - Perú
        </div>

        <h1 className="display text-[clamp(3rem,7vw,5rem)]">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block reveal-mask"
          >
            <span className="block">Convertimos</span>
          </motion.span>
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block reveal-mask"
          >
            <span className="block">clics en <span className="text-flame italic font-serif">clientes.</span></span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 grid md:grid-cols-3 gap-8 items-end"
        >
          <p className="md:col-span-2 text-lg md:text-xl max-w-2xl text-black">
            Somos CUATROTRECE y nosotros: <br/> No hacemos marketing por hacer. Trazamos estrategias de SEO, Paid Media y
            Social Media diseñadas para una sola cosa: <span className="text-ink font-bold uppercase">hacer crecer tu negocio</span>.
          </p>
          <div className="flex flex-col gap-3">
            <a href="#contacto" className="inline-flex items-center justify-between bg-ink text-bone px-6 py-4 rounded-full font-semibold hover:bg-flame transition-colors">
              Quiero crecer <span>→</span>
            </a>
            <a href="#servicios" className="inline-flex items-center justify-between border border-ink/20 px-6 py-4 rounded-full font-semibold hover:border-ink transition-colors">
              Ver servicios <span>↓</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
