import React from 'react'
import Header from '../components/Header'
import Head from '../components/Head'
import Footer from '../components/Footer'

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
