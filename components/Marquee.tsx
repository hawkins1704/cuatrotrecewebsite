"use client";
const items = ["SEO", "Google Ads", "Growth Marketing", "Posicionamiento Orgánico", "Estrategia de Crecimiento", "Análisis de Mercado", "Optimización Continua", "Reportes de Tráfico/Conversión"];
export default function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <section aria-hidden className="border-y border-ink/10 bg-ink text-bone py-6 overflow-hidden">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} className="display text-5xl md:text-7xl px-8 flex items-center gap-8">
            {w}
            <span className="text-flame">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
