import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="Webloom provides," text="free courses."></HeroImg2>
      <Work></Work>
    </div>
  )
}

export default Project;