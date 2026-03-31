import React, { use } from 'react';
import Card from '../Card/Card';

const Main = ({ mainPromise, cards, setCard }) => {

    const mains = use(mainPromise);
    
        

    return (
        <div className='py-5 container mx-auto'>
              <div className='space-y-4 p-10 text-center'>
            <h2 className='text-4xl lg:text-5xl font-bold leading-tight tracking-tighter'>Premium Digital Tools</h2>
            <p className='text-gray-400 '>Choose from our curated collection of premium digital products designed <br /> <span className='text-center'>to boost your productivity and creativity.</span></p>
                   
            </div>

        <div className='grid grid-cols-1 space-y-3 lg:grid-cols-3 md:grid-cols-2'>
            {mains.map(model => 

              <Card key={model.id} model={model} cards={cards} setCard={setCard} />
            
            )}
        </div>

        </div>
    );
};

export default Main;