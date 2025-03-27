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

      .bg-black {
        .caption {
          color: var(--clr-light);
          opacity: 1;
          text-align: left;
          margin: 0;
        }

        .column {
          border-radius: 10px;
        }
      }

      .github-link,
      .codepen-link {
        img {
          max-width: 40px;
          margin: 0;
          padding: 5px;
        }
      }

      .icon-bg {
        border-radius: 5px;
        background-color: var(--clr-dark);
      }

      .repo-links {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .columns-content {
        width: 100%;
        margin: 0 auto;
        display: flex;
        gap: 20px;

        @media screen and (max-width: 750px) {
          flex-direction: column;
        }

        .skills {
          margin: 0;
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
            display: block;
            margin: 0;

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
          background-color: var(--clr-dark);
          color: var(--clr-light);
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
