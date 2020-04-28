import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from 'src/components/Content'
import {
  // EuiButton as Button,
  EuiPage as Page,
  // EuiPageBody as Body,
  // EuiPageContent as Content,
  // EuiPageContentBody as ContentBody,
  // EuiPageContentHeader as ContentHeader,
  // EuiPageContentHeaderSection as ContentHeaderSection,
  // EuiPageHeader as Header,
  // EuiPageHeaderSection as HeaderSection,
  // EuiText as Text,
  // EuiTitle as Title,
} from '@elastic/eui'

export const IndexPageTemplate = (props) => {
  const {
    contentComponent,
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
  } = props
  const content = 'bla bla bla'
  const PageContent = contentComponent || Content

  return (
    <Page restrictWidth>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
                  {title}
                </h2>
                <PageContent className='content' content={content} />
                  { title }
                  { heading }
                  { subheading }
                  { description }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
