import React from 'react'
import { Global, css } from '@emotion/react'

const ColumnsStyles = () => (
  <Global
    styles={css`
      .columns-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;

        &.bg-black {
          padding: 20px 0;
        }

        * {
          max-width: 1200px;
          margin: 0 auto;
        }
      }

      .columns-content {
        width: 100%;
        margin: 0 auto;
        display: flex;
        gap: 20px;

        @media screen and (max-width: 750px) {
          flex-direction: column;
          padding: 0 20px;
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;

          @media screen and (max-width: 750px) {
            max-width: unset;
          }

          img {
            display: block;
            width: 100%;
            border-radius: 20px;
          }

          a {
            width: 100%;
            display: block;
            max-width: 75%;

            @media screen and (max-width: 750px) {
              max-width: 100%;
            }
          }

          &.rounded {
            border-radius: 20px;
          }
        }

        em {
          padding: 20px;
        }
      }

      .skills {
        span {
          background-color: black;
          color: white;
          margin: 10px;
          padding: 5px;
          font-size: 0.75em;
          font-family: 'Courier New';
        }
      }

      .single-column {
        max-width: 50%;
      }
    `}
  />
)

export default ColumnsStyles
