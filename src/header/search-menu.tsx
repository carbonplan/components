import React, { useEffect, useState } from 'react'
import { Box, Flex, Link, ThemeUIStyleObject } from 'theme-ui'
import { Arrow, RotatingArrow } from '@carbonplan/icons'
import Input from '../input'
import Row from '../row'
import Column from '../column'
import Button from '../button'

const HoverArrow = ({ sx }: { sx: ThemeUIStyleObject }) => {
  return (
    <Arrow
      id='arrow'
      sx={{
        display: 'inline-block',
        position: 'absolute',
        right: ['4px', '-68px', '-80px', '-104px'],
        top: [undefined, undefined, '46px', '62px'],
        bottom: ['4px', '4px', undefined, undefined],
        opacity: 0,
        transition: 'opacity 0.2s ease-out',
        transform: 'rotate(45deg)',
        width: [24, 36, 48, 56],
        height: [24, 36, 48, 56],
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
    mb: [2, 2, 3, 3],
    mt: [3, 3, 0, 0],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
}

type Resource = {
  label: string
  links: { href: string; label: string }[]
}

const SearchMenu = ({}: { setExpanded: (value: boolean) => void }) => {
  const [value, setValue] = useState('')
  const [resources, setResources] = useState<Resource[]>(RESOURCES)
  const destination = `/search?query=${value.trim()}`

  useEffect(() => {
    fetch('/resources.json')
      .then((res) => res.json())
      .then((res: Resource[]) => {
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
    <>
      <Row columns={[6, 6, 10, 10]}>
        <Column start={1} width={[6, 6, 10, 10]}>
          <Flex
            as='form'
            onSubmit={(e) => {
              e.preventDefault()
              if (value.trim()) {
                window.location.href = destination
              }
            }}
            sx={{
              flexDirection: ['column', 'column', 'row', 'row'],
              gap: [0, 0, 7, 7],
              mt: ['1px', 0, 2, '29px'],
              position: 'relative',
              borderStyle: 'solid',
              borderColor: ['secondary', 'secondary', 'muted', 'muted'],
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
              {...{ htmlFor: 'search' }}
              sx={{
                color: 'primary',
                fontSize: [6, 6, 7, 8],
                fontFamily: 'heading',
                letterSpacing: 'heading',
                py: [0, 3, 4, 5],
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
                fontSize: [4, 6, 7, 8],
                flexShrink: 0,
              }}
              color='secondary'
            />
            <Link href={destination}>
              <HoverArrow
                sx={{
                  opacity: value ? 1 : [1, 1, 0, 0],
                  pointerEvents: value ? 'all' : 'none',
                }}
              />
            </Link>
          </Flex>
        </Column>
      </Row>

      <Row
        columns={[6, 6, 10, 10]}
        sx={{ display: ['none', 'grid', 'grid', 'grid'] }}
      >
        <Column start={1} width={5} sx={{ mt: [2, 2, 8, 8], mb: [1, 1, 4, 5] }}>
          <Box as='h2' variant='styles.h2' sx={{ my: 0 }}>
            Popular resources
          </Box>
        </Column>
        <Column start={[1, 1, 2, 2]} width={3}>
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
        <Column start={[4, 4, 5, 5]} width={3}>
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
        <Column start={[1, 1, 8, 8]} width={3} sx={{ mt: [0, 4, 0, 0] }}>
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

      <Row
        columns={[6, 6, 10, 10]}
        sx={{ display: ['grid', 'none', 'none', 'none'] }}
      >
        <Column start={1} width={6}>
          <Box as='h2' variant='styles.h3' sx={{ my: 4 }}>
            Popular resources
          </Box>
          <Box sx={sx.highlight}>{resources[0].label}</Box>
          {resources[0].links.map(({ label, href }) => (
            <Button
              key={href}
              href={href}
              size='xs'
              sx={{ mb: [1] }}
              suffix={<RotatingArrow />}
            >
              {label}
            </Button>
          ))}
        </Column>
        <Column start={1} width={6}>
          <Box sx={sx.highlight}>{resources[1].label}</Box>
          {resources[1].links.map(({ label, href }) => (
            <Button
              key={href}
              href={href}
              size='xs'
              sx={{ mb: [1] }}
              suffix={<RotatingArrow />}
            >
              {label}
            </Button>
          ))}
        </Column>
        <Column start={1} width={6}>
          <Box sx={sx.highlight}>{resources[2].label}</Box>
          {resources[2].links.map(({ label, href }) => (
            <Button
              key={href}
              href={href}
              size='xs'
              sx={{ mb: [1] }}
              suffix={<RotatingArrow />}
            >
              {label}
            </Button>
          ))}
        </Column>
      </Row>
    </>
  )
}

export default SearchMenu
