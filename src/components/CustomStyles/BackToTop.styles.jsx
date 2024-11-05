import React from 'react'
import { Global, css } from '@emotion/react'

const BackToTopStyles = () => (
  <Global
    styles={css`
      .back-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: white;
        color: black;
        border: 2px solid black;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        font-size: 1.5rem;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 16px rgba(125, 125, 125, 0.3);
        transition: box-shadow 0.3s ease, transform 0.3s ease;
        flex-direction: column;

        span {
          display: block;
          width: 15px;
          height: 15px;
          border-left: 2px solid black;
          border-top: 2px solid black;
          transform: rotate(45deg);
          margin-bottom: -10px;
          margin-right: -2px;
        }
      }
    `}
  />
)

export default BackToTopStyles
