/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSideBar={toggleSideBar}></Navbar>
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
