"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const WHATSAPP_NUMBER = "51992095138";

export type Testimonial = {
  company: string;
  logoSrc?: string;
  quote: string;
};

const reviews: Testimonial[] = [
  {
    company: "Toscana Pizza a la piedra",
    quote:
      "El equipo de CUATROTRECE me ayudó a establecer un plan de acción especifico para mi restaurante. Optimizan sus estrategias viendo como responde el cliente a las campañas digitales y al contenido. Mis ventas aumentaron a las semanas de implementar las estrategias. Estamos muy felices de haberlos encontrado.",
    logoSrc: "/testimonials/toscana-logo.png",
  },
  {
    company: "Roinsa",
    quote:
      "Nosotros teniamos sitio web y creiamos que eso era suficiente, pero notamos la diferencia cuando comenzamos a trabajar con ellos. Optimizaron y posicionaron nuestro website para que sea más atractivo y que jale clientes y junto con eso corrieron campañas de Google Ads. Durante los ultimos 3 meses la gente nos ha buscado mas veces que en el último año cerrando muchas mas ventas.",
    logoSrc: "/testimonials/roinsa-logo.png",
  },
  {
    company: "Toscana Pizza a la piedra",
    quote:
      "El equipo de CUATROTRECE me ayudó a establecer un plan de acción especifico para mi restaurante. Optimizan sus estrategias viendo como responde el cliente a las campañas digitales y al contenido. Mis ventas aumentaron a las semanas de implementar las estrategias. Estamos muy felices de haberlos encontrado.",
    logoSrc: "/testimonials/toscana-logo.png",
  },
  {
    company: "Roinsa",
    quote:
      "Nosotros teniamos sitio web y creiamos que eso era suficiente, pero notamos la diferencia cuando comenzamos a trabajar con ellos. Optimizaron y posicionaron nuestro website para que sea más atractivo y que jale clientes y junto con eso corrieron campañas de Google Ads. Durante los ultimos 3 meses la gente nos ha buscado mas veces que en el último año cerrando muchas mas ventas.",
    logoSrc: "/testimonials/roinsa-logo.png",
  },
];

type Slide =
  | { kind: "review"; testimonial: Testimonial }
  | { kind: "yours"; placeholderQuote: string }
  | { kind: "cta" };

const YOUR_CARD_PLACEHOLDER_QUOTE =
  "El equipo de CUATROTRECE analizó mi negocio, ejecutó con claridad su estrategia y los números hablaron solos. Desde el primer mes mis ventas aumentaron. y hoy genero más ventas que nunca. Yo no tuve que preocuparme por nada, sino simplemente seguir mi negocio y ver los resultados.";

const slides: Slide[] = [
  ...reviews.map((testimonial) => ({ kind: "review" as const, testimonial })),
  { kind: "yours" as const, placeholderQuote: YOUR_CARD_PLACEHOLDER_QUOTE },
  { kind: "cta" as const },
];

const AUTO_MS = 5200;
/** Desactivado: el carrusel solo avanza con flechas, puntos o gestos. Vuelve a `true` para reactivar. */
const AUTO_SCROLL_ENABLED = false;
const MD_QUERY = "(min-width: 768px)";
const SLIDE_GAP_PX = 16;
const SWIPE_THRESHOLD_PX = 56;
const SWIPE_LOCK_PX = 10;
const EDGE_PULL_RESISTANCE = 0.28;

