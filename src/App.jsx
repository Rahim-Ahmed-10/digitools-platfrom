import React, { Suspense, useState } from 'react';
import './App.css'
import Navbar from './componment/Navbar/Navbar';
import Banner from './componment/Bannar/Banner';
import Footer from './componment/Footer/Footer';
import Rink from './componment/Bannar/Rink';
import Steps from './componment/Steps/Steps';
import Pricing from './componment/Pricing/Pricing';
import Transfrom from './componment/Transfrom/Transfrom';
import Main from './componment/Main/Main';
import AddedCard from './componment/AddedCard/AddedCard';


const getMain = async () => {
  const res = await fetch("/data.json");
  return res.json()
}

const mainPromise = getMain()

   

function App() {

   const [activeTab, setActiveTab] = useState('model');
   const [cards, setCard] = useState([]);
   



  return (
    <>
    <Navbar cardCount={cards.length} />
    <Banner />
    <Rink />

           <div className="tabs tabs-box justify-center bg-transparent pt-20">
              <input onClick={() => setActiveTab("model")}  type="radio" name="my_tabs_1" className="tab rounded-full w-30 font-semibold checked:bg-violet-500 checked:text-white" aria-label="Products" defaultChecked/>
              <input onClick={() => setActiveTab("card")} type="radio" name="my_tabs_1" className="tab rounded-full w-30 font-semibold checked:bg-violet-500 checked:text-white" aria-label={`Card ${cards.length}`} />
            </div>
    
    <Suspense fallback={<span className="loading loading-dots loading-xl flex justify-center"></span>}>
     {activeTab === "model" && <Main mainPromise={mainPromise} activeTab={activeTab} setActiveTab={setActiveTab}  cards={cards} setCard={setCard} />}
    </Suspense>

    {activeTab === "card" && <AddedCard cards={cards} setCard={setCard} />}
    <Steps />
    <Pricing />
    <Transfrom />
    <Footer />
    </>
  )
}

export default App;