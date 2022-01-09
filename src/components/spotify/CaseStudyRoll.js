import React from 'react'
import * as styles from '../../styles/caseStudies.module.css'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

class CaseStudyRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: caseStudies } = data.allMarkdownRemark

    return (
      <div className={styles.caseStudies}>
        {caseStudies &&
          caseStudies.map(({ node: caseStudy }) => (
            <Link
              className={styles.caseStudy}
              key={caseStudy.id}
              to={caseStudy.fields.slug}
            >
              <article>
                {caseStudy.frontmatter.featuredimage ? (
                  <div className={styles.image}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: caseStudy.frontmatter.featuredimage,
                        alt: `featured image thumbnail for caseStudy ${caseStudy.frontmatter.title}`,
                        width:
                          caseStudy.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          caseStudy.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) : null}
                <p className='post-meta'>
                  <Link
                    className='title has-text-primary is-size-4'
                    to={caseStudy.fields.slug}
                  >
                    {caseStudy.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className='subtitle is-size-5 is-block'>
                    {caseStudy.frontmatter.date}
                  </span>
                </p>
              </article>
            </Link>
          ))}
      </div>
    )
  }
}

CaseStudyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function CaseStudyRoll() {
  return (
    <StaticQuery
      query={graphql`
        query CaseStudyRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "case-study" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <CaseStudyRollTemplate data={data} count={count} />
      )}
    />
  )
}
