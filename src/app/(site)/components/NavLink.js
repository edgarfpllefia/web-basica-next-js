"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "rounded-md px-3 py-1.5 text-sm font-semibold text-slate-900 bg-slate-100"
          : "rounded-md px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
      }
    >
      {children}
    </Link>
  );
}
