import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from "styled-components"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SocialIcons from '../components/socialIcons'

import FadeIn from '../components/textFadeIn'

import { flex } from '../utils/styles'

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const Content = styled.section`
  height: 100vh;

  ${flex({ dir: 'column' })}
  text-align: center;
`

const Inner = styled.div`
  width: 100%;
  position: relative;
`

const Title = styled.h1`
	font-size: 3.0rem;
  font-weight: 700;
  margin: 0;
`

const SubTitle = styled.h2`
  font-weight: 400;
  margin: 0;
`

const HiddenTitle = styled(Title)`
  position: absolute;
  width: 100%;
  top: 0;
  color: transparent;

  &::selection {
    background: #000;
    color: #fff;
  }
`

const Social = styled(SocialIcons)`
	animation: ${fadeIn} 1s;
`

const IndexPage = ({ location, data: { site: { meta } } }) => (
  <Layout location={location}>
    <Content>
      <Inner>
        <Title>
          <FadeIn text={meta.title} />
        </Title>
        <HiddenTitle>{meta.title.split(" ").reverse().join(" ")}</HiddenTitle>
        <SubTitle>
          <FadeIn text={meta.description} duration={3}/>
        </SubTitle>
      </Inner>
      <Social />
    </Content>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      meta: PropTypes.object.isRequired
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
	{
		site {
			meta: siteMetadata {
				title
				description
				working {
					name
					url
				}
			}
		}
	}
`
