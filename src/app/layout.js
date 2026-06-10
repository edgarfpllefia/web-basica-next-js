import "./globals.css";
import Providers from "./providers";

//Esta constante sirve para el SEO, poniendo title y descripc
export const metadata = {
  title: "Web amb Next.js",
  description: "Exercici App Router + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body className="min-h-screen text-slate-800 ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
