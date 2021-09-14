import React from 'react'

const Tracking = ({ id }) => {
  if (!id) {
    return null
  }
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}

export default Tracking
