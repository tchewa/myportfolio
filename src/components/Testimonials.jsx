import React from 'react'

const Testimonials = ({ heading, subheading, content, bgColor }) => {
  return (
    <div className={`testimonials bg-${bgColor}`}>
      <div className="testimonial-container">
        {heading && <h2>{heading}</h2>}
        {subheading && <h4>{subheading}</h4>}
        {content}
      </div>
    </div>
  )
}

export default Testimonials
