import React from 'react'
import { Global, css } from '@emotion/react'

const ColumnsStyles = () => (
  <Global
    styles={css`
      .column-container {
        border: 2px solid red;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;

        .column {
          border: 2px solid green;
        }
      }
    `}
  />
)

export default ColumnsStyles
