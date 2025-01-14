import React from 'react'

const Testimonials = ({ heading, subheading, content, bgColor }) => {
  return (
    <div className={`testimonials bg-${bgColor}`}>
      <div className="testimonial-container">
        <div className="recommendation-wrapper">
          {heading && <h2>{heading}</h2>}
          {subheading && <h3>{subheading}</h3>}
          {content}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
