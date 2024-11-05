import React from 'react'

import WrapperStyles from './Wrapper.styles'
import TypographyStyles from './Typography.styles'
import HeaderStyles from './Header.styles'
import LayoutStyles from './Layout.styles'
import CustomStyles from './Custom.styles'
import SideBySideStyles from './SideBySide.styles'
import ColumnsStyles from './Columns.styles'
import BasicStyles from './Basic.styles'
import TestimonialStyles from './Testimonials.styles'
import FooterStyles from './Footer.styles'
import BackToTopStyles from './BackToTop.styles'

const BaseStyles = () => (
  <>
    <HeaderStyles />
    <LayoutStyles />
    <WrapperStyles />
    <TypographyStyles />
    <CustomStyles />
    <SideBySideStyles />
    <ColumnsStyles />
    <BasicStyles />
    <TestimonialStyles />
    <BackToTopStyles />
    <FooterStyles />
  </>
)

export default BaseStyles
