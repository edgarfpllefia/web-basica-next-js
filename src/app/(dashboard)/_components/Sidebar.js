import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm h-fit">
      <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Tauler</p>
      <nav className="flex flex-col gap-1">
        <Link
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          href="/dashboard"
        >
          📊 Resum
        </Link>
        <Link
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          href="/dashboard/settings"
        >
          ⚙️ Configuració
        </Link>
        <Link
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          href="/dashboard/estadistiques"
        >
          📈 Estadístiques
        </Link>
      </nav>
    </aside>
  );
}
