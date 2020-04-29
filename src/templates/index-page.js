import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from 'src/components/Layout'
import Content from 'src/components/Content'
import Features from 'src/components/Features'
import BlogRoll from 'src/components/BlogRoll'
import {
  EuiButton,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiText,
} from '@elastic/eui';

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
  const backgroundImage = `url(${ !!image.childImageSharp ? image.childImageSharp.fluid.src : image })`
  console.log('backgroundImage', backgroundImage)

  return (
    <Layout>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>{ title }</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton
            iconType="logoGithub"
            href="https://github.com/elastic/gatsby-eui-starter"
            fill>
            Open in Github
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>{ subheading }</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiTitle>
            <h3>{mainpitch.title}</h3>
          </EuiTitle>
          <EuiText>
            <p>
              {mainpitch.description}
            </p>
            <h3>Running locally</h3>
            <h3>
              {heading}
            </h3>
            <p>{description}</p>
            <Link className="btn" to="/products">
              See all products
            </Link>
            <h3>
              Latest stories
            </h3>
          </EuiText>
          <Features gridItems={intro.blurbs} />
          <BlogRoll />
          <PageContent className='content' content={content} />
        </EuiPageContentBody>
      </EuiPageContent>
    </Layout>
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
