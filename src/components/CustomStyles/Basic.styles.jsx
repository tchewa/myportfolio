import React from 'react'
import { Global, css } from '@emotion/react'

const BasicStyles = ({ bgColor }) => (
  <Global
    styles={(theme) => css`
      background-color: ${bgColor};
      width: 100%;

      .content-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    `}
  />
)

export default BasicStyles
