import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import Link from 'gatsby-link'

import { heights, dimensions, colors } from '../styles/variables'
import { onEvent } from '../styles/mixins'
import Container from './Container'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  ${onEvent`
    text-decoration: none;
  `};
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/" href="/">
        {title}
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
