import React from 'react'
import Header from '../components/Header'
import Head from '../components/Head'

const Wrapper = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <div className="wrapper">{children}</div>
    </>
  )
}

export default Wrapper
