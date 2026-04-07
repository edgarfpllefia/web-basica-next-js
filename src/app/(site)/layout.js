import NavLink from "@/app/(site)/components/NavLink";

export default function SiteLayout({ children }) {
  return (
    <>
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-1 px-6 py-3">
          <span className="mr-auto text-sm font-bold tracking-tight text-slate-900">WebBasica</span>
          <NavLink href="/">Inici</NavLink>
          <NavLink href="/sobre">Sobre</NavLink>
          <NavLink href="/serveis">Serveis</NavLink>
          <NavLink href="/contacte">Contacte</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/api-demo">API demo</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="mx-auto max-w-5xl px-6 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} WebBasica. Fet amb Next.js i Tailwind.
        </div>
      </footer>
    </>
  );
}
