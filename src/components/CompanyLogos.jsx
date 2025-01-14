import React from 'react'

import ciena from '../images/company-logos/ciena.png'
import centurylink from '../images/company-logos/centurylink.png'
import directv from '../images/company-logos/directv.png'
import dish from '../images/company-logos/dish.png'
import verizon from '../images/company-logos/verizon.png'
import windstream from '../images/company-logos/windstream.png'

const CompanyLogos = () => {
  return (
    <div className="company-logos">
      <div className="logo-container">
        <img src={ciena} alt="ciena logo" />
        <img src={directv} alt="directv logo" />
        <img src={verizon} alt="verizon logo" />
        <img src={windstream} alt="windstream logo" />
        <img src={centurylink} alt="ciena logo" />
        <img src={dish} alt="dish logo" />
      </div>
    </div>
  )
}

export default CompanyLogos
