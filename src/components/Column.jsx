import React from 'react'

const Column = ({ link, image, alt }) => {
  return (
    <div className="column">
      <a href={link}>
        <img src={image} alt={alt} />
      </a>
    </div>
  )
}

export default Column
