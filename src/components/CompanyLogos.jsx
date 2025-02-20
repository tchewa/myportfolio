import React from 'react'

import ciena from '../images/company-logos/ciena.png'
import centurylink from '../images/company-logos/centurylink.png'
import directv from '../images/company-logos/directv.png'
import dish from '../images/company-logos/dish.png'
import verizon from '../images/company-logos/verizon.png'
import windstream from '../images/company-logos/windstream.png'
import grandamerica from '../images/company-logos/grand-america.webp'
import zions from '../images/company-logos/zions.png'
import mini from '../images/company-logos/mini-logo.svg'
import nbaz from '../images/company-logos/nbaz.png'
import cbt from '../images/company-logos/cbt.webp'
import amegy from '../images/company-logos/amegy.png'

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
      <div className="logo-container">
        <img src={grandamerica} alt="grand america logo" />
        <img src={mini} alt="mini logo" />
        <img src={nbaz} alt="national bank of arizona logo" />
        <img src={cbt} alt="california bank and trust logo" />
        <img src={amegy} alt="amegy bank logo" />
        <img src={zions} alt="zions logo" />
      </div>
    </div>
  )
}

export default CompanyLogos
