import * as React from 'react'
import Link from 'gatsby-link'

import * as styles from './Header.module.scss'

import Container from './Container'

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <header className={styles.root}>
    <Container className={styles.inner}>
      <Link className={styles.homepageLink} to="/" href="/">{title}</Link>
    </Container>
  </header>
)

export default Header
