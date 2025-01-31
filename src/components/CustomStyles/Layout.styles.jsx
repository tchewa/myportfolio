import React from 'react'
import { Global, css } from '@emotion/react'

const LayoutStyles = () => (
  <Global
    styles={css`
      .centered-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      }

      .centered-content {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 30px 20px;

        @media screen and (max-width: 750px) {
          padding: 0 20px;
        }
      }

      #gatsby-focus-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: space-between;
      }
    `}
  />
)

export default LayoutStyles
