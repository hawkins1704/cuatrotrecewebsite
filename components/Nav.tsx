"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Manifiesto", "#manifiesto"],
    ["Servicios", "#servicios"],
    ["Proceso", "#proceso"],
    ["Testimonios", "#testimonios"],
    ["Contacto", "#contacto"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md bg-bone/70 border-b border-ink/10" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <Image
            src="/images/logo.jpg"
            alt="Digital Team"
            width={480}
            height={120}
            className="h-12 md:h-16 lg:h-[4.25rem] w-auto max-w-[min(100%,18rem)] object-contain group-hover:opacity-90 transition-opacity"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="relative hover:text-flame transition-colors uppercase tracking-widest">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-bone px-5 py-3 rounded-full text-sm font-semibold hover:bg-flame transition-colors"
        >
          Hablemos →
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="menu"
        >
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bone border-t border-ink/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="display text-3xl">
                {label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="bg-ink text-bone px-5 py-3 rounded-full text-center font-semibold">
              Hablemos →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
