import React from 'react'
import { Global, css } from '@emotion/react'

const SideBySideStyles = () => (
  <Global
    styles={css`
      .sbs-container {
        display: flex;
        overflow: hidden;

        .sbs-image {
          animation: slideInRight 1s ease-out forwards;
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-right: calc(50% - 580px);

          @media screen an (max-width: 1250px) {
            padding-right: 20px;
          }

          @media screen and (max-width: 750px) {
            justify-content: flex-start;
          }

          img {
            width: 100%;
          }

          .mobile-image {
            display: none;
            width: 75%;

            @media screen and (max-width: 750px) {
              display: block;
            }
          }

          .desktop-image {
            max-width: 75%;

            @media screen and (max-width: 750px) {
              display: none;
            }
          }
        }

        .sbs-content {
          animation: slideInLeft 1s ease-out forwards;
          width: 50%;
          background-color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-left: calc(50% - 580px);
          justify-content: center;

          @media screen and (max-width: 1250px) {
            padding-left: 20px;
          }

          h2,
          p {
            color: black;
          }
        }
      }

      .sbs-content,
      .sbs-image {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }

      @keyframes slideInLeft {
        from {
          transform: translateX(-100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}
  />
)

export default SideBySideStyles
