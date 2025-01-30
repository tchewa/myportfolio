import React from 'react'

const Column = ({
  link,
  noTarget,
  image,
  alt,
  bgColor,
  singleItem,
  caption,
  github,
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
      {caption && <p className="caption">{caption}</p>}
      {github && (
        <a
          href={github}
          className="github-link"
          target="_blank"
          rel="noreferrer"
        >
          {github}
        </a>
      )}
      {skills && (
        <div className="skills">
          Skills:
          {skills.split(',').map((skill) => (
            <span>{skill}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Column
