import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="title code-effect">
        <span className="typing-text">{`<MyPortfolio />`}</span>
      </a>
      <a className="hide-on-mobile" href="/about">
        About Me
      </a>
    </div>
  )
}

export default Header
