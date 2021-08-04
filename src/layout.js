import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Dimmer from './dimmer'
import Metadata from './metadata'
import FadeIn from './fade-in'
import Scrollbar from './scrollbar'
import Guide from './guide'

const Layout = ({
  title,
  description,
  card,
  children,
  status,
  nav,
  settings,
  footer = true,
  header = true,
  metadata = 'mouse',
  links = 'remote',
  dimmer = 'bottom',
  guide = true,
  scrollbar = true,
  fade = true,
  container = true,
}) => {
  let content = children
  if (fade) {
    content = <FadeIn duration={250}>{content}</FadeIn>
  }
  if (container) {
    content = <Container>{content}</Container>
  }

  return (
    <>
      {guide && <Guide color={guide} />}
      {scrollbar && <Scrollbar />}
      <Meta card={card} description={description} title={title} />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {header && (
          <Box
            as='header'
            sx={{
              width: '100%',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              position: 'sticky',
              top: 0,
              bg: 'background',
              height: '56px',
              zIndex: 2000,
            }}
          >
            <Container>
              <Header
                mode={links}
                status={status}
                nav={nav}
                settings={settings}
                dimmer={dimmer}
              />
            </Container>
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {content}
        </Box>
        {footer && (
          <Box
            as='footer'
            sx={{
              width: '100%',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
            }}
          >
            <Container>
              <Footer />
            </Container>
          </Box>
        )}
        {dimmer === 'bottom' && (
          <Box
            sx={{
              display: ['none', 'none', 'initial', 'initial'],
              position: ['fixed'],
              right: [13],
              bottom: [17, 17, 15, 15],
            }}
          >
            <Dimmer />
          </Box>
        )}
        {metadata && <Metadata mode={metadata} />}
      </Flex>
    </>
  )
}

export default Layout
