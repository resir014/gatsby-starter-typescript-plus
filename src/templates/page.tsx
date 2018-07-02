import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

// prettier-ignore

// There's currently a terribad bug on Gatsby where interface declarations
// won't compile unless you add semicolons. Because of that, this file is
// entirely ignored on Prettier.
//
// https://github.com/gatsbyjs/gatsby/issues/6163
interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        }
      }
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      }
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
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
