import React from 'react'
import { Helmet } from 'react-helmet'
import Chrome from 'src/components/chrome/Chrome'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => {
  return (
	  <Chrome>
    	<Navbar />
    	{ children }
    	<Footer />
    </Chrome>
  )
}

export default TemplateWrapper
