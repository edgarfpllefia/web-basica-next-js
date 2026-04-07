export const posts = [
  {
    slug: "el-meu-primer-post",
    title: "El meu primer post",
    excerpt: "Introducció al blog.",
    content: "Aquest és el contingut complet del primer article.",
  },
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router",
    excerpt: "Rutes i layouts.",
    content: "Aquí expliques com funciona l'App Router.",
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS: tips i trucs",
    excerpt: "Millora el teu flux de treball amb Tailwind.",
    content:
      "Tailwind CSS permet estilitzar components directament amb classes utilitàries. Alguns trucs útils són l'ús de variants com hover, focus i md per fer dissenys responsius sense sortir del JSX.",
  },
  {
    slug: "server-components",
    title: "Server Components a Next.js",
    excerpt: "Quan usar Server i quan Client Components.",
    content:
      "Els Server Components s'executen al servidor i no envien JavaScript al client. Són ideals per fer fetch de dades. Els Client Components es necessiten quan uses hooks com useState o useEffect.",
  },
  {
    slug: "fetch-i-cache",
    title: "Fetch i cache a Next.js",
    excerpt: "Com funciona el cache per defecte.",
    content:
      "Next.js estén el fetch natiu amb opcions de cache. Amb cache: 'no-store' obtens dades sempre fresques. Amb revalidate: 60 revalides cada 60 segons. Per defecte les dades es cachegen indefinidament.",
  },
  {
    slug: "typescript-basics",
    title: "TypeScript per a principiants",
    excerpt: "Per què afegir tipus al teu JavaScript.",
    content:
      "TypeScript afegeix tipat estàtic a JavaScript. Això ajuda a detectar errors abans d'executar el codi. Els tipus bàsics són string, number, boolean, array i object. Amb interfaces pots definir l'estructura d'objectes complexos.",
  },
];
