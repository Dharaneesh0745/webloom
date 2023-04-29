import "./HeroImgStyles.css";
import IntroImg from "../assets/about2.jpg";

import { Link } from "react-router-dom";

import React from 'react';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={ IntroImg } alt="IntroImg"></img>
        </div>
        <div className="content">
            <h1>Welcome to Webloom</h1>
            <div>
                <Link to="/project" className="btn">
                    Projects
                </Link>
                <Link to="/contact" className="btn">
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg