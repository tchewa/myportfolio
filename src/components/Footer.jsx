import React from 'react'
import linkedin from '../images/linkedin-footer.png'
import email from '../images/email-icon-white.png'
import linkedinwhite from '../images/linkedin-header.png'
import emailwhite from '../images/email-icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
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
              src={linkedinwhite}
              className="hide-default"
              alt="linkedin white icon"
            />
          </a>
          <a
            className="social-logo email-footer"
            href="mailto: ryan.wassom.79@gmail.com?subject=Portfolio Email"
          >
            <img src={email} className="hide-on-hover" alt="email icon" />
            <img
              src={emailwhite}
              className="hide-default"
              alt="email white icon"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
