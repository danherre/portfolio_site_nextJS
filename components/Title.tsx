import React, { FunctionComponent } from 'react';

export const Title: FunctionComponent<{ children: string }> = ({
  children,
}) => {
  return (
    <div className='text-5xl font-normal text-light_yellow'>{children}</div>
  );
};
