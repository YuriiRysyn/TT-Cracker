import React from 'react';
import { Header } from './components/Header/Header';
import { AboutUs } from './components/Main/About-Us/AboutUs'
import { Main } from './components/Main/Main';
import { Footer } from './components//Footer/Footer';


import './App.scss';

const App = () => {
  return (
    <>
      <div className="first-screen-wraper">
        <Header />
        <AboutUs />
      </div>
      <Main />
      <Footer />
    </>
  );
 }

export default App;