function openWhatsAppCta(companyName: string) {
  const name = companyName.trim() || "Mi empresa";
  const text = `Hola CUATROTRECE!%0A%0AQuiero ser un caso de éxito con ustedes.%0AEmpresa: ${encodeURIComponent(name)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

function TestimonialLogo({
  company,
  logoSrc,
}: {
  company: string;
  logoSrc?: string;
}) {
  const [broken, setBroken] = useState(false);
  const showImage = Boolean(logoSrc && !broken);

  return (
    <div className="h-14 flex items-center">
      {showImage ? (
        <Image
          src={logoSrc!}
          alt={`Logo ${company}`}
          width={160}
          height={70}
          className="h-16 w-auto max-w-[8rem] object-contain object-left rounded-md"
          onError={() => setBroken(true)}
        />
      ) : (
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] text-ink/45"
          aria-hidden
        >
          <span className="display text-xl">{company.trim().slice(0, 1).toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}

function TestimonialCard({
  t,
  i,
  slideBasisPx,
  totalSlides,
}: {
  t: Testimonial;
  i: number;
  slideBasisPx: number;
  totalSlides: number;
}) {
  return (
    <article
      style={
        slideBasisPx > 0
          ? {
              flex: `0 0 ${slideBasisPx}px`,
              width: slideBasisPx,
              minWidth: slideBasisPx,
              maxWidth: slideBasisPx,
              boxSizing: "border-box",
            }
          : undefined
      }
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-bone p-8 shadow-[0_1px_0_rgba(10,10,10,0.06)] transition-[transform,box-shadow] duration-500"
      aria-roledescription="slide"
      aria-label={`Testimonio ${i + 1} de ${totalSlides}`}
    >
      <TestimonialLogo company={t.company} logoSrc={t.logoSrc} />
      <h3 className="mt-6 font-mono text-xs uppercase tracking-widest text-ink/55">{t.company}</h3>
      <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
        <span className="font-serif text-2xl leading-none text-flame opacity-90">“</span>
        {t.quote}
        <span className="font-serif text-2xl leading-none text-flame opacity-90">”</span>
      </p>
    </article>
  );
}

function InteractiveTestimonialCard({
  slideBasisPx,
  slideIndex,
  totalSlides,
  placeholderQuote,
  companyName,
  onCompanyChange,
  logoPreviewUrl,
  onLogoFile,
}: {
  slideBasisPx: number;
  slideIndex: number;
  totalSlides: number;
  placeholderQuote: string;
  companyName: string;
  onCompanyChange: (v: string) => void;
  logoPreviewUrl: string | null;
  onLogoFile: (file: File | null) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const initial = companyName.trim().slice(0, 1).toUpperCase() || "·";

  return (
    <article
      style={
        slideBasisPx > 0
          ? {
              flex: `0 0 ${slideBasisPx}px`,
              width: slideBasisPx,
              minWidth: slideBasisPx,
              maxWidth: slideBasisPx,
              boxSizing: "border-box",
            }
          : undefined
      }
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-bone p-8 shadow-[0_1px_0_rgba(10,10,10,0.06)] transition-[transform,box-shadow] duration-500"
      aria-roledescription="slide"
      aria-label={`Testimonio ${slideIndex + 1} de ${totalSlides}. Tu marca.`}
    >
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0];
          onLogoFile(f ?? null);
          e.target.value = "";
        }}
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="h-14 flex cursor-pointer items-center rounded-md text-left outline-none ring-ink/20 transition-shadow focus-visible:ring-2"
        aria-label="Subir logo de tu empresa"
      >
        {logoPreviewUrl ? (
          <Image
            src={logoPreviewUrl}
            alt=""
            width={160}
            height={70}
            unoptimized
            className="h-16 w-auto max-w-[8rem] object-contain object-left rounded-md"
          />
        ) : (
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] text-ink/45"
            aria-hidden
          >
            <span className="display text-xl">{initial}</span>
          </div>
        )}
      </button>

      <label className="sr-only" htmlFor={`cta-company-${slideIndex}`}>
        Nombre de tu empresa
      </label>
      <input
        id={`cta-company-${slideIndex}`}
        type="text"
        value={companyName}
        onChange={(e) => onCompanyChange(e.target.value)}
        placeholder="Tu empresa"
        autoComplete="organization"
        className="mt-6 w-full border-0 border-b border-transparent bg-transparent font-mono text-xs uppercase tracking-widest text-ink/80 outline-none transition-colors placeholder:text-ink/40 focus:border-ink/25"
      />

      <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
        <span className="font-serif text-2xl leading-none text-flame opacity-90">“</span>
        {placeholderQuote}
        <span className="font-serif text-2xl leading-none text-flame opacity-90">”</span>
      </p>
    </article>
  );
}

/** Último slide del carrusel: mismo ancho que las tarjetas, sin chrome de review card. */
function CtaSlidePanel({
  slideBasisPx,
  slideIndex,
  totalSlides,
  companyName,
}: {
  slideBasisPx: number;
  slideIndex: number;
  totalSlides: number;
  companyName: string;
}) {
  return (
    <div
      style={
        slideBasisPx > 0
          ? {
              flex: `0 0 ${slideBasisPx}px`,
              width: slideBasisPx,
              minWidth: slideBasisPx,
              maxWidth: slideBasisPx,
              boxSizing: "border-box",
            }
          : undefined
      }
      className="flex h-full min-h-[20rem] flex-col justify-center gap-6 py-2 md:min-h-[18rem] md:py-4"
      aria-roledescription="slide"
      aria-label={`Paso ${slideIndex + 1} de ${totalSlides}: contacto`}
    >
      <h3 className="display text-2xl uppercase leading-[0.95] text-ink md:text-3xl lg:text-[2.35rem]">
        <span className="font-serif italic normal-case text-flame">←</span> ¿Te gustaría ser un <span className="font-serif italic  text-flame">caso de éxito</span> más?
      </h3>
      <p className="max-w-xl font-mono text-xs uppercase leading-relaxed tracking-wide text-ink/65">
        Coloca tu nombre y tu logo y visualiza lo que será luego de trabajar con nosotros.
      </p>
      <button
        type="button"
        onClick={() => openWhatsAppCta(companyName)}
        className="group mt-1 inline-flex w-full max-w-md items-center justify-between gap-3 rounded-full bg-ink px-6 py-4 text-left font-semibold text-bone transition-colors hover:bg-flame md:w-auto"
      >
        <span className="display text-sm uppercase tracking-wide">Hagámoslo realidad</span>
      </button>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [isMd, setIsMd] = useState(false);
  const [index, setIndex] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [touchHold, setTouchHold] = useState(false);

  const [ctaCompany, setCtaCompany] = useState("");
  const [ctaLogoObjectUrl, setCtaLogoObjectUrl] = useState<string | null>(null);

  const indexRef = useRef(0);
  const maxIndexRef = useRef(0);
  const latestDragXRef = useRef(0);

  const n = slides.length;
  const maxIndex = isMd ? Math.max(0, n - 3) : Math.max(0, n - 1);

  const onLogoFile = useCallback((file: File | null) => {
    setCtaLogoObjectUrl(file ? URL.createObjectURL(file) : null);
  }, []);

  useEffect(() => {
    return () => {
      if (ctaLogoObjectUrl) URL.revokeObjectURL(ctaLogoObjectUrl);
    };
  }, [ctaLogoObjectUrl]);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);
  useEffect(() => {
    maxIndexRef.current = maxIndex;
  }, [maxIndex]);

  const slideBasisPx =
    viewportW > 0 ? (isMd ? (viewportW - 2 * SLIDE_GAP_PX) / 3 : viewportW) : 0;
  const stepPx = slideBasisPx > 0 ? slideBasisPx + SLIDE_GAP_PX : 0;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const sync = () => setIsMd(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setViewportW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!AUTO_SCROLL_ENABLED) return;
    if (n <= 1 || maxIndex === 0) return;
    if (paused || touchHold) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [n, maxIndex, paused, touchHold]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || isMd || maxIndex <= 0) return;

    let startX = 0;
    let startY = 0;
    let mode: null | "h" | "v" = null;

    const onStart = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      mode = null;
      latestDragXRef.current = 0;
      setTouchHold(true);
    };

    const onMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const cx = e.touches[0].clientX;
      const cy = e.touches[0].clientY;
      const dx = cx - startX;
      const dy = cy - startY;

      if (mode === null) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_LOCK_PX) return;
        mode = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
      }

      if (mode === "h") {
        e.preventDefault();
        let d = cx - startX;
        const idx = indexRef.current;
        const max = maxIndexRef.current;
        if (idx === 0 && d > 0) d *= EDGE_PULL_RESISTANCE;
        if (idx === max && d < 0) d *= EDGE_PULL_RESISTANCE;
        latestDragXRef.current = d;
        setDragX(d);
      }
    };

    const finish = () => {
      setTouchHold(false);
      if (mode === "h") {
        const d = latestDragXRef.current;
        const max = maxIndexRef.current;
        if (d < -SWIPE_THRESHOLD_PX) {
          setIndex((i) => (i >= max ? 0 : i + 1));
        } else if (d > SWIPE_THRESHOLD_PX) {
          setIndex((i) => (i <= 0 ? max : i - 1));
        }
      }
      mode = null;
      latestDragXRef.current = 0;
      setDragX(0);
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", finish);
    el.addEventListener("touchcancel", finish);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", finish);
      el.removeEventListener("touchcancel", finish);
    };
  }, [isMd, maxIndex]);

  const goDot = (i: number) => setIndex(Math.min(i, maxIndex));
  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const arrowBtn =
    "hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-bone text-ink transition-colors hover:border-flame hover:text-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-bone md:h-12 md:w-12";

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-ink/10 bg-bone py-24 md:py-32"
    >
      <motion.div
        style={{ x: watermarkX }}
        className="pointer-events-none absolute -left-24 top-6 display whitespace-nowrap text-[18vw] text-ink/[0.045] md:text-[14vw]"
        aria-hidden
      >
        TESTIMONIOS · VOZ ·
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3 font-mono text-sm uppercase tracking-widest">
          <span>(05)</span>
          <span className="h-px w-8 bg-ink" /> Testimonios
        </div>

        <h2 className="display max-w-4xl text-5xl md:text-7xl lg:text-8xl">
          Ellos ya <span className="font-serif italic text-flame">crecieron.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          Marcas que confiaron en nosotros. Los logos se muestran en blanco y negro para mantener ritmo
          visual: sube tus versiones a color y las unificamos con el mismo tratamiento.
        </p>

        <div
          className="mt-16 md:mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
          }}
        >
          <div className="flex items-center gap-2 md:gap-3">
            {maxIndex > 0 && (
              <button type="button" className={arrowBtn} aria-label="Anterior" onClick={goPrev}>
                <MdChevronLeft className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
              </button>
            )}
            <div
              ref={viewportRef}
              className="min-w-0 flex-1 select-none overflow-hidden"
              style={{ touchAction: isMd ? undefined : "pan-y pinch-zoom" }}
              role="region"
              aria-roledescription="carrusel"
              aria-label="Testimonios de clientes"
            >
              <motion.div
                className="flex"
                style={{ gap: SLIDE_GAP_PX }}
                animate={{ x: stepPx > 0 ? -index * stepPx + dragX : 0 }}
                transition={
                  dragX !== 0 ? { duration: 0 } : { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }
                }
              >
                {slides.map((slide, i) =>
                  slide.kind === "review" ? (
                    <TestimonialCard
                      key={`review-${slide.testimonial.company}-${i}`}
                      t={slide.testimonial}
                      i={i}
                      slideBasisPx={slideBasisPx}
                      totalSlides={n}
                    />
                  ) : slide.kind === "yours" ? (
                    <InteractiveTestimonialCard
                      key="yours"
                      slideBasisPx={slideBasisPx}
                      slideIndex={i}
                      totalSlides={n}
                      placeholderQuote={slide.placeholderQuote}
                      companyName={ctaCompany}
                      onCompanyChange={setCtaCompany}
                      logoPreviewUrl={ctaLogoObjectUrl}
                      onLogoFile={onLogoFile}
                    />
                  ) : (
                    <CtaSlidePanel
                      key="cta"
                      slideBasisPx={slideBasisPx}
                      slideIndex={i}
                      totalSlides={n}
                      companyName={ctaCompany}
                    />
                  ),
                )}
              </motion.div>
            </div>
            {maxIndex > 0 && (
              <button type="button" className={arrowBtn} aria-label="Siguiente" onClick={goNext}>
                <MdChevronRight className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
              </button>
            )}
          </div>

          {maxIndex > 0 && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir al grupo ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/40"
                  }`}
                  onClick={() => goDot(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
