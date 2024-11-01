import React from 'react'

const BasicContent = ({ heading, content, bgColor }) => {
  return (
    <div className={`basic-content bg-${bgColor}`}>
      <div className="content-container">
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BasicContent
