import React from 'react'
import { Global, css } from '@emotion/react'

const WrapperStyles = () => (
  <Global
    styles={css`
      .wrapper {
        margin: 0 auto;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media screen and (max-width: 750px) {
          padding: 0;
        }
      }
    `}
  />
)

export default WrapperStyles
