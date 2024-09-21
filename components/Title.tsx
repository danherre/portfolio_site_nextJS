import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return <div className='font-playfair text-5xl font-normal'>{children}</div>;
};
