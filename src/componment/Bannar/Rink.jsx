import React from 'react';

const Rink = () => {
    return (
        <div className='bg-violet-500  grid justify-center  gap-30 text-center p-20 md:grid-cols-3'>

            <div className='space-y-2'>
                <h2 className='text-5xl font-bold text-white'>50+</h2>
                <p className='text-white font-semibold'>Active Users</p>
            </div>
            <div className='space-y-2'>
                <h2 className='text-5xl font-bold text-white'>200+</h2>
                <p className='text-white font-semibold'>Premium Tools</p>
            </div>
            <div className='space-y-2'>
                <h2 className='text-5xl font-bold text-white'>4.9</h2>
                <p className='text-white font-semibold'>Rating</p>
            </div>
            
        </div>
    );
};

export default Rink;