import React from 'react'

const Testimonials = ({ heading, subheading, content, bgColor }) => {
  return (
    <div className={`testimonials bg-${bgColor}`}>
      <div className="testimonial-container">
        <h2>{heading}</h2>
        <p>{subheading}</p>
        {content}
      </div>
    </div>
  )
}

export default Testimonials
