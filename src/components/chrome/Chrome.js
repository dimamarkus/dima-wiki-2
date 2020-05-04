import React from 'react'
import { useSelector } from 'react-redux'

import {
  // @ts-ignore
  EuiPage,
  // @ts-ignore
  EuiPageBody,
  // @ts-ignore
  EuiPageSideBar,
} from '@elastic/eui'

import TopBar from 'src/components/chrome/TopBar'
import SideNav from 'src/components/SideNav'

const Chrome = ({ children }) => {
  const isDarkMode = useSelector(state => state.app.isDarkMode)

  if (isDarkMode) {
    require('src/themes/theme_dark.scss')
  } else {
    require('src/themes/theme_light.scss')
  }

  return (
    <>
      <TopBar />
      <EuiPage>
        <EuiPageSideBar>
          <SideNav />
        </EuiPageSideBar>
        <EuiPageBody component="div">
          { children }
        </EuiPageBody>
      </EuiPage>
    </>
  )
}

export default Chrome