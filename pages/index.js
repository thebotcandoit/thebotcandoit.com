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
          <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end">
            <div className="animate-rise min-w-0">
              <p data-home-editable="hero.eyebrow" className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.hero.eyebrow}</p>
              <h1 data-home-editable="hero.heading" className="font-display max-w-4xl text-[2.8rem] font-bold leading-[0.96] tracking-tight text-[#12131a] sm:text-6xl lg:text-[4.7rem]">{content.hero.heading}</h1>
              <p data-home-editable="hero.body" className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4f5968] sm:text-xl">{content.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:matt@botworksagency.com" className="rounded-md bg-[#12131a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f9e73]"><span data-home-editable="hero.primaryCta">{content.hero.primaryCta}</span></a>
                <a href="#work" className="rounded-md border border-[#cfc5b5] bg-[#fffaf0]/80 px-5 py-3 text-sm font-semibold text-[#12131a] transition-colors hover:border-[#12131a]"><span data-home-editable="hero.secondaryCta">{content.hero.secondaryCta}</span></a>
              </div>
            </div>
            <aside className="border-l-2 border-[#f2b84b] pl-5 lg:mb-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8171]">Why start with real work</p>
              <p data-home-editable="hero.note" className="mt-3 text-sm leading-relaxed text-[#4f5968]">{content.hero.note}</p>
            </aside>
          </section>

          <section id="work" className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
              <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
                <div>
                  <p data-home-editable="proof.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.proof.eyebrow}</p>
                  <h2 data-home-editable="proof.heading" className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">{content.proof.heading}</h2>
                  <p data-home-editable="proof.body" className="mt-4 text-base leading-relaxed text-[#626b7a]">{content.proof.body}</p>
                </div>
                <div className="divide-y divide-[#cfc5b5] border-y border-[#cfc5b5]">
                  {content.proof.items.map((item, index) => {
                    const href = ['/case-studies/field-visit-capture', '/case-studies/finance-operations', '/case-studies/hvac-rebate-automation'][index]
                    return (
                      <Link key={item.heading} href={href} className="group block py-6 first:pt-0 lg:first:pt-6">
                        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.14em]">
                          <span data-home-editable={`proof.items.${index}.industry`} className="text-[#626b7a]">{item.industry}</span>
                          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#f2b84b]" />
                          <span data-home-editable={`proof.items.${index}.status`} className="text-[#1f7a57]">{item.status}</span>
                        </div>
                        <h3 data-home-editable={`proof.items.${index}.heading`} className="font-display text-2xl font-bold leading-tight text-[#12131a] transition-colors group-hover:text-[#1f7a57]">{item.heading}</h3>
                        <p data-home-editable={`proof.items.${index}.body`} className="mt-3 text-sm leading-relaxed text-[#596474]">{item.body}</p>
                        <p data-home-editable={`proof.items.${index}.detail`} className="mt-3 border-l border-[#cfc5b5] pl-3 text-xs leading-relaxed text-[#8a8171]">{item.detail}</p>
                        <span data-home-editable={`proof.items.${index}.cta`} className="mt-4 inline-block text-sm font-semibold text-[#1f7a57]">{item.cta} →</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p data-home-editable="premise.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.premise.eyebrow}</p>
                <h2 data-home-editable="premise.heading" className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-5xl">{content.premise.heading}</h2>
              </div>
              <div className="space-y-5 border-l border-[#cfc5b5] pl-6 sm:pl-8">
                {content.premise.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} data-home-editable={`premise.paragraphs.${index}`} className="text-base leading-relaxed text-[#4f5968] sm:text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#12131a] text-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
              <div className="max-w-3xl">
                <p data-home-editable="work.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f2b84b]">{content.work.eyebrow}</p>
                <h2 data-home-editable="work.heading" className="font-display mt-3 text-3xl font-bold leading-tight sm:text-5xl">{content.work.heading}</h2>
                <p data-home-editable="work.body" className="mt-5 text-base leading-relaxed text-white/68 sm:text-lg">{content.work.body}</p>
              </div>
              <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 md:grid-cols-3">
                {content.work.items.map((item, index) => (
                  <div key={item.heading} className="bg-[#12131a] p-6 sm:p-7">
                    <p className="mb-5 font-mono text-xs text-[#f2b84b]">0{index + 1}</p>
                    <h3 data-home-editable={`work.items.${index}.heading`} className="font-display text-xl font-bold">{item.heading}</h3>
                    <p data-home-editable={`work.items.${index}.body`} className="mt-3 text-sm leading-relaxed text-white/62">{item.body}</p>
                  </div>
                ))}
              </div>
              <Link href="/how-we-work" className="mt-8 inline-flex text-sm font-semibold text-[#f2b84b] hover:text-white">How an engagement works →</Link>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <p data-home-editable="judgment.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.judgment.eyebrow}</p>
                <h2 data-home-editable="judgment.heading" className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">{content.judgment.heading}</h2>
              </div>
              <div>
                <p data-home-editable="judgment.body" className="text-lg leading-relaxed text-[#4f5968]">{content.judgment.body}</p>
                <blockquote className="mt-8 border-y border-[#cfc5b5] py-6">
                  <p data-home-editable="judgment.principle" className="font-display text-2xl font-bold leading-snug text-[#12131a] sm:text-3xl">{content.judgment.principle}</p>
                </blockquote>
              </div>
            </div>
          </section>

          <section className="border-y border-[#ded6c7] bg-[#fffaf0]/75">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-14">
              <div>
                <p data-home-editable="buyer.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.buyer.eyebrow}</p>
                <h2 data-home-editable="buyer.heading" className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">{content.buyer.heading}</h2>
                <p data-home-editable="buyer.body" className="mt-5 text-base leading-relaxed text-[#4f5968]">{content.buyer.body}</p>
              </div>
              <div className="space-y-7">
                <div className="border-l-2 border-[#2f9e73] pl-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1f7a57]">Good fit</p>
                  <p data-home-editable="buyer.fit" className="mt-2 text-base leading-relaxed text-[#4f5968]">{content.buyer.fit}</p>
                </div>
                <div className="border-l-2 border-[#8a8171] pl-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a8171]">Probably not a fit</p>
                  <p data-home-editable="buyer.notFit" className="mt-2 text-base leading-relaxed text-[#4f5968]">{content.buyer.notFit}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p data-home-editable="ownership.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.ownership.eyebrow}</p>
                <h2 data-home-editable="ownership.heading" className="font-display mt-3 text-3xl font-bold leading-tight text-[#12131a] sm:text-4xl">{content.ownership.heading}</h2>
                <p data-home-editable="ownership.body" className="mt-5 text-base leading-relaxed text-[#4f5968]">{content.ownership.body}</p>
              </div>
              <ol className="divide-y divide-[#cfc5b5] border-y border-[#cfc5b5]">
                {content.ownership.items.map((item, index) => (
                  <li key={item} className="flex gap-5 py-5 text-sm leading-relaxed text-[#4f5968]">
                    <span className="font-mono text-xs text-[#1f7a57]">0{index + 1}</span>
                    <span data-home-editable={`ownership.items.${index}`}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-y border-[#ded6c7] bg-[#efe8da]/65">
            <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-[160px_1fr] sm:px-8 sm:py-20">
              <img src="/profil_pic_thebotcandoit_2_march30.jpg" alt="Matt Livingston, founder of Botworks" className="h-36 w-36 rounded-lg object-cover shadow-[0_15px_50px_rgba(45,36,18,0.14)]" />
              <div>
                <p data-home-editable="about.eyebrow" className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1f7a57]">{content.about.eyebrow}</p>
                <h2 data-home-editable="about.heading" className="font-display mt-3 text-3xl font-bold text-[#12131a] sm:text-4xl">{content.about.heading}</h2>
                <div className="mt-5 space-y-4">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={paragraph} data-home-editable={`about.paragraphs.${index}`} className="text-base leading-relaxed text-[#4f5968]">{paragraph}</p>
                  ))}
                </div>
                <Link href="/about" className="mt-5 inline-flex text-sm font-semibold text-[#1f7a57] hover:text-[#12131a]">More about Matt and Botworks →</Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
            <div className="rounded-lg bg-[#12131a] p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="max-w-3xl">
                <h2 data-home-editable="bottomCta.heading" className="font-display text-3xl font-bold leading-tight sm:text-4xl">{content.bottomCta.heading}</h2>
                <p data-home-editable="bottomCta.body" className="mt-4 text-base leading-relaxed text-white/65">{content.bottomCta.body}</p>
              </div>
              <a href="mailto:matt@botworksagency.com" data-home-editable="bottomCta.cta" className="mt-6 inline-flex shrink-0 rounded-md bg-[#f2b84b] px-5 py-3 text-sm font-semibold text-[#12131a] hover:bg-white lg:mt-0">{content.bottomCta.cta}</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
