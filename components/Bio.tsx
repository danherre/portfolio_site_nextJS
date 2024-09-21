import React from 'react';
import { Title } from './Title';

const Bio = () => {
  return (
    <div className='font-playfair opacity-100 transition-opacity duration-700 ease-in'>
      <div className='space-y-5 drop-shadow-lg'>
        <div className='text-burgundy'>
          <Title>Daniel Herrerias</Title>
        </div>
        {/* <div className='absolute'> */}
        <p className='text-2xl leading-10 text-russian_violet'>
          New York-based musician and actor
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Bio;
