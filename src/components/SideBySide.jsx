import React from 'react'
import MobileImageStack from './MobileImageStack'

const SideBySide = ({
  heading,
  content,
  image,
  mobileImage,
  alt,
  darkBg,
  mobileImageStack,
}) => {
  return (
    <div
      className="sbs-container"
      style={{ backgroundColor: darkBg ? 'black' : 'unset' }}
    >
      <div className="sbs-content">
        <h2
          className="sbs-heading"
          style={{ color: darkBg ? 'white' : 'black' }}
        >
          {heading}
        </h2>
        <p style={{ color: darkBg ? 'white' : 'black' }}>{content}</p>
      </div>
      <div className="sbs-image">
        <img src={image} alt={alt} className="desktop-image" />
        {mobileImageStack ? (
          <MobileImageStack />
        ) : (
          <div className="mobile-image">
            <img src={mobileImage} alt={alt} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SideBySide
