import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Features from 'src/components/Features'
import BlogRoll from 'src/components/BlogRoll'

import {
  EuiButton as Button,
  EuiPage as Page,
  EuiPageBody as Body,
  EuiPageContent as Content,
  EuiPageContentBody as ContentBody,
  EuiPageContentHeader as ContentHeader,
  EuiPageContentHeaderSection as ContentHeaderSection,
  EuiPageHeader as Header,
  EuiPageHeaderSection as HeaderSection,
  EuiText as Text,
  EuiTitle as Title,
} from '@elastic/eui'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <Page restrictWidth>
    <Body>
      <Header>
        <HeaderSection>
          <Title size="l">
            <h1>{ title }</h1>
          </Title>
        </HeaderSection>
        <HeaderSection>
          <Button
            iconType="logoGithub"
            href="https://github.com/elastic/gatsby-eui-starter"
            fill>
            Open in Github
          </Button>
          <Button
            iconType="logoGithub"
            href="https://github.com/elastic/gatsby-eui-starter"
            fill>
              <Link className="btn" to="/blog">
                Read more
              </Link>
          </Button>
        </HeaderSection>
      </Header>
      <Content>
        <ContentHeader>
          <ContentHeaderSection>
            <Title>
              <h2>{ subheading }</h2>
            </Title>
          </ContentHeaderSection>
          <ContentHeaderSection />
        </ContentHeader>
        <ContentBody>
          <Title>
            <h3>{mainpitch.title}</h3>
          </Title>
          <Text>
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
          </Text>
          <Features gridItems={intro.blurbs} />
          <BlogRoll />
        </ContentBody>
      </Content>
    </Body>
  </Page>
)

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

export const pageQuery = graphql`
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
