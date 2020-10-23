import React from 'react';
import { AboutCracker } from './About-Cracker/AboutCracker';
import { Constructor } from './Constructor/Constructor';


import './Main.scss';

export const Main = () => (
  <main className="main">
    <AboutCracker />
    <Constructor />
  </main>
);