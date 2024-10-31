import React from 'react'
import { Global, css } from '@emotion/react'

const CustomStyles = () => (
  <Global
    styles={css`
      .self-pic {
        background-color: black;
        max-width: 200px;
        padding: 20px;
        margin: 0 auto;
        border-radius: 100%;
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
