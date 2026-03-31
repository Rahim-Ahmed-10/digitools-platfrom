import React, { use } from 'react';
import Card from '../Card/Card';

const Main = ({mainPromise}) => {

    const mains = use(mainPromise);

    return (
        <div className='py-20 container mx-auto'>
              <div className='space-y-4 p-10 text-center'>
            <h2 className='text-4xl font-bold '>Premium Digital Tools</h2>
            <p className='text-gray-400 '>Choose from our curated collection of premium digital products designed <br /> <span className='text-center'>to boost your productivity and creativity.</span></p>

            <div className='flex justify-center gap-2'>
                <button className='btn btn-primary rounded-full'>Products</button>
                <button className='btn rounded-full'>Cart (2)</button>
            </div>
            </div> 

        <div className='grid grid-cols-1 space-y-3 p-6 lg:grid-cols-3 md:grid-cols-2'>
            {mains.map(model => 

              <Card model={model} />
            
            )}
        </div>

        </div>
    );
};

export default Main;