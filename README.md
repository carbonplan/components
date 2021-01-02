<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / components

**shared react components for our websites**

[![GitHub][github-badge]][github]
![Build Status][]
![MIT License][]
![NPM Version][]

[github]: https://github.com/carbonplan/components
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[build status]: https://flat.badgen.net/github/checks/carbonplan/components
[mit license]: https://flat.badgen.net/badge/license/MIT/blue
[npm version]: https://flat.badgen.net/npm/v/@carbonplan/components

These are a set of modular but opinionated `react` components. They assume and make extensive use of `theme-ui` and `next`, and are meant to be composed with our [theme](https://github.com/carbonplan/theme). The main use cases are to encourage consistency throughout our design and streamline building our own websites by reducing boilerplate. However, over time we might expand them to enable easier embedding of our content into other websites.

## usage

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
  return <Layout footer={false}>
    <Logo sx={{width: 180}}/>
    <Monogram sx={{width: 60}}/>
  </Layout>
}

export default Index
````

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization working on the science and data of carbon removal. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/components/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
