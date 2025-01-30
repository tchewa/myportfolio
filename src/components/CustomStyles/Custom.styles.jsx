import React from 'react'
import { Global, css } from '@emotion/react'

const CustomStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        overflow-x: hidden;
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
        padding: 20px 0;
      }

      .company-logos {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;

        .logo-container {
          max-width: 1200px;
          width: 100%;
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

          @media screen and (max-width: 750px) {
            width: unset;
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

      .bg-white {
        background-color: white;
        color: black;
      }

      .bg-gray {
        background-color: #dddddd;
        padding: 20px 0;
        border-radius: 30px;

        & * {
          color: black;
        }
      }

      .social-logo {
        border-radius: 30px;
        border: 2px solid black;
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 750px) {
          width: 40px;
          height: 40px;
        }

        img {
          max-width: 100%;
        }

        &.email,
        &.email-footer {
          img {
            max-width: 75%;
          }
        }
      }

      .hacker-article {
        text-align: left;
        border-top: 5px solid black;
        padding: 30px 0;

        .article-count {
          display: flex;
          align-items: center;
        }

        a {
          text-decoration: underline;
          color: inherit;
        }

        .article-number {
          font-size: 50px;
          margin-right: 10px;
        }
      }
    `}
  />
)

export default CustomStyles
