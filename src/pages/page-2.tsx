import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

export default () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/" href="/a-markdown-page/">
              Show me some Markdown!
            </Link>
          </li>
          <li>
            <Link to="/" href="/">
              Take me back home.
            </Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)
