import React from 'react'

const SideBySide = ({ heading, content, image, mobileImage, alt }) => {
  return (
    <div className="sbs-container">
      <div className="sbs-content">
        <h2 className="sbs-heading">{heading}</h2>
        <p>{content}</p>
      </div>
      <div className="sbs-image">
        <img src={image} alt={alt} className="desktop-image" />
        <img src={mobileImage} alt={alt} className="mobile-image" />
      </div>
    </div>
  )
}

export default SideBySide
