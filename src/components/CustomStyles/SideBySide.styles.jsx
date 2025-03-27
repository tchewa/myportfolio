import React from 'react'
import { Global, css } from '@emotion/react'

const SideBySideStyles = () => (
  <Global
    styles={css`
      .sbs-container {
        display: flex;
        overflow: hidden;

        &.wrap-image-under-mobile {
          @media screen and (max-width: 1024px) {
            padding-bottom: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .sbs-content {
              width: 100%;
            }
          }
        }

        .sbs-image {
          animation: slideInRight 1s ease-out forwards;
          animation-delay: 3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            width: 50%;
          }

          .mobile-image {
            display: none;
            width: 75%;

            @media screen and (max-width: 750px) {
              display: block;
            }
          }

          .desktop-image {
            @media screen and (max-width: 1024px) {
              display: none;
            }
          }
        }

        .sbs-content {
          animation: slideInLeft 1s ease-out forwards;
          animation-delay: 1.5s;
          width: 50%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-left: calc(50% - 600px);
          justify-content: center;

          @media screen and (max-width: 1250px) {
            padding-left: 20px;
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

      .mobile-image-stack {
        display: none;

        @media screen and (max-width: 1024px) {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-evenly;

          img {
            max-width: 110px;

            @media screen and (max-width: 750px) {
              max-width: 85px;
            }
          }
        }

        @media screen and (max-width: 750px) {
          gap: 10px;
        }
      }
    `}
  />
)

export default SideBySideStyles
