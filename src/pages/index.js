import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import { FadeInText } from '../utils/UI'
import { useSiteMeta } from '../utils/hooks'

import Layout from '../components/layout'
import Projects from '../components/projects'

const IndexPage = ({ data: { contentfulProjects: { projects } } }) => {
  const { title, description } = useSiteMeta()

  return (
    <Layout
      heading={(
        <>
          <h1>
            <FadeInText
              text={title}
              duration={5}
            />
          </h1>
          <h2>{description}</h2>
        </>
      )}
    >
      <Projects data={projects} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      meta: PropTypes.object.isRequired
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query HOME_QUERY {
    contentfulProjects {
      projects {
        id
        slug
        title
      }
    }
  }
`
