import React from 'react'
import { Global, css } from '@emotion/react'

const FooterStyles = () => (
  <Global
    styles={css`
      .footer {
        height: 75px;
        bottom: 0;
      }
    `}
  />
)

export default FooterStyles
