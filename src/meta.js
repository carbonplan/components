import React from 'react'
import Head from 'next/head'

const Meta = ({ title, description, card }) => {
  if (!description) {
    console.warn(
      'a custom description should be used for search engine optimization'
    )
  }
  if (!title) {
    console.warn('a custom title should be used for search engine optimization')
  }
  const titleProp = title || 'CarbonPlan'
  const descriptionProp =
    description ||
    'Improving the transparency and scientific integrity of carbon removal and climate solutions through open data and tools.'
  const cardProp = card || 'https://images.carbonplan.org/social/homepage.png'

  return (
    <Head>
      <title>{titleProp}</title>
      <meta name='description' content={descriptionProp} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='canonical' content='https://carbonplan.org/' />
      <link
        rel='icon'
        type='image/svg+xml'
        href='https://images.carbonplan.org/favicon.svg'
      />
      <link
        rel='preload'
        href='https://fonts.carbonplan.org/relative/relative-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.carbonplan.org/relative/relative-medium-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.carbonplan.org/relative/relative-mono-11-pitch-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://fonts.carbonplan.org/relative/relative-faux-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link rel='manifest' href='https://images.carbonplan.org/manifest.json' />
      <meta name='theme-color' content='#1b1e23' />
      <link
        rel='alternate icon'
        type='image/png'
        href='https://images.carbonplan.org/favicon.png'
      />
      <link
        rel='mask-icon'
        href='https://images.carbonplan.org/safari-pinned-tab.svg'
        color='#000000'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='https://images.carbonplan.org/apple-touch-icon.png'
      />
      <meta name='msapplication-TileColor' content='#1b1e23' />
      <meta
        name='msapplication-TileImage'
        content='https://images.carbonplan.org/mstile-144x144.png'
      />
      <meta
        name='msapplication-config'
        content='https://images.carbonplan.org/browserconfig.xml'
      />
      <meta property='og:title' content={titleProp} />
      <meta property='og:description' content={descriptionProp} />
      <meta property='og:image' content={cardProp} />
      <meta property='og:url' content='https://carbonplan.org' />
      <meta name='twitter:title' content={titleProp} />
      <meta name='twitter:description' content={descriptionProp} />
      <meta name='twitter:image' content={cardProp} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}

export default Meta
