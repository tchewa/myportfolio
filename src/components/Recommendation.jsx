import React from 'react'

import linkedin from '../images/linkedin.png'

const Recommendation = ({ title, content, link }) => {
  return (
    <p className="recommendation">
      "{content}"<span className="recommender-title">- {title}</span>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedin logo" />
      </a>
    </p>
  )
}

export default Recommendation
