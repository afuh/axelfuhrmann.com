import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { ExternalLink } from '../../utils/UI/'
import { media } from '../../utils/styles'
import { useProjectData } from '../../utils/hooks'

const Wrapper = styled.div`
  margin-left: 1rem;

  a {
    padding: 0 6px;
    color: ${({ theme }) => theme.secondary};
    font-size: 1.7rem;
    font-weight: 700;
    display: block;
    margin-bottom: 1rem;

    ${media.custom(880, css`
      color: ${({ theme }) => theme.primary};
    `)}

    &:hover,
    &:active,
    &:focus {
      background: ${({ theme }) => theme.gray}80;
      color: ${({ theme }) => theme.secondary};
      }
    }

  ${media.phone(css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 60px;

    a {
      margin-bottom: 0;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `)}
`

const ExternalLinks = ({ id }) => {
  const { url, code } = useProjectData()

  return (
    <Wrapper id={id}>
      <ExternalLink href={url}>Live</ExternalLink>
      {code && <ExternalLink href={code}>Code</ExternalLink>}
    </Wrapper>
  )
}

ExternalLinks.propTypes = {
  id: PropTypes.string
}

export default ExternalLinks
