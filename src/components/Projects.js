import React from 'react'

function Projects(props){
    return(
        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <div className="life-inbalanceimages">
          </div>
          <h3>Balanced LIFE</h3>
          <p>Personally Developed Health and Fitness app</p>
          <p>My background as a health and fitness expert led me to the desire to create an app that would help someone organize their health and fitness side of living so that they could balance it with the rest of their daily lives.  In originally beginning the project, the expectations were not quite as extreme as they ended up being.</p>
          <h3>Pine Tree Clone</h3>
          <p>Awwwards Site Winner Clone - Group Project</p>
          <p>As a group, myself, Donnell Harris and Ricardo Carosa set out to enhance our CSS skills and strengthen our abilities to work as a team towards one common goal of a finished project by a rather rapid deadline.</p>
          {props.close}
        </article>
    )
}

export default Projects