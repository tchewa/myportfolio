import React from 'react'
import linkedin from '../images/linkedin-footer.png'
import email from '../images/email-icon-white.png'
import linkedinwhite from '../images/linkedin-header.png'
import emailwhite from '../images/email-icon.png'
import github from '../images/github-black.png'
import githubblack from '../images/github-inverse.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
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
            <img src={linkedin} className="hide-on-hover" alt="Linkedin icon" />
            <img
              src={linkedinwhite}
              className="hide-default"
              alt="linkedin white icon"
            />
          </a>
          <a
            className="social-logo github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/tchewa"
          >
            <img
              src={githubblack}
              className="hide-on-hover"
              alt="github icon"
            />
            <img
              src={github}
              className="hide-default"
              alt="github black icon"
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
