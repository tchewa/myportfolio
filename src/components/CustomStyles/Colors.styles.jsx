import React from 'react'
import { Global, css } from '@emotion/react'

const ColorStyles = () => (
  <Global
    styles={() => css`
      :root {
        --clr-dark: #000;
        --clr-light: #fff;
        --clr-gray: #ddd;
        --clr-slate: #565656;
      }
    `}
  />
)

export default ColorStyles
