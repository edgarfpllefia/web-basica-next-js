"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900">SUPER ERROR</h1>
      <p className="text-slate-600">ERROR</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Tornar a l'inici
      </Link>
    </div>
  );
}
