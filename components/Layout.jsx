import React from 'react'
import { Footer, Header } from '.';
import Instagram from './Instagram';
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Instagram/>
        <Footer/>
    </>
  )
}

export default Layout