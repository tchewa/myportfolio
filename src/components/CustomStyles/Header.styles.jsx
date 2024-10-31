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
        }

        .title {
          text-decoration: none;
        }

        a:not(.title) {
          text-decoration: none;
          color: inherit;
          font-size: 34px;
          font-family: 'Rubik', sans-serif;
        }
      }
    `}
  />
)

export default HeaderStyles
