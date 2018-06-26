import * as React from 'react'
import { StaticQuery } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: {
        name: string
        url: string
      }
    }
  }
  markdownRemark: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
    }
  }
}

const PageTemplate: React.SFC = () => (
  <IndexLayout>
    <StaticQuery query={query}>
      {(data: StaticQueryProps) => (
        <Page>
          <Container>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Container>
        </Page>
      )}
    </StaticQuery>
  </IndexLayout>
)

export default PageTemplate

const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
