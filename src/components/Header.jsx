import React from 'react'
import linkedin from '../images/linkedin-header.png'
import linkedinblack from '../images/linkedin-footer.png'
import email from '../images/email-icon.png'
import emailblack from '../images/email-icon-white.png'
import github from '../images/github-black.png'
import githubblack from '../images/github-inverse.png'

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo-title">
        <span>{`<MyPortfolio />`}</span>
      </a>
      <div className="right-block">
        <a
          className="social-logo linkedin"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/ryanwassom/"
        >
          <img
            src={linkedin}
            rel="noreferrer"
            target="_blank"
            className="hide-on-hover"
            alt="Linkedin icon"
          />
          <img
            src={linkedinblack}
            className="hide-default"
            alt="linkedin black icon"
          />
        </a>
        <a
          className="social-logo github"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/tchewa"
        >
          <img src={github} className="hide-on-hover" alt="github icon" />
          <img
            src={githubblack}
            className="hide-default"
            alt="github black icon"
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
