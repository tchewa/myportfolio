import React from 'react'
import Header from '../components/Header'
import Head from '../components/Head'
import Footer from '../components/Footer'
import BackToTopButton from './BackToTopButton'

const Wrapper = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default Wrapper
