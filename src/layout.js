import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Switch from './switch'
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
  container,
}) => {
  footer = footer == null ? true : footer
  header = header == null ? true : header
  metadata = metadata == null ? 'mouse' : metadata
  links = links == null ? 'remote' : links
  container = container == null ? true : container
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
            {container && (
              <Container
                sx={{
                  px: [3, 4, 4],
                }}
              >
                <Header mode={links} status={status} />
              </Container>
            )}
            {!container && (
              <Box
                sx={{
                  px: [3, 4, 4],
                }}
              >
                <Header mode={links} status={status} />
              </Box>
            )}
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {container && (
            <Container sx={{ px: [3, 4, 4] }}>{children}</Container>
          )}
          {!container && <Box sx={{ px: [3, 4, 4] }}>{children}</Box>}
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
            {container && (
              <Container
                sx={{
                  px: [3, 4, 4],
                }}
              >
                <Footer />
              </Container>
            )}
            {!container && (
              <Box
                sx={{
                  px: [3, 4, 4],
                }}
              >
                <Footer />
              </Box>
            )}
          </Box>
        )}
        <Box
          sx={{
            position: 'fixed',
            right: 17,
            bottom: 17,
          }}
        >
          <Switch />
        </Box>
        {metadata && <Metadata mode={metadata} />}
      </Flex>
    </>
  )
}

export default Layout
