import React from 'react'
import Head from 'next/head'

const Meta = ({ title, description, card }) => {
  title = title ? title : 'carbonplan'
  description = description
    ? description
    : 'Data and science for carbon removal.'
  card = card ? card : 'homepage'

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='preload'
        href='https://carbonplan-assets.s3.amazonaws.com/fonts/relative/relative-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://carbonplan-assets.s3.amazonaws.com/fonts/relative/relative-medium-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://carbonplan-assets.s3.amazonaws.com/fonts/relative/relative-mono-11-pitch-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link
        rel='preload'
        href='https://carbonplan-assets.s3.amazonaws.com/fonts/relative/relative-faux-book-pro.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link rel='canonical' content='https://carbonplan.org/' />
      <link
        rel='manifest'
        href='https://carbonplan-assets.s3.amazonaws.com/images/manifest.json'
      />
      <meta name='theme-color' content='#1b1e23' />
      <link
        rel='icon'
        sizes='any'
        type='image/svg+xml'
        href='https://carbonplan-assets.s3.amazonaws.com/images/favicon.svg'
      />
      <link
        rel='mask-icon'
        href='https://carbonplan-assets.s3.amazonaws.com/images/favicon.svg'
        color='#000000'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='https://carbonplan-assets.s3.amazonaws.com/images/favicon-180.png'
      />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content={`https://carbonplan-assets.s3.amazonaws.com/images/social/${card}.png`}
      />
      <meta property='og:url' content='https://carbonplan.org' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content={`https://carbonplan-assets.s3.amazonaws.com/images/social/${card}.png`}
      />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}

export default Meta
