import React from 'react';

import './AboutUs.scss';

export const AboutUs = () => (
  <section className="main__about-us about-us">

    <div className="about-us__main-text">
      <p className="about-us__text">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
        <br/>
        Lorem ipsum dolor sit amet,
      </p>
      <hr className="about-us__line"/>
    </div>

    <h2 className="about-us__headling">
      MOSTLY&nbsp;TASTES
      WITH FRESHES  
    </h2>

    <button className="about-us__btn">
      taste it
    </button>
  </section>
);