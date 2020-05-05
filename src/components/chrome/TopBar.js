import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from 'src/state/app'
// @ts-ignore
import moon from 'src/components/chrome/assets/moon.svg'
// @ts-ignore
import sun from 'src/components/chrome/assets/sun.svg'

import {
  EuiButton,
  // @ts-ignore
  EuiHeader,
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
  EuiShowFor,
} from '@elastic/eui'

const TopBar = ({ content, className }) => {
  const breadcrumbs = [
    {
      text: 'Home',
      href: '/',
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    },
  ]

  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.app.isDarkMode)
  const toggleTheme = toggleDarkMode(!isDarkMode)

  return (
    <EuiHeader className='chrHeader' position='fixed'>
      <EuiHeaderSection grow={ false }>
        <EuiShowFor sizes={['xs', 's']}>
          <EuiHeaderSectionItem border='right'>
            <EuiHeaderSectionItemButton
              aria-label='Open nav'
              onClick={ () => console.log('') }>
              <EuiIcon type='apps' href='#' size='m' />
            </EuiHeaderSectionItemButton>
          </EuiHeaderSectionItem>
        </EuiShowFor>
        <EuiHeaderSectionItem border='right'>
          <EuiHeaderLogo
            iconType='/img/logotype.svg'
            href='/'
            aria-label='Goes to home'
          />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem border='right'>
          { /* <HeaderSpacesMenu /> */ }
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderBreadcrumbs breadcrumbs={ breadcrumbs } />

      <EuiHeaderSection side='right'>
        <EuiHeaderSectionItem className='chrHeader__themeSection'>
          <EuiButton
            size='s'
            iconType={ isDarkMode ? sun : moon }
            onClick={ () => dispatch(toggleTheme) }
            isLoading={ false }>
            Subscribe
          </EuiButton>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  )
}

TopBar.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default TopBar