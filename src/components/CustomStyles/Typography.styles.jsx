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
      .title,
      .logo-title {
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
        margin: 0;
      }

      h1,
      .title {
        font-size: 40px;

        @media screen and (max-width: 750px) {
          font-size: 30px;
        }
      }

      h2 {
        font-size: 34px;

        @media screen and (max-width: 750px) {
          font-size: 25px;
        }
      }

      h3 {
        font-size: 28px;

        @media screen and (max-width: 750px) {
          font-size: 22px;
        }
      }

      .heading {
        text-decoration: underline;
      }

      body {
        font-family: 'Alegreya', serif;
        font-size: 24px;
        margin: 0;

        @media screen and (max-width: 750px) {
          font-size: 20px;
        }

        p {
          margin: 0;

          &.large {
            font-size: 30px;
            max-width: 800px;

            @media screen and (max-width: 750px) {
              font-size: 24px;
            }
          }

          &.medium {
            font-size: 27px;
          }

          &.caption {
            font-weight: bold;
            opacity: 0.75;
            text-align: center;
          }
        }
      }
    `}
  />
)

export default TypographyStyles
