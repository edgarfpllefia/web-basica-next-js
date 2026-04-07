export default function EstadistiquesPage() {
  const dades = [
    { mes: "Gener", visites: 1200, conversions: 34 },
    { mes: "Febrer", visites: 1850, conversions: 51 },
    { mes: "Març", visites: 2100, conversions: 63 },
    { mes: "Abril", visites: 1780, conversions: 48 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Estadístiques</h1>
        <p className="mt-1 text-sm text-slate-500">Resum de les mètriques principals.</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Mes</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Visites</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">Conversions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dades.map((d) => (
              <tr key={d.mes} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900">{d.mes}</td>
                <td className="px-4 py-3 text-slate-600">{d.visites.toLocaleString()}</td>
                <td className="px-4 py-3 text-slate-600">{d.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
