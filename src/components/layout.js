import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal, css } from "styled-components"

import SEO from 'components/seo'
import Footer from 'components/footer'

import { hover, flex } from 'utils/styles'

injectGlobal`
  body {
    background: #111111;
  }
  *::selection {
    color: #FF9800;
    background: #000;
  }

  a {
    border-bottom: 1px solid #00BCD4;
    text-decoration: none;
    color: #fff;

    ${hover(css`
      color: #00BCD4;
      border-bottom: none;
    `)}

    transition: all 0.1s ease;
  }
`

const Main = styled.main`
  background: rgba(28, 28, 28, 0.2);
  height: 100vh;

  ${flex}
`

const Layout = ({ children, location }) => (
  <>
    <SEO path={location.pathname}/>
    <Main>
      {children}
      <Footer />
    </Main>
  </>
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout
