export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tauler principal</h1>
        <p className="mt-1 text-sm text-slate-500">Zona organitzada amb route group i carpeta privada.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Usuaris</p>
          <p className="text-2xl font-bold text-slate-900">1.284</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Visites</p>
          <p className="text-2xl font-bold text-slate-900">8.430</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ingressos</p>
          <p className="text-2xl font-bold text-slate-900">€3.210</p>
        </div>
      </div>
    </div>
  );
}
