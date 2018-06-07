import React from 'react'
import Link from 'gatsby-link'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Contact from './Contact';

class Main extends React.Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div onClick={(e) => e.stopPropagation()} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}} >
        <About close={close} article={this.props.article} articleTimeout={this.props.articleTimeout}/>
        <Projects close={close} article={this.props.article} articleTimeout={this.props.articleTimeout}/>
        <Skills close={close} article={this.props.article} articleTimeout={this.props.articleTimeout} />
        <Contact close={close} article={this.props.article} articleTimeout={this.props.articleTimeout}/>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main

