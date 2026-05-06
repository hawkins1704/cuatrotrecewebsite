"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola CUATROTRECE!%0A%0ANombre: ${form.name}%0AEmail: ${form.email}%0AEmpresa: ${form.company}%0A%0A${form.message}`;
    window.open(`https://wa.me/51992095138?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contacto" className="relative bg-bone py-24 md:py-36 overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[60vw] h-[60vw] bg-flame rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-md font-mono uppercase tracking-widest mb-8 flex items-center gap-3">
          <span>(05)</span><span className="w-8 h-px bg-ink" /> Contacto
        </div>
        <h2 className="display text-6xl md:text-[10rem] leading-[0.85]">
          Hagamos<br/>algo<br/><span className="text-flame italic font-serif">grande.</span>
        </h2>

        <div className="mt-20 grid lg:grid-cols-2 gap-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { k: "name", l: "Tu nombre", t: "text" },
              { k: "email", l: "Email", t: "email" },
              { k: "company", l: "Empresa", t: "text" },
            ].map((f) => (
              <div key={f.k} className="border-b border-ink/20 pb-3 focus-within:border-flame transition-colors">
                <label className="block text-xs font-mono uppercase tracking-widest opacity-60 mb-2">{f.l}</label>
                <input
                  required
                  type={f.t}
                  value={(form as any)[f.k]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="w-full bg-transparent text-xl md:text-2xl outline-none"
                />
              </div>
            ))}
            <div className="border-b border-ink/20 pb-3 focus-within:border-flame transition-colors">
              <label className="block text-xs font-mono uppercase tracking-widest opacity-60 mb-2">Cuéntanos tu objetivo</label>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent text-xl md:text-2xl outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-between gap-6 bg-ink text-bone px-8 py-5 rounded-full font-semibold text-lg hover:bg-flame transition-colors"
            >
              {sent ? "¡Enviado! Te respondemos pronto" : "Quiero crecer mi negocio"}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.form>

          <div className="space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">Escríbenos</p>
              <a href="mailto:holacuatrotrece@gmail.com" className="display text-xl md:text-3xl hover:text-flame transition-colors break-all">
                holacuatrotrece@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">WhatsApp</p>
              <a href="https://wa.me/51992095138" target="_blank" className="display text-xl md:text-3xl hover:text-flame transition-colors">
                +51 992 095 138
              </a>
            </div>
            <div className="pt-6 border-t border-ink/15 text-sm opacity-70 max-w-md">
              Respondemos en menos de 24h. Sin promesas vacías — agendamos una llamada,
              entendemos tu negocio y te decimos si podemos ayudarte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
