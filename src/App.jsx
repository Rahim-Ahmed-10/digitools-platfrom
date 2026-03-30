import React from 'react';
import './App.css'
import Navbar from './componment/Navbar/Navbar';
import Banner from './componment/Bannar/Banner';
import Footer from './componment/Footer/Footer';
import Rink from './componment/Bannar/Rink';
import Steps from './componment/Steps/Steps';
import Pricing from './componment/Pricing/Pricing';
import Transfrom from './componment/Transfrom/Transfrom';


function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Rink />
    <Steps />
    <Pricing />
    <Transfrom />
    <Footer />
    </>
  )
}

export default App;
