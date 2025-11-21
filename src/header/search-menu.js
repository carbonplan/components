import React, { useEffect, useState } from 'react'
import { Box, Flex, Link } from 'theme-ui'
import { Arrow, RotatingArrow } from '@carbonplan/icons'
import Input from '../input'
import Row from '../row'
import Column from '../column'
import Button from '../button'

const HoverArrow = ({ sx }) => {
  return (
    <Arrow
      id='arrow'
      sx={{
        display: 'inline-block',
        position: 'absolute',
        right: ['-60px', '-68px', '-80px', '-104px'],
        top: ['32px', '32px', '46px', '62px'],
        opacity: 0,
        transition: 'opacity 0.2s ease-out',
        transform: 'rotate(45deg)',
        width: [36, 36, 48, 56],
        height: [36, 36, 48, 56],
        ...sx,
      }}
    />
  )
}

const RESOURCES = [
  {
    label: 'Carbon accounting',
    links: [],
  },
  {
    label: 'Climate impacts',
    links: [],
  },
  {
    label: 'Organization',
    links: [],
  },
]

const sx = {
  highlight: {
    mb: [3],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
}

const SearchMenu = ({ setExpanded }) => {
  const [value, setValue] = useState('')
  const [resources, setResources] = useState(RESOURCES)
  const destination = `/search?query=${value.trim()}`

  useEffect(() => {
    fetch('/resources.json')
      .then((res) => res.json())
      .then((res) => {
        if (
          res.length === 3 &&
          res.every((el) => el.label && Array.isArray(el.links))
        ) {
          setResources(res)
        }
      })
      .catch(() => {
        setResources(RESOURCES)
      })
  }, [])

  return (
    <Row columns={[5, 4, 10, 10]}>
      <Column start={1} width={[5, 4, 10, 10]}>
        <Flex
          as='form'
          onSubmit={(e) => {
            e.preventDefault()
            if (value.trim()) {
              window.location.href = destination
            }
          }}
          sx={{
            gap: 7,
            mt: [0, 0, 2, '29px'],
            position: 'relative',
            borderStyle: 'solid',
            borderColor: 'muted',
            borderWidth: '0px',
            borderBottomWidth: '1px',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover  #arrow': {
                opacity: 1,
              },
            },
          }}
        >
          <Box
            as='label'
            htmlFor='search'
            sx={{
              color: 'primary',
              fontSize: [6, 6, 7, 8],
              fontFamily: 'heading',
              letterSpacing: 'heading',
              py: [3, 3, 4, 5],
              textDecoration: 'none',
              display: 'block',
              transition: 'color 0.15s',
            }}
          >
            Search
          </Box>
          <Input
            id='search'
            size='xl'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              borderBottomWidth: 0,
              fontSize: [6, 6, 7, 8],
              flexShrink: 0,
            }}
            color='secondary'
          />
          <Link href={destination}>
            <HoverArrow
              sx={{
                opacity: value ? 1 : 0,
                pointerEvents: value ? 'all' : 'none',
              }}
            />
          </Link>
        </Flex>
      </Column>

      <Column start={1} width={5} sx={{ mt: 8, mb: 6 }}>
        <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0, 0] }}>
          Popular resources
        </Box>
      </Column>
      <Column start={3} width={3}>
        <Box sx={sx.highlight}>{resources[0].label}</Box>
        {resources[0].links.map(({ label, href }) => (
          <Button
            key={href}
            href={href}
            size='md'
            sx={{ mb: [1] }}
            suffix={<RotatingArrow />}
          >
            {label}
          </Button>
        ))}
      </Column>
      <Column start={6} width={3}>
        <Box sx={sx.highlight}>{resources[1].label}</Box>
        {resources[1].links.map(({ label, href }) => (
          <Button
            key={href}
            href={href}
            size='md'
            sx={{ mb: [1] }}
            suffix={<RotatingArrow />}
          >
            {label}
          </Button>
        ))}
      </Column>
      <Column start={9} width={2}>
        <Box sx={sx.highlight}>{resources[2].label}</Box>
        {resources[2].links.map(({ label, href }) => (
          <Button
            key={href}
            href={href}
            size='md'
            sx={{ mb: [1] }}
            suffix={<RotatingArrow />}
          >
            {label}
          </Button>
        ))}
      </Column>
    </Row>
  )
}

export default SearchMenu
