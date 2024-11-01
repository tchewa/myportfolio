import React from 'react'

import reactLogo from '../images/company-logos/react.png'
import gatsbyLogo from '../images/company-logos/gatsby.png'
import graphqlLogo from '../images/company-logos/graphql.png'
import contentfulLogo from '../images/company-logos/contentful.png'

const MobileImageStack = () => {
  return (
    <div className="mobile-image-stack">
      <img src={reactLogo} alt="react logo" />
      <img src={gatsbyLogo} alt="gatsby logo" />
      <img src={contentfulLogo} alt="contentful logo" />
      <img src={graphqlLogo} alt="graphql logo" />
    </div>
  )
}

export default MobileImageStack
