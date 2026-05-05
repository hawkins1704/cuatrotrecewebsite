"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    el.style.display = "block";
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,input,textarea,[data-hover]")) {
        el.style.width = "70px"; el.style.height = "70px";
      } else {
        el.style.width = "28px"; el.style.height = "28px";
      }
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    tick();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return <div ref={ref} className="cursor-blob" style={{ display: "none" }} />;
}
