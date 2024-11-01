import React from 'react'
import { Global, css } from '@emotion/react'

const CustomStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      .hide-on-mobile {
        @media screen and (max-width: 750px) {
          display: none;
        }
      }

      .self-pic {
        max-width: 150px;
        padding: 20px;
        margin: 0 auto;
        overflow: hidden;

        img {
          width: 100%;
          margin-bottom: -35px;
        }
      }

      .bg-black {
        background-color: black;
        color: white;
      }

      .company-logos {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;

        .logo-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;

          @media screen and (max-width: 1200px) {
            padding: 0 20px;
          }

          @media screen and (max-width: 1000px) {
            img {
              width: 33%;
            }
          }
        }

        img {
          max-width: 150px;
        }
      }

      .github-link {
        text-decoration: none;
        color: white;
        font-size: 20px;
      }
    `}
  />
)

export default CustomStyles
