import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-amber-50 p-15 space-y-4'>
            <div className='text-center space-y-3'>
            <h2 className='font-bold text-2xl md:text-4xl '>Get Started in 3 Steps</h2>
            <p className='font-semibold text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>01</p>

                    <div className='flex justify-center'>
                        <img className='bg-violet-200 p-2 rounded-full object-contain' src={userImg} alt="user.png" />
                    </div>

                    <h2 className='font-semibold text-2xl text-center'>Create Account</h2>
                    <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>02</p>

                   <div className='flex justify-center'>
                     <img className='bg-violet-200 p-2 rounded-full object-contain' src={packageImg} alt="package.png" />
                   </div>

                    <h2 className='font-semibold text-2xl text-center'>Choose Products</h2>
                    <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>03</p>

                   <div className='flex justify-center'>
                         <img className='bg-violet-200 p-2 rounded-full object-contain' src={rocketImg} alt="rocket.png" />
                   </div>

                    <h2 className='font-semibold text-2xl text-center'>Start Creating</h2>
                    <p className='text-center'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Steps;