// src/pages/contentful-page.js
import React from 'react'
import { graphql } from 'gatsby'

export default function ContentfulPage({ data }) {
  return (
    <div>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.content.raw}</p>
    </div>
  )
}

export const pageQuery = graphql`
  query contentfulPageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        raw
      }
    }
  }
`
