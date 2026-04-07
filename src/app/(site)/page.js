export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 tracking-wide uppercase">
          Next.js App Router
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Benvingut/da a WebBasica
        </h1>
        <p className="text-lg text-slate-500 max-w-xl">
          Projecte base per practicar App Router, layouts, route groups i Tailwind CSS.
        </p>
        <div className="flex gap-3">
          <a href="/serveis" className="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
            Veure serveis
          </a>
          <a href="/sobre" className="inline-block rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Sobre nosaltres
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 text-2xl">⚡</div>
          <h2 className="font-semibold text-slate-900">App Router</h2>
          <p className="mt-1 text-sm text-slate-500">Layouts, route groups i subrutes anidades.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 text-2xl">🎨</div>
          <h2 className="font-semibold text-slate-900">Tailwind CSS</h2>
          <p className="mt-1 text-sm text-slate-500">Estils utilitaris sense sortir del JSX.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 text-2xl">🔌</div>
          <h2 className="font-semibold text-slate-900">API demo</h2>
          <p className="mt-1 text-sm text-slate-500">Fetch de dades amb Server Components.</p>
        </div>
      </div>
    </section>
  );
}
