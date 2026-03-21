"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2 items-center">
      <Link
        href={redirectedPathName("es")}
        className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${currentLang === 'es' ? 'bg-primary/20 text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        ES
      </Link>
      <span className="text-slate-600">|</span>
      <Link
        href={redirectedPathName("en")}
        className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${currentLang === 'en' ? 'bg-primary/20 text-primary' : 'text-slate-400 hover:text-white'}`}
      >
        EN
      </Link>
    </div>
  );
}
