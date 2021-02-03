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

  const Wrapper = ({ component }) => {
    const sx = { px: [3, 4, 4] }
    if (container) return <Container sx={sx}>{component}</Container>
    return <Box sx={sx}>{component}</Box>
  }

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
            <Wrapper>
              <Header mode={links} status={status} container={container} />
            </Wrapper>
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          <Wrapper>{children}</Wrapper>
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
            <Wrapper>
              <Footer />
            </Wrapper>
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
