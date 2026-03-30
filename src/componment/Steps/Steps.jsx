import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-amber-50 p-15 space-y-4'>
            <div className='text-center space-y-3'>
            <h2 className='font-bold text-5xl'>Get Started in 3 Steps</h2>
            <p className='font-semibold text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex gap-4'>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>01</p>

                    <img className='bg-violet-200 p-2 rounded-full' src={userImg} alt="user.png" />

                    <h2 className='font-semibold text-2xl'>Create Account</h2>
                    <p className=''>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>02</p>

                    <img className='bg-violet-200 p-2 rounded-full' src={packageImg} alt="package.png" />

                    <h2 className='font-semibold text-2xl'>Choose Products</h2>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='rounded-xl p-10 shadow bg-white space-y-4'>
                    <p className='text-end'>03</p>

                    <img className='bg-violet-200 p-2 rounded-full' src={rocketImg} alt="rocket.png" />

                    <h2 className='font-semibold text-2xl'>Start Creating</h2>
                    <p>Download and start using your premium tools immediately.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Steps;