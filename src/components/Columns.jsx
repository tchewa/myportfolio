import React from 'react'

const Columns = ({ heading, children, bgColor }) => {
  return (
    <>
      <div className={`columns-container bg-${bgColor}`}>
        <div className="columns-content">
          <h2>{heading}</h2>
          <div className="column-container">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Columns
