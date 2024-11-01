import React from 'react'
import { Global, css } from '@emotion/react'

const HeaderStyles = () => (
  <Global
    styles={css`
      .header {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media screen and (max-width: 1250px) {
          width: -webkit-fill-available;
        }

        @media screen and (max-width: 750px) {
          margin: unset;
          width: unset;
          border-bottom: 2px solid black;
        }

        .title {
          text-decoration: none;
          color: black;
        }

        a:not(.title) {
          text-decoration: none;
          color: inherit;
          font-size: 34px;
          font-family: 'Rubik', sans-serif;
        }

        .code-effect {
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          border-right: 2px solid black;
          animation: typing 1s steps(30, end),
            blink-cursor 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 11ch;
          }
        }

        @keyframes blink-cursor {
          50% {
            border-color: transparent;
          }
        }
      }
    `}
  />
)

export default HeaderStyles
