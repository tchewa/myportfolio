import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

const Wrapper = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  )
}

export default Wrapper
