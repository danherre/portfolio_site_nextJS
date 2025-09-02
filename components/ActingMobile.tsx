import Bio from './Bio';

export const ActingMobile = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <img src='/headshot.jpg' alt='Headshot' className='h-auto w-full' />
      <div className='absolute m-10 w-full pt-36 text-center'>
        <Bio />
      </div>
    </div>
  );
};
