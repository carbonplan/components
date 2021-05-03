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
  footer,
  header,
  title,
  description,
  card,
  children,
  local,
  status,
  metadata,
  links,
  dimmer,
  nav,
  settings,
  guide,
  scrollbar,
}) => {
  footer = footer == null ? true : footer
  header = header == null ? true : header
  metadata = metadata == null ? 'mouse' : metadata
  links = links == null ? 'remote' : links
  dimmer = dimmer == null || dimmer == true ? 'bottom' : dimmer
  guide = guide == null ? true : guide
  scrollbar = scrollbar == null ? true : scrollbar

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
          <Container
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
            <Header
              mode={links}
              status={status}
              nav={nav}
              settings={settings}
              dimmer={dimmer}
            />
          </Container>
        )}
        <Container
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          <FadeIn duration={250}>{children}</FadeIn>
        </Container>
        {footer && (
          <Container
            as='footer'
            sx={{
              width: '100%',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
            }}
          >
            <Footer />
          </Container>
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
