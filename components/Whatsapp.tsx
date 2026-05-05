"use client";
import { motion } from "framer-motion";

export default function Whatsapp() {
  return (
    <motion.a
      href="https://wa.me/51999999999?text=Hola%20Digital%20Team!%20Quiero%20m%C3%A1s%20info."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-[80] flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-4 rounded-full shadow-2xl shadow-[#25D366]/40 group"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5.33 26.7l5.5-1.44a10.66 10.66 0 005.18 1.32h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 00-7.57-3.13zm0 19.59h-.01a8.88 8.88 0 01-4.52-1.24l-.32-.19-3.27.86.87-3.18-.21-.33a8.85 8.85 0 01-1.36-4.71c0-4.9 3.99-8.89 8.9-8.89 2.38 0 4.61.93 6.29 2.6a8.85 8.85 0 012.6 6.3c0 4.9-3.99 8.88-8.97 8.78z"/>
      </svg>
      <span className="hidden sm:inline font-semibold text-sm">Chatea con nosotros</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-flame rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-flame rounded-full" />
    </motion.a>
  );
}
