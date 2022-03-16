import { graphql } from 'gatsby'

export const query = graphql`
  fragment featuredImageQuery on MarkdownRemarkFrontmatter {
    featuredImage {
      childImageSharp {
        gatsbyImageData(width: 180, quality: 100, layout: CONSTRAINED)
      }
    }
  }
`
