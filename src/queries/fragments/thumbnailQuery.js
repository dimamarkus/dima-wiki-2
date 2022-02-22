import { graphql } from 'gatsby'

export const query = graphql`
  fragment thumbnailQuery on MarkdownRemarkFrontmatter {
    thumb {
      childImageSharp {
        gatsbyImageData(
          aspectRatio: 1
          quality: 100
          width: 120
          layout: CONSTRAINED
        )
      }
    }
  }
`
