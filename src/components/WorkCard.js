import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="thumb1"></img>
                <h1 className="project-title">{props.title}</h1>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">Enroll</NavLink>
                    </div>
                </div>
            </div>
  );
}

export default WorkCard