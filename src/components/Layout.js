import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import './all.sass'
import { EuiPageBody } from '@elastic/eui';


const TemplateWrapper = ({ children }) => {
  return (
    <EuiPageBody component="div">
		<Helmet />
    	<Navbar />
    	{ children }
    	<Footer />
    </EuiPageBody>
  )
}

export default TemplateWrapper
