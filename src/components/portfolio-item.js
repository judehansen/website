import React from "react"

export default (props) => (
  <a className="piece" href={props.url} target={props.target} disabled={props.disabled}>
    <div className="image" style={{'backgroundImage' : 'url('+props.bgImage+')'}}></div>
    <p className="description">
        <span className="title">{props.title}</span>
    </p>
  </a>
)