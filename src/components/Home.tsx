import AgentDemo from "@/components/AgentDemo";
import ContactForm from "@/components/ContactForm";
import { dict, EMAIL, type Lang } from "@/content";

export default function Home({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const mail = `mailto:${EMAIL}`;
  const year = new Date().getFullYear();

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Optona",
    url: "https://optona.tr",
    email: EMAIL,
    description: d.meta.description,
    areaServed: "TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <a className="skip" href="#main">
        {d.skip}
      </a>

      <header className="nav">
        <div className="wrap nav__in">
          <a className="mark" href={lang === "tr" ? "/" : "/en/"} aria-label="Optona">
            <span className="mark__ring" aria-hidden="true" />
            optona
          </a>
          <nav className="nav__links" aria-label="Menu">
            <a className="link" href="#isler">
              {d.nav.work}
            </a>
            <a className="link" href="#surec">
              {d.nav.process}
            </a>
            <a className="link link--lang" href={d.nav.switchHref} hrefLang={lang === "tr" ? "en" : "tr"}>
              {d.nav.switch}
            </a>
            <a className="btn btn--sm" href="#iletisim">
              {d.nav.cta}
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" data-enter>
          <div className="hero__ground" aria-hidden="true" />
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">{d.hero.eyebrow}</p>
              <h1>
                {d.hero.h1a} <span className="accent">{d.hero.h1b}</span>
              </h1>
              <p className="lead">{d.hero.lead}</p>
              <p className="fact">{d.hero.fact}</p>
              <div className="actions">
                <a className="btn" href="#iletisim">
                  {d.hero.primary}
                </a>
                <a className="btn btn--ghost" href="#isler">
                  {d.hero.secondary}
                </a>
              </div>
            </div>
            <div className="hero__visual">
              <AgentDemo d={d.demo} />
            </div>
          </div>
        </section>

        <section className="section section--light" id="isler">
          <div className="wrap">
            <h2>{d.work.h2}</h2>
            <p className="sub">{d.work.lead}</p>
            <div className="cards">
              {d.work.cards.map((c) => (
                <article className="card" key={c.k}>
                  <span className="card__k">{c.k}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--surface" id="surec">
          <div className="wrap">
            <h2>{d.process.h2}</h2>
            <ol className="steps">
              {d.process.steps.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step__n">{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.b}</p>
                </li>
              ))}
            </ol>
            <div className="stack">
              <p className="stack__label">{d.process.stackLabel}</p>
              <ul className="stack__list">
                {d.process.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="stack__note">{d.process.privacy}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="closing" id="iletisim">
        <div className="wrap closing__in">
          <div className="closing__grid">
          <div className="closing__top">
            <h2 className="closing__h">
              {d.close.h2a} <span className="muted">{d.close.h2b}</span>
            </h2>
          </div>
          <ContactForm f={d.close.form} lang={lang} />
          </div>
          <div className="closing__legal">
            <span className="mark mark--sm">
              <span className="mark__ring" aria-hidden="true" />
              optona
            </span>
            <a className="link" href={mail}>
              {EMAIL}
            </a>
            <span>
              © {year} Optona · {d.close.country} · {d.close.legal}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
