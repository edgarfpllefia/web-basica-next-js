export default function SobrePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Sobre nosaltres</h1>
        <p className="text-lg text-slate-500 max-w-xl">
          Som un equip que desenvolupa aplicacions web modernes per a pimes.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="font-semibold text-slate-900">La nostra missió</h2>
          <p className="text-sm text-slate-500">Ajudem les empreses a digitalitzar-se amb solucions web ràpides, accessibles i escalables.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="font-semibold text-slate-900">La nostra visió</h2>
          <p className="text-sm text-slate-500">Un web millor, on cada negoci pugui tenir una presència digital de qualitat sense barreres.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="font-semibold text-slate-900">Experiència</h2>
          <p className="text-sm text-slate-500">Més de 5 anys treballant amb React, Next.js, Node.js i tecnologies cloud.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="font-semibold text-slate-900">Equip</h2>
          <p className="text-sm text-slate-500">Un equip petit, àgil i enfocat en la qualitat del codi i l'experiència d'usuari.</p>
        </div>
      </div>
    </section>
  );
}
