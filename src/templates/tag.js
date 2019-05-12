import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'
import { List, Inner } from '../utils/UI'

const TagPage = ({ pageContext, data: { allContentfulProject } }) => {
  const projects = allContentfulProject.edges.map(({ node }) => node)

  return (
    <Layout
      heading={(
        <Link to='/tag'><h1>{pageContext.tag}</h1></Link>
      )}
    >
      <Inner
        as='section'
        paddingTop
      >
        <List data={projects} />
      </Inner>
    </Layout>
  )
}

TagPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default TagPage

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          ...projectInfo
        }
      }
    }
  }
`
