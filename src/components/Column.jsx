import React from 'react'

const Column = ({ link, image, alt, caption, github }) => {
  return (
    <div className="column">
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
