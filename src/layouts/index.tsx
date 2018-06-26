import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'

import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

// prettier-ignore

// There's currently a terribad bug on Gatsby where interface declarations
// won't compile unless you add semicolons. Because of that, this file is
// entirely ignored on Prettier.
//
// https://github.com/gatsbyjs/gatsby/issues/5789
type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    }
  }
}

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery query={query}>
    {(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  </StaticQuery>
)

export default IndexLayout
