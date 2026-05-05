# Digital Team — Website

Sitio one-page disruptivo para Digital Team (Agencia de Crecimiento Digital).
Construido con Next.js 15 (App Router), TypeScript, TailwindCSS y Framer Motion.

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/page.tsx` — composición de la página
- `components/` — secciones (Hero, Manifesto, Services, Process, Stats, Contact, etc.)
- `app/globals.css` — estilos base, cursor, marquee, ruido

## Personalización rápida

- **Teléfono / WhatsApp**: reemplaza `51999999999` en [components/Whatsapp.tsx](components/Whatsapp.tsx) y [components/Contact.tsx](components/Contact.tsx).
- **Email**: en [components/Contact.tsx](components/Contact.tsx) y [components/Footer.tsx](components/Footer.tsx).
- **Color de marca**: variable `flame` en [tailwind.config.ts](tailwind.config.ts).

## Highlights

- Cursor blob con `mix-blend-mode: difference`
- Hero con type-reveal y parallax en scroll
- Marquee infinito
- Manifiesto con texto gigante parallax de fondo
- Servicios con stacking sticky cards
- Contadores animados al hacer scroll
- Formulario que abre WhatsApp pre-rellenado
- Botón flotante de WhatsApp + ping animado
- Mobile-first, navegación responsive
