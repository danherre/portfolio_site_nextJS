import React from 'react';
import Image from 'next/image';
import Bio from './Bio';
import { SWEBio } from './SWEBio';

export const HeroSection = () => {
  return <SWEBio />;
  {
    /* 
      code for acting site
      <div>
      <div className='hidden lg:block'>
        <div className='flex h-screen items-center'>
          <div className='relative h-full w-1/2 overflow-hidden'>
            <div className='absolute left-0 top-0 h-full w-full'>
              <img
                src='/headshot.jpg'
                alt='Headshot'
                className='h-auto max-h-screen w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='w-1/2 max-w-xl p-8'>
            <div className='ml-3 mr-3 space-y-5'>
              <Bio />
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <SWEBio/>
      </div>
    </div> */
  }
};
