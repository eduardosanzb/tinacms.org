import React from 'react'
import styled from 'styled-components'

import { TinaIcon } from '../logo/TinaIcon'
import { Nav, NavToggle } from './Nav'
import Search from '../search'

const searchIndices = [
  { name: `Tina-Docs-test`, title: `Docs`, hitComp: `DocHit` },
  { name: `Tina-Blogs-test`, title: `Blog`, hitComp: `BlogHit` },
]

export const Header = styled(({ darkHeader, ...styleProps }) => {
  return (
    <header {...styleProps}>
      <TinaIcon />
      <Nav darkNav={darkHeader ? true : false} />
      <Search collapse indices={searchIndices} />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=tinacms&repo=tinacms&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      ></iframe>
    </header>
  )
})`
  position: absolute;
  width: 100%;
  z-index: 100;
  height: 5rem;

  ${TinaIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    @media (min-width: 500px) {
      left: 2rem;
      transform: translate3d(0, -50%, 0);
    }
  }

  ${Nav} {
    @media (max-width: 499px) {
      display: none;
    }

    @media (min-width: 500px) {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }

    @media (min-width: 800px) {
      right: auto;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }

  iframe {
    display: none;

    @media (min-width: 800px) {
      display: block;
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translate3d(0, -50%, 0);
    }
  }
`
