import React from 'react'
import CSS3 from '../images/icons/css3.svg'
import Javascript from '../images/icons/javascript.svg'
import HTML from '../images/icons/html.svg'
import Express from '../images/icons/express.svg'
import Git from '../images/icons/git.svg'
import NodeIcon from '../images/icons/node.svg'
import Postgres from '../images/icons/postgres.svg'
import ReactIcon from '../images/icons/react.svg'
import Redux from '../images/icons/redux.png'

function Skills(props){
    return(
        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <section className="icons">
            <div className="icon-container">
                <span className="image main icon"><img src={CSS3} alt="CSS3 Icon" /></span>
                <br />
                <p>CSS3</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Javascript} alt="Javascript Icon" /></span>
                <br />
                <p>Javascript</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={HTML} alt="HTML Icon" /></span>
                <br />
                <p>HTML</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Express} alt="Express Icon" /></span>
                <br />
                <p>Express</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Git} alt="Git Icon" /></span>
                <br />
                <p>Git</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={NodeIcon} alt="Node Icon" /></span>
                <br />
                <p>Node</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Postgres} alt="Postgres Icon" /></span>
                <br />
                <p>PostgreSQL</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={ReactIcon} alt="React Icon" /></span>
                <br />
                <p>React</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Redux} alt="Redux Icon" /></span>
                <br />
                <p>Redux</p>
            </div>
          </section>
          {props.close}
        </article>
    )
}

export default Skills