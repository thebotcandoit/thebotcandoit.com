import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SiteHead from '../components/SiteHead'
import HomepageEditor from '../components/HomepageEditor'
import homepageFile from '../data/homepage.json'

const content = homepageFile.published

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Botworks Agency',
    url: 'https://botworksagency.com',
    email: 'matt@botworksagency.com',
    founder: { '@type': 'Person', name: 'Matt Livingston' },
    description: content.meta.description,
  }

  return (
    <>
      <SiteHead title={content.meta.title} description={content.meta.description} path="/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="min-h-screen overflow-x-hidden paper-grid">
        <HomepageEditor />
        <Nav />
        <main>
          <section className="site-shell grid gap-10 pb-16 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end lg:gap-16">
            <div className="animate-rise min-w-0">
              <p data-home-editable="hero.eyebrow" className="site-label mb-4">{content.hero.eyebrow}</p>
              <h1 data-home-editable="hero.heading" className="site-page-title">{content.hero.heading}</h1>
              <p data-home-editable="hero.body" className="site-lede mt-6">{content.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:matt@botworksagency.com" className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"><span data-home-editable="hero.primaryCta">{content.hero.primaryCta}</span></a>
                <a href="#work" className="rounded-md border border-line bg-white/50 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"><span data-home-editable="hero.secondaryCta">{content.hero.secondaryCta}</span></a>
              </div>
            </div>
            <aside className="lg:mb-2">
              <p className="site-label">Why start with real work</p>
              <p data-home-editable="hero.note" className="site-supporting mt-3">{content.hero.note}</p>
            </aside>
          </section>

          <section id="work" className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="site-shell site-section">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                <div>
                  <p data-home-editable="proof.eyebrow" className="site-label">{content.proof.eyebrow}</p>
                  <h2 data-home-editable="proof.heading" className="site-section-title mt-3">{content.proof.heading}</h2>
                  <p data-home-editable="proof.body" className="site-body mt-4">{content.proof.body}</p>
                </div>
                <div className="divide-y divide-line">
                  {content.proof.items.map((item, index) => {
                    const href = ['/case-studies/field-visit-capture', '/case-studies/finance-operations', '/case-studies/hvac-rebate-automation'][index]
                    return (
                      <Link key={item.heading} href={href} className="group block py-8">
                        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span data-home-editable={`proof.items.${index}.industry`} className="site-meta">{item.industry}</span>
                          <span aria-hidden="true" className="text-copy/40">·</span>
                          <span data-home-editable={`proof.items.${index}.status`} className="site-meta text-accent">{item.status}</span>
                        </div>
                        <h3 data-home-editable={`proof.items.${index}.heading`} className="site-item-title">{item.heading}</h3>
                        <p data-home-editable={`proof.items.${index}.body`} className="site-body mt-3">{item.body}</p>
                        <p data-home-editable={`proof.items.${index}.detail`} className="site-supporting mt-3">{item.detail}</p>
                        <span data-home-editable={`proof.items.${index}.cta`} className="site-link mt-5 inline-block">{item.cta} →</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p data-home-editable="premise.eyebrow" className="site-label">{content.premise.eyebrow}</p>
                <h2 data-home-editable="premise.heading" className="site-section-title mt-3">{content.premise.heading}</h2>
              </div>
              <div className="space-y-4">
                {content.premise.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} data-home-editable={`premise.paragraphs.${index}`} className="site-body">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-ink text-white">
            <div className="site-shell site-section">
              <div className="max-w-3xl">
                <p data-home-editable="work.eyebrow" className="site-label text-amber">{content.work.eyebrow}</p>
                <h2 data-home-editable="work.heading" className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl">{content.work.heading}</h2>
                <p data-home-editable="work.body" className="mt-4 max-w-prose text-base leading-7 text-white/70">{content.work.body}</p>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 md:grid-cols-3">
                {content.work.items.map((item, index) => (
                  <div key={item.heading} className="bg-ink p-6 sm:p-8">
                    <p className="mb-4 font-mono text-sm text-amber">0{index + 1}</p>
                    <h3 data-home-editable={`work.items.${index}.heading`} className="font-display text-xl font-bold">{item.heading}</h3>
                    <p data-home-editable={`work.items.${index}.body`} className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/how-we-work" className="mt-8 inline-flex text-sm font-semibold text-amber underline-offset-4 hover:underline">How an engagement works →</Link>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <p data-home-editable="judgment.eyebrow" className="site-label">{content.judgment.eyebrow}</p>
                <h2 data-home-editable="judgment.heading" className="site-section-title mt-3">{content.judgment.heading}</h2>
              </div>
              <div>
                <p data-home-editable="judgment.body" className="site-lede">{content.judgment.body}</p>
                <blockquote className="mt-8 border-y border-line py-6">
                  <p data-home-editable="judgment.principle" className="site-item-title">{content.judgment.principle}</p>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="border-y border-[#ded6c7] bg-[#fffaf0]/75">
            <div className="site-shell site-section grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p data-home-editable="buyer.eyebrow" className="site-label">{content.buyer.eyebrow}</p>
                <h2 data-home-editable="buyer.heading" className="site-section-title mt-3">{content.buyer.heading}</h2>
                <p data-home-editable="buyer.body" className="site-body mt-4">{content.buyer.body}</p>
              </div>
              <div className="space-y-7">
                <div>
                  <p className="site-label">Good fit</p>
                  <p data-home-editable="buyer.fit" className="site-body mt-2">{content.buyer.fit}</p>
                </div>
                <div>
                  <p className="site-label text-copy">Probably not a fit</p>
                  <p data-home-editable="buyer.notFit" className="site-body mt-2">{content.buyer.notFit}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p data-home-editable="ownership.eyebrow" className="site-label">{content.ownership.eyebrow}</p>
                <h2 data-home-editable="ownership.heading" className="site-section-title mt-3">{content.ownership.heading}</h2>
                <p data-home-editable="ownership.body" className="site-body mt-4">{content.ownership.body}</p>
              </div>
              <ol className="divide-y divide-line">
                {content.ownership.items.map((item, index) => (
                  <li key={item} className="flex gap-5 py-6 text-sm leading-6 text-copy">
                    <span className="font-mono text-sm text-accent">0{index + 1}</span>
                    <span data-home-editable={`ownership.items.${index}`}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="site-shell site-section grid max-w-5xl gap-10 sm:grid-cols-[160px_1fr]">
              <img src="/profil_pic_thebotcandoit_2_march30.jpg" alt="Matt Livingston, founder of Botworks" className="h-36 w-36 rounded-lg object-cover shadow-[0_15px_50px_rgba(45,36,18,0.14)]" />
              <div>
                <p data-home-editable="about.eyebrow" className="site-label">{content.about.eyebrow}</p>
                <h2 data-home-editable="about.heading" className="site-section-title mt-3">{content.about.heading}</h2>
                <div className="mt-5 space-y-4">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={paragraph} data-home-editable={`about.paragraphs.${index}`} className="site-body">{paragraph}</p>
                  ))}
                </div>
                <Link href="/about" className="site-link mt-5 inline-flex">More about Matt and Botworks →</Link>
              </div>
            </div>
          </section>

          <section className="site-shell site-section">
            <div className="rounded-lg bg-ink p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <h2 data-home-editable="bottomCta.heading" className="font-display text-3xl font-bold leading-tight sm:text-4xl">{content.bottomCta.heading}</h2>
                <p data-home-editable="bottomCta.body" className="mt-4 max-w-prose text-base leading-7 text-white/70">{content.bottomCta.body}</p>
              </div>
              <a href="mailto:matt@botworksagency.com" data-home-editable="bottomCta.cta" className="mt-6 inline-flex shrink-0 rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink hover:bg-white lg:mt-0">{content.bottomCta.cta}</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
