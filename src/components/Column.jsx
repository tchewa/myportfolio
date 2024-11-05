import React from 'react'

const Column = ({ link, image, alt, bgColor, caption, github, rounded }) => {
  return (
    <div
      className={`column bg-${bgColor ? bgColor : 'white'} ${
        rounded ? 'rounded' : ''
      }`}
    >
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
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
    </div>
  )
}

export default Column
