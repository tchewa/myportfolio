import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BaseStyles from './CustomStyles/Global.styles'
import sitethumbnail from '../images/site-thumbnails/site-thumbnail-2025.png'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta
          property="og:image"
          content={`https://ryanwassomportfolio.netlify.app${sitethumbnail}`}
        />
      </Helmet>
      <BaseStyles />
    </>
  )
}

export default Head
