import React from 'react'
import { Global, css } from '@emotion/react'

const ColumnsStyles = () => (
  <Global
    styles={css`
      .columns-container {
        width: 100%;
      }

      .columns-content {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        @media screen and (max-width: 1200px) {
          padding: 20px;
        }
      }

      .column-container {
        width: 100%;
        display: flex;
        gap: 20px;
        justify-content: space-evenly;

        @media screen and (max-width: 750px) {
          flex-direction: column;
        }

        .column {
          border-radius: 20px;
          flex-grow: 1;
          max-width: 50%;
          display: flex;
          flex-direction: column;
          gap: 12px;

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
          }
        }
      }
    `}
  />
)

export default ColumnsStyles
