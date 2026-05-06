"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <motion.a
      href="https://wa.me/51992095138?text=Hola%20CUATROTRECE!%20Quiero%20m%C3%A1s%20info."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-[80] flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-4 rounded-full shadow-2xl shadow-[#25D366]/40 group"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
      <span className="hidden sm:inline font-semibold text-sm">Chatea con nosotros</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-flame rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-flame rounded-full" />
    </motion.a>
  );
}
