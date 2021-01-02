import React from 'react'
import { Container, Flex, Box, Text } from 'theme-ui'
import Meta from './meta'
import Header from './header'
import Footer from './footer'
import Switch from './switch'

const Layout = ({
  footer,
  header,
  title,
  description,
  card,
  children,
  local,
  status,
}) => {
  footer = footer == null ? true : footer
  header = header == null ? true : header
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
            <Container
              sx={{
                px: [3, 4, 4],
              }}
            >
              <Header local={local} status={status} />
            </Container>
          </Box>
        )}
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {children}
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
            <Container
              sx={{
                px: [3, 4, 4],
              }}
            >
              <Footer />
            </Container>
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
      </Flex>
    </>
  )
}

export default Layout
