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
          border-bottom: 2px solid var(--clr-dark);
        }

        .title {
          text-decoration: none;
          color: var(--clr-dark);
        }

        a:not(.logo-title) {
          text-decoration: none;
          color: inherit;
          font-size: 34px;
          font-family: 'Rubik', sans-serif;
        }
      }

      .logo-title {
        text-decoration: none;
        color: inherit;
        font-size: 36px;

        @media screen and (max-width: 750px) {
          font-size: 25px;
        }
      }

      .right-block {
        display: flex;
        gap: 15px;

        @media screen and (max-width: 750px) {
          gap: 10px;
        }
      }

      .social-logo {
        .hide-default {
          display: none;
        }

        &.linkedin,
        &.email,
        &.github {
          &:hover {
            .hide-default {
              display: block;
              top: -1px;
              position: relative;
            }

            .hide-on-hover {
              display: none;
            }
          }
        }

        &.email {
          &:hover {
            background-color: var(--clr-dark) !important;
          }
        }
      }
    `}
  />
)

export default HeaderStyles
