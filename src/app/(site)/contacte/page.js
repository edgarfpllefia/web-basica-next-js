import ContactForm from "@/app/(site)/components/ContactForm";

export default function ContactePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contacte</h1>
        <p className="text-lg text-slate-500">Tens alguna pregunta? Escriu-nos.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
            <p className="text-sm text-slate-700">contacte@exemple.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Localització</p>
            <p className="text-sm text-slate-700">Barcelona, Catalunya</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Horari</p>
            <p className="text-sm text-slate-700">Dl – Dv, 9:00 – 18:00</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
