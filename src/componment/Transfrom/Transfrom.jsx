import React from 'react';

const Transfrom = () => {
    return (
        <div className='bg-violet-600'>
            <div className='space-y-4 p-20'>
                <h2 className='font-bold text-2xl md:text-4xl text-white text-center'>Ready to Transform Your Workflow?</h2>
                <p className='text-center font-semibold text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. <br /><span className='text-center'>Start your free trial today.</span> </p>

                <div className='flex justify-center gap-4'>
                    <button className='btn bg-white text-violet-600 rounded-full'>Explore Products</button>
                    <button className='btn btn-outline text-white rounded-full'>View Pricing</button>
                </div>
                <h2 className='text-center font-semibold text-gray-300'>14-day free trial • No credit card required • Cancel anytime</h2>
            </div>
        </div>
    );
};

export default Transfrom;