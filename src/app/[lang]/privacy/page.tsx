import { getDictionary, Locale } from "@/app/dictionaries";

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-body antialiased relative overflow-hidden selection:bg-primary selection:text-on-primary">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Simplified Privacy Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <img
            alt="Ímpetu Logo"
            className="h-5 sm:h-6"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujRFweCIg7EQv_-JXFuVO949YmcMwrSaVjktvht_y3hO1GuUbinAInRGDlbc4KmHTBIKDX2WMah2XAWoiDJs8YT0Idqj5laZAfovxYOUlEjokppMdtBCtiUx8AGfE-p9gi2E0mglZqgCMZPdSXMe4CBpPTtKmOL8qWdYp9xmL1QVO23Vat3UxbiMOVrGttWR-_dJcbGmsLCUd3-uHOd8VsMpwFf7VPnsFsUwVeFt6B10G_R_EhtK5Plrshc79aSH_FY4Yl5_ME"
          />
          <a
             href={`/${lang}`}
             className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {dict.privacyPage.back}
          </a>
        </div>
      </header>

      {/* Contextual Policy Document Body */}
      <main className="relative z-10 pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-white mb-4 leading-tight">
            {dict.privacyPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-primary/80 tracking-widest uppercase font-bold">
            {dict.privacyPage.lastUpdated}
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] border border-white/5 space-y-10 shadow-2xl bg-surface/40 backdrop-blur-sm">
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">
            {dict.privacyPage.intro}
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white">
              {dict.privacyPage.s1Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s1Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">database</span>
              {dict.privacyPage.s2Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s2Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white">
              {dict.privacyPage.s3Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s3Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white">
              {dict.privacyPage.s4Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s4Content}
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">chat</span>
              {dict.privacyPage.s5Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s5Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              {dict.privacyPage.s6Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s6Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">do_not_disturb_on</span>
              {dict.privacyPage.s7Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s7Content}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-headline font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">share</span>
              {dict.privacyPage.s8Title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-400">
              {dict.privacyPage.s8Content}
            </p>
          </div>
        </div>
      </main>

      {/* Simplified Legal Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5 text-center px-6 mt-10">
        <p className="font-body text-[10px] tracking-wide text-slate-500 max-w-sm mx-auto">
          {dict.footer.desc}
        </p>
      </footer>
    </div>
  );
}
