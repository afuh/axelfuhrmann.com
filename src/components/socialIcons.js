import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0;
  max-width: 500px;
`

const Inner = styled.div`
  margin: 10px 0;
`

const Icon = styled.a`
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 22px;
  opacity: 0.6;
`
const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const SocialIcons = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          meta: siteMetadata {
            external {
              name
              url
            }
          }
        }
      }
    `}
    render={({ site: { meta } }) => (
      <Wrapper className={className}>
        <Inner>
          {meta.external.map(page => (
            <Icon key={page.name} href={page.url}>{findIcon(page.name)}</Icon>
          ))}
        </Inner>
      </Wrapper>
    )}
  />
)

SocialIcons.propTypes = {
  className: PropTypes.string
}

export default SocialIcons
