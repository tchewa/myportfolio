import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BaseStyles from './CustomStyles/Global.styles'
import sitethumbnail from '../images/site-thumbnails/site-thumbnail.png'

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
      <meta property="og:image" content={sitethumbnail} />
    </>
  )
}

export default Head
