import React from 'react'
import { Global, css } from '@emotion/react'

const TypographyStyles = () => (
  <Global
    styles={css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .title {
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
        margin: 0;
        color: white;
      }

      h1,
      .title {
        font-size: 48px;
      }

      h2 {
        font-size: 30px;
      }

      body {
        font-family: 'Alegreya', serif;
        font-size: 24px;
        margin: 0;
        color: white;

        p {
          margin: 0;

          &.large {
            font-size: 30px;
          }
        }
      }
    `}
  />
)

export default TypographyStyles
