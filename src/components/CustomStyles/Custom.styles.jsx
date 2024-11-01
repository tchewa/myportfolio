import React from 'react'
import { Global, css } from '@emotion/react'

const CustomStyles = () => (
  <Global
    styles={css`
      .hide-on-mobile {
        @media screen and (max-width: 750px) {
          display: none;
        }
      }

      .self-pic {
        max-width: 200px;
        padding: 20px;
        margin: 0 auto;
        overflow: hidden;

        img {
          width: 100%;
          margin-bottom: -35px;
        }
      }
    `}
  />
)

export default CustomStyles
