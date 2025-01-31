import React from 'react'
import { Global, css } from '@emotion/react'

const MemoryGameStyles = ({ bgColor }) => (
  <Global
    styles={(theme) => css`
      .memory-game-wrapper {
        display: flex;
        gap: 20px;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: center;

        .memory-card {
          background-color: gray;
          height: 200px;
          border: 2px solid black;
          min-width: 300px;
          flex-grow: auto;
          display: flex;
          justify-content: center;
          position: relative;
          cursor: pointer;

          img {
            max-width: 100%;
            max-height: 100%;
          }

          .overlay {
            width: 100%;
            height: 100%;
            background-color: gray;
            position: absolute;
            opacity: 1;

            .hide-overlay {
              opacity: 0;
            }
          }
        }
      }
    `}
  />
)

export default MemoryGameStyles
