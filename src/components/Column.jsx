import React from 'react'
import githubIcon from '../images/github.png'
import codepenIcon from '../images/codepen.png'

const Column = ({
  link,
  noTarget,
  image,
  alt,
  bgColor,
  singleItem,
  caption,
  github,
  codepen,
  skills,
  rounded,
}) => {
  return (
    <div
      className={`column bg-${bgColor ? bgColor : 'white'} ${
        rounded ? 'rounded' : ''
      } ${singleItem ? 'single-column' : ''}`}
    >
      {link && (
        <a href={link} target={noTarget ? '_self' : '_blank'} rel="noreferrer">
          <img src={image} alt={alt} />
        </a>
      )}
      <div className="repo-links">
        {skills && (
          <div className="skills">
            Skills:
            {skills.split(',').map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
        )}
        {caption && <p className="caption">{caption}</p>}
        {(github || codepen) && (
          <a
            href={github || codepen}
            target="_blank"
            rel="noreferrer"
            className={github ? 'github-link' : 'codepen-link'}
          >
            <div className="icon-bg">
              <img
                src={github ? githubIcon : codepenIcon}
                alt={github ? 'Github Icon' : 'CodePen Icon'}
              />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default Column
