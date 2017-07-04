import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'


const Nav = () => {
  const links = ['JavaScript', 'React', 'Node', 'JQuery', 'API'];
  return (
    <nav className='main__nav nav'>
      <CSSTransitionGroup className='nav__fixed col' component="ul"
        transitionName="slide"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}>
        <li className="l1 page-name">
          <span className="icon-root"></span><Link to="/">axel fuhrmann</Link>
        </li>
        <li className="l2">
          <span className="icon-folder"></span><span>projects</span>
        </li>
        {links.map(link => (
          <li className="l5 lang" key={link}>
            <NavLink className="yellow" activeClassName='nav__active-js' to={`/p/${link}`}>{link.toLowerCase()}</NavLink>
          </li>
        ))}
        <li className="l5">
          <NavLink className="yellow" activeClassName='nav__active-sass' to="/more">more stuff</NavLink>
        </li>
        <li className="l2">
          <span className="icon-folder"></span><span>contact me</span>
        </li>
        <li className="l4">
          <span className="icon-github"></span><a className="contact" target="_blank" rel='noreferrer noopener' href="https://github.com/afuh">github</a>
        </li>
        <li className="l4">
          <span className="icon-codepen"></span><a className="contact" target="_blank" rel='noreferrer noopener' href="https://codepen.io/mage20">codepen</a>
        </li>
        <li className="l4">
          <span className="icon-mail"></span><a className="contact" href="mailto:axelfuh@gmail.com">email</a>
        </li>
      </CSSTransitionGroup>
    </nav>
  )
}


export default Nav;
