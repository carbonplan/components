<p align="left" >
<a href='https://carbonplan.org'>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://carbonplan-assets.s3.amazonaws.com/monogram/light-small.png">
  <img alt="CarbonPlan monogram." height="48" src="https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png">
</picture>
</a>
</p>

# carbonplan / components

**shared react components for our websites**

[![CI](https://github.com/carbonplan/components/actions/workflows/main.yml/badge.svg)](https://github.com/carbonplan/components/actions/workflows/main.yml)
![NPM Version](https://img.shields.io/npm/v/@carbonplan/components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

These are a set of modular but opinionated [`react`](https://github.com/facebook/react) components. They assume and make extensive use of [`theme-ui`](https://github.com/system-ui/theme-ui) and [`next`](https://github.com/vercel/next.js), and are meant to be composed with our [`theme`](https://github.com/carbonplan/theme). The main use cases are to encourage consistency throughout our design and streamline building our own websites by reducing boilerplate. However, over time we might expand them to enable easier embedding of our content into other websites.

See them demoed at [carbonplan.org/design](https://carbonplan.org/design).

## usage

### Initializing the Theme Provider

When working with some of the components, it is important to have a `theme` object in place. Therefore, to ensure smooth functioning of the components, you must initialize the theme provider in your `Next.js` project. Here's an example of how you can achieve this in `pages/_app.js`:

```jsx
import { ThemeProvider } from 'theme-ui'

// import your theme or define it here
const theme = {}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

### Using the components

To use, import the component(s) you want into your `next` project. Here are some examples.

Use our logo and monogram:

```jsx
import { Logo, Monogram } from '@carbonplan/components'
```

Use our icons:

```jsx
import { Icons } from '@carbonplan/components'

const { Check, Question, Info } = Icons
```

Render a simple layout without a footer

```jsx
import { Layout, Logo, Monogram } from '@carbonplan/components'

const Index = () => {
  return (
    <Layout footer={false}>
      <Logo sx={{ width: 180 }} />
      <Monogram sx={{ width: 60 }} />
    </Layout>
  )
}

export default Index
```

For more usage examples checkout our [`design`](https://github.com/carbonplan/design) sample which showcases all these components live.

## development

To update a component and publish a new version, first make your changes, then follow these steps

- Increase the version number in `package.json`
- `npm run build`
- `npm publish`

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/)-licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a nonprofit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/components/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
