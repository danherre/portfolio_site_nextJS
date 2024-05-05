import React from 'react';
import { BoxIcon } from './BoxIcon';
import Link from 'next/link';

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 py-16 font-roboto font-thin text-russian_violet'>
      <div className='text-3xl font-normal text-burgundy'>Contact</div>
      <div className='flex flex-col items-center space-y-3'>
        <p>FIND ME:</p>
        <div className='flex space-x-2'>
          <BoxIcon iconName='instagram' />
          <BoxIcon iconName='tiktok' />
          <BoxIcon iconName='linkedin' />
          <BoxIcon iconName='soundcloud' />
          <BoxIcon iconName='youtube' />
        </div>
      </div>
      <Link
        href={'mailto:danielherreriasj@gmail.com'}
        className='hover:font-normal hover:text-rosy_brown'
      >
        danielherreriasj@gmail.com
      </Link>
      <Link
        href={'tel:+17036185145'}
        className='hover:font-normal hover:text-rosy_brown'
      >
        703.618.5145
      </Link>
    </div>
  );
};
