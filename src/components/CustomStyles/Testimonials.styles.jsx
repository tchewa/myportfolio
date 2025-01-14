import React from 'react'
import { Global, css } from '@emotion/react'

const TestimonialStyles = () => (
  <Global
    styles={css`
      .testimonial-container {
        text-align: center;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;

        @media screen and (max-width: 1200px) {
          padding: 20px;
        }
      }

      .testimonials {
        p {
          text-align: left;
        }
      }

      .recommendation {
        padding: 20px 0;
        font-size: 0.9em;

        img {
          max-width: 100px;
          margin-top: 10px;
        }
      }

      .recommender-title {
        display: block;
        font-style: italic;
        padding-top: 10px;
        font-weight: bold;
        font-size: 1em;
      }

      .recommendation-wrapper {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;

        .recommendation {
          width: 50%;
          max-width: 49%;

          @media screen and (max-width: 650px) {
            max-width: 100%;
            font-size: 1em;
            width: 100%;
          }
        }
      }
    `}
  />
)

export default TestimonialStyles
