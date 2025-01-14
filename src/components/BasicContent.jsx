import React from 'react'

const BasicContent = ({
  heading,
  content,
  bgColor,
  centered,
  mainHeading,
  largeContent,
  image,
}) => {
  return (
    <div
      className={`basic-content bg-${bgColor} ${
        centered ? 'centered-content' : ''
      }`}
    >
      <div className="content-container">
        {mainHeading && <h1>{mainHeading}</h1>}
        {image && (
          <div className="self-pic">
            <img src={image} alt="self-pic" />
          </div>
        )}
        {heading && <h2>{heading}</h2>}
        {largeContent && <p className="large">{largeContent}</p>}
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BasicContent
