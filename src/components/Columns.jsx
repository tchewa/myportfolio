import React from 'react'

const Columns = ({ heading, children, bgColor }) => {
  return (
    <>
      <div className={`columns-container bg-${bgColor ? bgColor : 'white'}`}>
        {heading && <h2 class="heading">{heading}</h2>}
        <div className="columns-content">{children}</div>
      </div>
    </>
  )
}

export default Columns
