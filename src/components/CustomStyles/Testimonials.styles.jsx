import React from 'react'
import { Global, css } from '@emotion/react'

const TestimonialStyles = () => (
  <Global
    styles={css`
      .testimonials {
      }

      .testimonial-container {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      }
    `}
  />
)

export default TestimonialStyles
