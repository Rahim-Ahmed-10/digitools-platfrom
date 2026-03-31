import React, { Suspense } from 'react';
import './App.css'
import Navbar from './componment/Navbar/Navbar';
import Banner from './componment/Bannar/Banner';
import Footer from './componment/Footer/Footer';
import Rink from './componment/Bannar/Rink';
import Steps from './componment/Steps/Steps';
import Pricing from './componment/Pricing/Pricing';
import Transfrom from './componment/Transfrom/Transfrom';
import Main from './componment/Main/Main';


const getMain = async () => {
  const res = await fetch("/data.json");
  return res.json()
}

const mainPromise = getMain()


function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Rink />
    
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Main mainPromise={mainPromise} />
    </Suspense>
    
    <Steps />
    <Pricing />
    <Transfrom />
    <Footer />
    </>
  )
}

export default App;