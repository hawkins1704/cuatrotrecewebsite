/** Origen del sitio sin barra final. En producción define NEXT_PUBLIC_SITE_URL (ej. https://cuatrotrece.pe). En Vercel se usa VERCEL_URL si no está definido. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}
