import React from 'react';
import { getInfo } from '../helpers/api';
import Project from './Project';

const Header = (props) => {
  return (
      <div className="header">
        <header><span>{props.title}</span></header>
      </div>
    )
}

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount(){
    const path = this.props.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(this.props.match.params.lang);
    }
  }
  componentWillReceiveProps(nextProps) {
    const path = nextProps.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(nextProps.match.params.lang);
    }
  }
  request(path){
    this.setState({ data: getInfo(path) })
  }
  render () {
    const { data } = this.state
    const path = this.props.match.params.lang
    return (
      <div className="main__section col">
        <Header title={path ? path : "Latests"} />
        <section className="projects col">
          {data.map((a, i) => (<Project key={i} data={a} />))}
        </section>
      </div>
    )
  }
}


export default Projects;