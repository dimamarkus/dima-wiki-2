/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'

// @ts-ignore
import moon from 'src/components/chrome/assets/moon.svg'
// @ts-ignore
import sun from 'src/components/chrome/assets/sun.svg'

import {
  EuiButton,
  // @ts-ignore
  EuiHeader,
  // @ts-ignore
  EuiPage,
  // @ts-ignore
  EuiHeaderSection,
  // @ts-ignore
  EuiHeaderSectionItem,
  // @ts-ignore
  EuiHeaderSectionItemButton,
  // @ts-ignore
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  // @ts-ignore
  EuiNavDrawerGroup,
  // @ts-ignore
  EuiNavDrawer,
  EuiHorizontalRule,
  // @ts-ignore
  EuiShowFor,
} from '@elastic/eui'

import { TopLinks } from 'src/components/navigation_links/top_links'
import { SolutionLinks } from 'src/components/navigation_links/solution_links'
import { ExploreLinks } from 'src/components/navigation_links/explore_links'
import { AdminLinks } from 'src/components/navigation_links/admin_links'

export const ThemeContext = React.createContext('dark')

const localStorageIsAvailable = typeof localStorage !== 'undefined'

if (localStorageIsAvailable && localStorage.getItem('theme') === 'dark') {
  require('src/themes/theme_dark.scss')
} else {
  require('src/themes/theme_light.scss')
}


export default class Chrome extends React.Component {
  initialTheme = localStorageIsAvailable && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'

  constructor(props) {
    super(props)
    this.state = {
      theme: this.initialTheme,
      themeIsLoading: false,
    }
  }

  handleChangeTheme = () => {
    this.setState(
      {
        theme: this.state.theme === 'dark' ? 'light' : 'dark',
        themeIsLoading: true,
      },
      () => {
        localStorage.setItem('theme', this.state.theme)
        window.location.reload()
      }
    )
  }

  renderLogo() {
    return (
      <EuiHeaderLogo
        iconType='logoElastic'
        href='/'
        aria-label='Goes to home'
      />
    )
  }

  renderMenuTrigger() {
    return (
      <EuiHeaderSectionItemButton
        aria-label='Open nav'
        onClick={() => this.navDrawerRef.toggleOpen()}>
        <EuiIcon type='apps' href='#' size='m' />
      </EuiHeaderSectionItemButton>
    )
  }

  renderBreadcrumbs() {
    const breadcrumbs = [
      {
        text: 'Home',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
          console.log('You clicked home')
        },
        'data-test-subj': 'breadcrumbsAnimals',
        className: 'customClass',
      },
    ]

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />
  }

  setNavDrawerRef = (ref) => (this.navDrawerRef = ref)

  render() {
    const isDarkTheme = localStorage.getItem('theme') === 'dark'
    const themeIcon = isDarkTheme ? sun : moon

    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <EuiHeader className='chrHeader' position='fixed'>
          <EuiHeaderSection grow={false}>
            <EuiShowFor sizes={['xs', 's']}>
              <EuiHeaderSectionItem border='right'>
                { this.renderMenuTrigger() }
              </EuiHeaderSectionItem>
            </EuiShowFor>
            <EuiHeaderSectionItem border='right'>
              { this.renderLogo() }
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem border='right'>
              { /* <HeaderSpacesMenu /> */ }
            </EuiHeaderSectionItem>
          </EuiHeaderSection>

          { this.renderBreadcrumbs() }

          <EuiHeaderSection side='right'>
            <EuiHeaderSectionItem className='chrHeader__themeSection'>
              <EuiButton
                size='s'
                iconType={ themeIcon }
                onClick={ () => this.handleChangeTheme() }
                isLoading={ this.state.themeIsLoading }>
                Switch Theme
              </EuiButton>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>
        <EuiNavDrawer ref={ this.setNavDrawerRef }>
          <EuiNavDrawerGroup listItems={ TopLinks } />
          <EuiHorizontalRule margin='none' />
          <EuiNavDrawerGroup listItems={ ExploreLinks } />
          <EuiHorizontalRule margin='none' />
          <EuiNavDrawerGroup listItems={ SolutionLinks } />
          <EuiHorizontalRule margin='none' />
          <EuiNavDrawerGroup listItems={ AdminLinks } />
        </EuiNavDrawer>
        <EuiPage restrictWidth>
          { this.props.children }
        </EuiPage>
      </ThemeContext.Provider>
    )
  }
}
