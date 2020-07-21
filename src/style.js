import React from 'react'
import ReactDOM from 'react-dom'

const prefix = 'https://carbonplan-assets.s3.amazonaws.com/fonts/relative/'

function Style() {
  return (
    <style jsx global>
      {`
        body {
          overscroll-behavior: none;
        }

        a {
          text-decoration: none;
        }

        sup, sub {
          vertical-align: baseline;
          position: relative;
          top: -0.4em;
        }

        sub { 
          top: 0.4em; 
          font-size: small;
        }

        .no-focus-outline a:focus,
        .no-focus-outline button:focus,
        .no-focus-outline input:focus,
        .no-focus-outline select:focus {
          outline: none !important;
        }

        @font-face {
          font-family: 'relative-book-pro';
          src: url('${prefix}relative-book-pro.eot');
          src: url('${prefix}relative-book-pro.eot?#iefix') format('embedded-opentype'),
               url('${prefix}relative-book-pro.woff2') format('woff2'),
               url('${prefix}relative-book-pro.woff') format('woff'),
               url('${prefix}relative-book-pro.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'relative-medium-pro';
          src: url('${prefix}relative-medium-pro.eot');
          src: url('${prefix}relative-medium-pro.eot?#iefix') format('embedded-opentype'),
               url('${prefix}relative-medium-pro.woff2') format('woff2'),
               url('${prefix}relative-medium-pro.woff') format('woff'),
               url('${prefix}relative-medium-pro.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'relative-mono-11-pitch-pro';
          src: url('${prefix}relative-mono-11-pitch-pro.eot');
          src: url('${prefix}relative-mono-11-pitch-pro.eot?#iefix') format('embedded-opentype'),
               url('${prefix}relative-mono-11-pitch-pro.woff2') format('woff2'),
               url('${prefix}relative-mono-11-pitch-pro.woff') format('woff'),
               url('${prefix}relative-mono-11-pitch-pro.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'relative-faux-book-pro';
          src: url('${prefix}relative-faux-book-pro.eot');
          src: url('${prefix}relative-faux-book-pro.eot?#iefix') format('embedded-opentype'),
               url('${prefix}relative-faux-book-pro.woff2') format('woff2'),
               url('${prefix}relative-faux-book-pro.woff') format('woff'),
               url('${prefix}relative-faux-book-pro.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

      `}
    </style>
  )
}

export default Style