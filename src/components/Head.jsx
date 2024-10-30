import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BaseStyles from './CustomStyles/Global.styles'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <>
      <BaseStyles />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </>
  )
}

export default Head
