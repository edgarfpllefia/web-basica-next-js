"use client";

import { useState } from "react";

export default function ContactForm() {
  const [enviat, setEnviat] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Formulari</p>
      <p className="text-sm text-slate-500">
        Component <strong className="text-slate-700">client</strong>: estat local i esdeveniment al clic (sense enviar dades reals).
      </p>
      <button
        type="button"
        onClick={() => setEnviat(true)}
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Simular enviament
      </button>
      {enviat && (
        <p className="rounded-lg bg-green-50 border border-green-200 px-4 py-2.5 text-sm font-medium text-green-700" role="status">
          ✓ Missatge registrat (simulació).
        </p>
      )}
    </div>
  );
}
