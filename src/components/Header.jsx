import React from 'react'
import linkedin from '../images/linkedin-header.png'
import linkedinblack from '../images/linkedin-footer.png'
import email from '../images/email-icon.png'
import emailblack from '../images/email-icon-white.png'

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="title code-effect">
        <span className="typing-text">{`<MyPortfolio />`}</span>
      </a>
      <div className="right-block">
        <a
          className="social-logo linkedin"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ryanwassom/"
        >
          <img src={linkedin} className="hide-on-hover" alt="Linkedin icon" />
          <img
            src={linkedinblack}
            className="hide-default"
            alt="linkedin black icon"
          />
        </a>
        <a
          className="social-logo email"
          href="mailto: ryan.wassom.79@gmail.com?subject=Portfolio Email"
        >
          <img src={email} className="hide-on-hover" alt="email icon" />
          <img
            src={emailblack}
            className="hide-default"
            alt="email black icon"
          />
        </a>
      </div>
    </div>
  )
}

export default Header
