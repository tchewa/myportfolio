import React from 'react'
import { Global, css } from '@emotion/react'

const WrapperStyles = () => (
    <Global
    styles={css`
        .wrapper {
            border: 2px solid red;
            max-width: 1200px;
        }
    `}
)