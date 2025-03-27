import React from 'react'
import { Global, css } from '@emotion/react'

const FooterStyles = () => (
  <Global
    styles={css`
      .footer {
        margin-top: -40px;
        padding: 20px 0 20px;
        background-color: var(--clr-dark);

        @media screen and (max-width: 750px) {
          border-top: 2px solid var(--clr-light);
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;

          .social-logo {
            border: 2px solid var(--clr-light);
          }

          @media screen and (max-width: 1200px) {
            padding: 0 20px;
          }

          a {
            color: var(--clr-light);
            text-decoration: none;
          }
        }
      }

      .code-effect {
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        border-right: 2px solid var(--clr-dark);
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
          border-color: var(--clr-light);
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
        &.email-footer {
          &:hover {
            .hide-default {
              display: block;
            }

            .hide-on-hover {
              display: none;
            }
          }
        }

        &.email-footer {
          &:hover {
            background-color: var(--clr-light);
          }
        }
      }
    `}
  />
)

export default FooterStyles
