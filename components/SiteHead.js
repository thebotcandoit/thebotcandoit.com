import Head from 'next/head'

export default function SiteHead({
  title,
  description,
  path = '/',
  type = 'website',
  image = '/og.jpg',
  imageAlt = 'Botworks Agency',
  imageWidth = 1200,
  imageHeight = 630,
}) {
  const canonical = `https://botworksagency.com${path === '/' ? '/' : path}`
  const socialImage = image.startsWith('http') ? image : `https://botworksagency.com${image}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
  )
}
