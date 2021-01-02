import React from 'react'

const Globals = () => {
  return (
    <style jsx global>
      {`
        body {
          overscroll-behavior: none;
        }

        a {
          text-decoration: none;
        }

        .no-focus-outline a:focus,
        .no-focus-outline button:focus,
        .no-focus-outline input:focus,
        .no-focus-outline select:focus {
          outline: none !important;
        }

        ::selection {
          background: rgb(128, 128, 128, 0.99);
        }

        ::-moz-selection {
          background: rgb(128, 128, 128, 0.99);
        }
      `}
    </style>
  )
}

export default Globals
