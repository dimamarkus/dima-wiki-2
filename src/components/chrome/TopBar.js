import React from 'react'
import PropTypes from 'prop-types'
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
      href: '#',
      onClick: (e) => {
        e.preventDefault()
        console.log('You clicked home')
      },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    },
  ]

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
            iconType='img/logotype.svg'
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
            iconType={ 'sun' }
            onClick={ () => console.log('click') }
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
