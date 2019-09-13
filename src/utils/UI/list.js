import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { useViewedProject } from '../../utils/hooks'

const Wrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      margin: 2rem 0;
    }
  }
`

const Link = styled(GatsbyLink)`
  font-size: 2.4rem;
  font-weight: 900;

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.gray};
  }

  ${({ checked }) => checked && css`
    color: #6b6b6b;
  `};
`

export const List = ({ data, ...rest }) => {
  const { addViewedProject, viewedProjects } = useViewedProject()

  return (
    <Wrapper {...rest}>
      <ul>
        {data.map(item => (
          <li key={item.slug}>
            <Link
              checked={viewedProjects.some(slug => slug === item.slug)}
              onClick={() => addViewedProject(item.slug)}
              to={'/' + item.slug}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List
