import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </>
  )
}

export default Head
