import { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212129",
  white: "#FEFEFE",
  gray: "#9F9FA3",
  accent: "#78ff78",
  innerShadow: 'inset -2px 4px 8px rgba(0, 0, 0, 0.25)',
  globalWidth: 600,
  headerHeight: {
    desktop: 220,
    mobile: 110
  },
  anchorHover: () => css`
    box-shadow: inset 0 -0.5rem ${theme.accent}80;
    transition: box-shadow .1s ease;

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0 -1rem ${theme.accent}80;
    }
  `,
  globalPadding: (padding = 6) => css`
    padding: 0 ${padding}% 0 ${padding*2}%;

    ${media.medium(css`
      padding: 0 ${padding*2}% 0 ${padding*4}%;
    `)}

    ${media.xlarge(css`
      padding: 0 ${padding*3}% 0 ${padding*6}%;
    `)}

    ${media.phone(css`
      padding: 0 ${padding}%;
    `)}
  `
}

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480
}

export const media = {
  mobile: inner => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: inner => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,

  medium: inner => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: inner => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: inner => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `
}

const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()


export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/12)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/10)}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size * 1.2}rem;
  `)}
`

const typography = css`
  h1 { ${fontSize(3.2)}; }
  h2 { ${fontSize(2.4)}; }
  h3 { ${fontSize(1.9)}; }

  a {
    text-decoration: none;
    color: ${theme.black};

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
`

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.02rem;
    font-family: ${defaultFont};
    text-rendering: optimizeLegibility;
    color: ${theme.black};
    background: ${theme.white};
  }

  *::selection {
    color: ${theme.black};
    background: ${theme.accent};
  }

  ${typography}
`
