import { getDictionary, Locale } from "@/app/dictionaries";
import { ContactForm } from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,163,175,0.1)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img
              alt="Ímpetu Logo"
              className="h-8 md:h-10"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujRFweCIg7EQv_-JXFuVO949YmcMwrSaVjktvht_y3hO1GuUbinAInRGDlbc4KmHTBIKDX2WMah2XAWoiDJs8YT0Idqj5laZAfovxYOUlEjokppMdtBCtiUx8AGfE-p9gi2E0mglZqgCMZPdSXMe4CBpPTtKmOL8qWdYp9xmL1QVO23Vat3UxbiMOVrGttWR-_dJcbGmsLCUd3-uHOd8VsMpwFf7VPnsFsUwVeFt6B10G_R_EhtK5Plrshc79aSH_FY4Yl5_ME"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="font-headline tracking-tight text-sm uppercase text-slate-300 hover:text-white transition-colors"
              href="#servicios"
            >
              {dict.nav.services}
            </a>
            <a
              className="font-headline tracking-tight text-sm uppercase text-slate-300 hover:text-white transition-colors"
              href="#metodo"
            >
              {dict.nav.methodology}
            </a>
            <a
              className="font-headline tracking-tight text-sm uppercase text-slate-300 hover:text-white transition-colors"
              href="#verticales"
            >
              {dict.nav.verticals}
            </a>
            <a
              className="font-headline tracking-tight text-sm uppercase text-slate-300 hover:text-white transition-colors"
              href="#contacto"
            >
              {dict.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            <a href="#contacto" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2 rounded-xl font-headline font-bold text-sm tracking-tight hover:shadow-[0_0_20px_rgba(93,215,228,0.3)] transition-all scale-100 active:scale-95 text-center inline-block">
              {dict.nav.bookCall}
            </a>
          </div>
        </div>
      </nav>

      <main className="relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary glow-orb rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary glow-orb rounded-full"></div>
        <div className="absolute bottom-0 left-[20%] w-[600px] h-[600px] bg-tertiary glow-orb rounded-full"></div>

        <section className="relative pt-44 pb-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                <span className="text-xs font-label uppercase tracking-widest text-primary font-bold">
                  {dict.hero.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tighter mb-8 text-on-surface">
                {dict.hero.title1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-container">
                  {dict.hero.titleHighlight}
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light">
                {dict.hero.subtitle}
              </h2>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="#contacto" className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-headline font-bold text-lg hover:shadow-[0_8px_30px_rgba(0,163,175,0.4)] transition-all active:scale-95 inline-block text-center">
                  {dict.hero.ctaPrimary}
                </a>
                <a
                  className="font-headline font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 group"
                  href="#metodo"
                >
                  {dict.hero.ctaSecondary}
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-xl transform translate-y-12">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  insights
                </span>
                <h3 className="font-headline text-xl font-bold mb-2">
                  {dict.hero.optTitle}
                </h3>
                <p className="text-sm text-on-surface-variant leading-snug">
                  {dict.hero.optDesc}
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl">
                <div className="h-40 w-full mb-4 rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover opacity-60"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClDACUNLf6-E3bi2tSigpA8HxOWGqEmEAA7zZc8ocprcOYsQDBonazNo9FXVC28a2WzEhlelJM6ZQl3h_RwnrEhG4b0pASVF7fbAp8FFM8P5HiLzl4w9qFjtRM3aA4DfNWXLsYTQ3WBsNT3JlPtFOKOGWiiWYQEqzbCXZyi6pahTzDFAS-yAWnhiGXJRwsDpDF8OdOTgGE4zIs0-UjPDcl5gx3BzOHl_Uq8ch8OZpop3tM1L-pgaeR4OxNc7tCq-Gv_pU_YGYy_w"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest to-transparent"></div>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">
                  {dict.hero.aiTitle}
                </h3>
                <p className="text-sm text-on-surface-variant leading-snug">
                  {dict.hero.aiDesc}
                </p>
              </div>
              <div className="glass-panel p-6 rounded-xl col-span-2 mt-4 flex items-center gap-6">
                <div className="p-4 rounded-full bg-secondary/10">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    architecture
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-1">
                    {dict.hero.archTitle}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {dict.hero.archDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-lowest/50 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
                {dict.problem.title1}{" "}
                <span className="text-error">{dict.problem.titleHighlight}</span>
              </h2>
              <div className="h-1 w-24 bg-error rounded-full mb-8"></div>
            </div>
            <div className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              <p className="mb-6">{dict.problem.p1}</p>
              <p className="font-bold text-on-surface italic border-l-4 border-primary pl-6">
                {dict.problem.p2}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto relative z-10" id="servicios">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
              {dict.services.title1} <span className="text-primary">{dict.services.titleHighlight}</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-xl relative group overflow-hidden border border-white/5 hover:border-primary/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">
                  developer_mode
                </span>
              </div>
              <span className="text-primary font-bold font-headline text-sm tracking-[0.2em] uppercase mb-4 block">
                {dict.services.devTag}
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                {dict.services.devTitle}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {dict.services.devDesc}
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-xl border border-white/5 hover:border-tertiary/30 transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">
                  smart_toy
                </span>
              </div>
              <span className="text-tertiary font-bold font-headline text-sm tracking-[0.2em] uppercase mb-4 block">
                {dict.services.aiTag}
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                {dict.services.aiTitle}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {dict.services.aiDesc}
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-xl border border-white/5 hover:border-secondary/30 transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">
                  strategy
                </span>
              </div>
              <span className="text-secondary font-bold font-headline text-sm tracking-[0.2em] uppercase mb-4 block">
                {dict.services.consultingTag}
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                {dict.services.consultingTitle}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {dict.services.consultingDesc}
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-xl border border-white/5 hover:border-primary-fixed/30 transition-all relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">
                  hub
                </span>
              </div>
              <span className="text-primary-fixed font-bold font-headline text-sm tracking-[0.2em] uppercase mb-4 block">
                {dict.services.integrationTag}
              </span>
              <h3 className="text-3xl font-headline font-bold mb-6">
                {dict.services.integrationTitle}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {dict.services.integrationDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-lowest relative overflow-hidden" id="metodo">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-headline font-bold mb-6">
                {dict.method.title1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {dict.method.titleHighlight}
                </span>
              </h2>
              <p className="text-on-surface-variant text-xl">
                {dict.method.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-8 group hover:bg-surface-container-low transition-colors rounded-xl border-l-2 border-primary/20">
                <div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 group-hover:text-primary transition-colors">
                  01
                </div>
                <h4 className="text-xl font-bold mb-3 font-headline">
                  {dict.method.step1Title}
                </h4>
                <p className="text-sm text-on-surface-variant">
                  {dict.method.step1Desc}
                </p>
              </div>
              <div className="p-8 group hover:bg-surface-container-low transition-colors rounded-xl border-l-2 border-primary/20">
                <div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 group-hover:text-primary transition-colors">
                  02
                </div>
                <h4 className="text-xl font-bold mb-3 font-headline">
                  {dict.method.step2Title}
                </h4>
                <p className="text-sm text-on-surface-variant">
                  {dict.method.step2Desc}
                </p>
              </div>
              <div className="p-8 group hover:bg-surface-container-low transition-colors rounded-xl border-l-2 border-primary/20">
                <div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 group-hover:text-primary transition-colors">
                  03
                </div>
                <h4 className="text-xl font-bold mb-3 font-headline">
                  {dict.method.step3Title}
                </h4>
                <p className="text-sm text-on-surface-variant">
                  {dict.method.step3Desc}
                </p>
              </div>
              <div className="p-8 group hover:bg-surface-container-low transition-colors rounded-xl border-l-2 border-primary/20">
                <div className="text-5xl font-headline font-bold text-outline-variant/30 mb-6 group-hover:text-primary transition-colors">
                  04
                </div>
                <h4 className="text-xl font-bold mb-3 font-headline">
                  {dict.method.step4Title}
                </h4>
                <p className="text-sm text-on-surface-variant">
                  {dict.method.step4Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto" id="verticales">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tight">
              {dict.verticals.title1}{" "}
              <span className="text-secondary">{dict.verticals.titleHighlight}</span>
            </h2>
            <div className="h-1 w-24 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-500">
              <span className="material-symbols-outlined text-6xl text-primary mb-6">
                shopping_bag
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                {dict.verticals.ecommerceTitle}
              </h3>
              <p className="text-on-surface-variant">
                {dict.verticals.ecommerceDesc}
              </p>
            </div>
            <div className="glass-panel p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-500">
              <span className="material-symbols-outlined text-6xl text-secondary mb-6">
                payments
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                {dict.verticals.fintechTitle}
              </h3>
              <p className="text-on-surface-variant">
                {dict.verticals.fintechDesc}
              </p>
            </div>
            <div className="glass-panel p-12 rounded-[2rem] text-center hover:scale-105 transition-transform duration-500">
              <span className="material-symbols-outlined text-6xl text-tertiary mb-6">
                rocket_launch
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                {dict.verticals.startupsTitle}
              </h3>
              <p className="text-on-surface-variant">
                {dict.verticals.startupsDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-surface-container-high border border-white/10 flex items-center justify-center p-12">
                <span className="material-symbols-outlined text-[12rem] text-primary/20">
                  groups
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-8 rounded-2xl shadow-2xl">
                <p className="text-primary font-bold text-3xl font-headline mb-1">
                  {dict.authority.badge1}
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  {dict.authority.badge2}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
                {dict.authority.title1} <span className="text-primary">{dict.authority.titleHighlight}</span>
              </h2>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                {dict.authority.desc}
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold text-xl font-headline">
                    {dict.authority.stat1Title}
                  </span>
                  <span className="text-sm text-on-surface-variant">
                    {dict.authority.stat1Desc}
                  </span>
                </div>
                <div className="w-px h-12 bg-white/10 mx-4"></div>
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold text-xl font-headline">
                    {dict.authority.stat2Title}
                  </span>
                  <span className="text-sm text-on-surface-variant">
                    {dict.authority.stat2Desc}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto" id="contacto">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-20 items-start relative z-10">
              <div>
                <h2 className="text-5xl md:text-7xl font-headline font-bold mb-10 tracking-tighter leading-none">
                  {dict.contact.ready1}{" "}
                  <span className="italic font-light">{dict.contact.readyHighlight}</span>
                </h2>
                <p className="text-xl text-on-surface-variant mb-12">
                  {dict.contact.desc}
                </p>
              </div>

              <ContactForm dict={dict.contact} />

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 w-full py-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              alt="Ímpetu Logo"
              className="h-8 opacity-90"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiU11qcdKPg8ZANNwAQQ8CZxAhPgUYrgIxqNHCeEcq6JgfWH-deABIvT8Tpyr08t1Lp-oB0gSqOBu9AdWUuuPzNZk9LXPoVUfDBSCDWvuEg5nZwOr9V2JywyUb0eIPvRxR9hE97uBbrZmw4DqiAZlXesw87Kf7yCu67RubkUo8adK2LGIaTeGElL3Frz9kQ56u71hpejtUAIe69XxgrRaRXFCKYLDoDLqnE-CgOHQEeWHUlxceLOiuyqybn-vi4XR0MxpWpECN4"
            />
            <p className="font-body text-xs tracking-wide text-slate-500 text-center md:text-left">
              {dict.footer.desc}
            </p>
          </div>
          <div className="flex gap-10">
            <a
              className="font-body text-xs tracking-wide text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              {dict.footer.privacy}
            </a>
            <a
              className="font-body text-xs tracking-wide text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              {dict.footer.linkedin}
            </a>
            <a
              className="font-body text-xs tracking-wide text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              {dict.footer.github}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
