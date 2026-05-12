import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo-footer.png"
            alt="CUATROTRECE — agencia de crecimiento digital"
            width={480}
            height={120}
            className="h-11 md:h-[3.75rem] w-auto max-w-[min(100%,17rem)] object-contain"
          />
        </div>
        <p className="text-sm opacity-60">© {new Date().getFullYear()} CUATROTRECE · Agencia de Crecimiento Digital</p>
        <p className="text-sm italic opacity-60">"Todo lo puedo en Cristo que me fortalece" — Filipenses 4:13</p>
      </div>
    </footer>
  );
}
