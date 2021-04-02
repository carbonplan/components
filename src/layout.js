import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Dimmer from './dimmer'
import Metadata from './metadata'

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
}) => {
  footer = footer == null ? true : footer
  header = header == null ? true : header
  metadata = metadata == null ? 'mouse' : metadata
  links = links == null ? 'remote' : links
  dimmer = dimmer == null ? true : dimmer

  return (
    <>
      <Meta card={card} description={description} title={title} />
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {header && (
          <Box
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
              zIndex: 1000,
            }}
          >
            <Container>
              <Header mode={links} status={status} />
            </Container>
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          <Container>{children}</Container>
        </Box>
        {footer && (
          <Box
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
        {dimmer && (
          <Box
            sx={{
              position: 'fixed',
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
