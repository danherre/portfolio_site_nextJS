import React from 'react';
import { Title } from './Title';

const Bio = () => {
  return (
    <div className='opacity-100 transition-opacity duration-700 ease-in'>
      <div className='space-y-5 drop-shadow-lg'>
        <Title>Daniel Herrerias</Title>
        <div className='absolute'>
          <p className='text-black-olive text-3xl leading-10'>
            Spanish-American musician, actor, and software developer based in
            Brooklyn, NY.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
