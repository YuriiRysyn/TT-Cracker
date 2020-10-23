import React from 'react';

import './AboutCracker.scss';
import cracker from '../../../img/About-cracker.svg'

export const AboutCracker = () => (
  <section className="main_about-cracker about-cracker">
    <div className="about-cracker__content-wrapper">
      <h2 className="about-cracker__headling">
        About cracker
      </h2>
      <img 
        className="about-cracker__img"
        src={cracker} 
        alt="Cracker"
      />
      <div className="about-cracker__content">
        <p className="about-cracker__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, 
          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className="about-cracker__logo">
        Cracker
      </p>
      </div>
    </div>
    
  </section>
)