import React from 'react'
import { Global, css } from '@emotion/react'

const BasicStyles = ({ bgColor }) => (
  <Global
    styles={(theme) => css`
      background-color: ${bgColor};
      width: 100%;

      .basic-content {
        padding: 0 20px;
      }

      .content-container {
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
      }
    `}
  />
)

export default BasicStyles
