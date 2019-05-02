import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from "styled-components"
import { Location } from '@reach/router'

import SEO from '../../utils/seo'
import { GlobalStyles, theme } from '../../utils/styles'

import Header from './header'
import Footer from './footer'

const Main = styled.main`
  position: relative;

  ${({ theme }) => theme && css`
    min-height: calc(100vh - ${theme.headerHeight.desktop}px);
    background: ${theme.white};
  `};
`

const Layout = ({ children, seo, heading }) => (
  <Location>
    {({ location }) => (
      <>
        <SEO
          {...seo}
          pathname={seo ? seo.pathname : location.pathname}
        />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Header heading={heading} />
            <Main>
              {children}
            </Main>
            <Footer />
          </>
        </ThemeProvider>
      </>
    )}
  </Location>
)

Layout.propTypes = {
  seo: PropTypes.object,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default Layout
