import { graphql } from 'gatsby'

export const query = graphql`
  fragment featuredImageQuery on Frontmatter {
    featuredImage {
      childImageSharp {
        gatsbyImageData(width: 180, quality: 100, layout: CONSTRAINED)
      }
    }
  }
`
