export default function ServeisPage() {
  const serveis = [
    { icon: "🖥️", title: "Desenvolupament frontend", desc: "Interfícies modernes amb React i Next.js." },
    { icon: "⚙️", title: "Desenvolupament backend", desc: "APIs REST robustes amb Node.js o Laravel." },
    { icon: "🔗", title: "Integració d'APIs", desc: "Connexió amb serveis de tercers i webhooks." },
    { icon: "☁️", title: "Desplegament al núvol", desc: "Vercel, Railway, AWS i més." },
    { icon: "🛡️", title: "Seguretat web", desc: "Autenticació, autorització i bones pràctiques." },
    { icon: "📊", title: "Anàlisi de dades", desc: "Dashboards i visualitzacions a mida." },
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Serveis</h1>
        <p className="text-lg text-slate-500">Tot el que necessites per al teu projecte web.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serveis.map((s) => (
          <li key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <div className="text-2xl">{s.icon}</div>
            <h2 className="font-semibold text-slate-900">{s.title}</h2>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
