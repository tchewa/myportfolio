import React from 'react'

import WrapperStyles from './Wrapper.styles'
import TypographyStyles from './Typography.styles'
import HeaderStyles from './Header.styles'
import LayoutStyles from './Layout.styles'
import CustomStyles from './Custom.styles'
import SideBySideStyles from './SideBySide.styles'
import ColumnsStyles from './Columns.styles'

const BaseStyles = () => (
  <>
    <HeaderStyles />
    <LayoutStyles />
    <WrapperStyles />
    <TypographyStyles />
    <CustomStyles />
    <SideBySideStyles />
    <ColumnsStyles />
  </>
)

export default BaseStyles
