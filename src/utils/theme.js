import { css } from 'styled-components'

import { media } from './styles'

export const theme = {
  primary: '#212129',
  secondary: '#FEFEFE',
  accent: '#78ffaa',
  gray: '#9F9FA3',
  softGray: '#9F9FA31a',
  globalWidth: 720,
  headerHeight: {
    desktop: 220,
    mobile: 110,
  },
  media,
  globalMargin: (val = 40) => css`
    margin-top: ${val}px;

    ${media.phone(css`
      margin: 40px 0;
    `)}
  `,
  anchorHover: () => css`
    box-shadow: inset 0 -0.3rem ${theme.accent};

    &:hover,
    &:active,
    &:focus {
      box-shadow: inset 0 -3rem ${theme.accent};
      color: ${theme.primary};
    }
  `,
  globalPadding: (padding = 6) => css`
    padding: 0 ${padding}% 0 ${padding * 2}%;

    ${media.medium(css`
      padding: 0 ${padding * 2}% 0 ${padding * 4}%;
    `)}

    ${media.xlarge(css`
      padding: 0 ${padding * 3}% 0 ${padding * 6}%;
    `)}

    ${media.phone(css`
      padding: 0 ${padding}%;
    `)}
  `,
}
