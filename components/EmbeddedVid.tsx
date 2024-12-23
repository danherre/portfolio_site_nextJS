import React from 'react';
import Link from 'next/link';

function EmbeddedVid({ link, size }: any) {
  return (
    <div className='flex flex-col items-start'>
      <iframe
        width={size == 's' ? '320' : '400'}
        height={size == 's' ? '175' : '225'}
        src={link.link}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
      <div className='w-80 text-russian_violet lg:w-96'>{link.description}</div>
      <Link href={link.yt} className='hover:text-burgundy-600'>
        view on youtube
      </Link>
    </div>
  );
}

export default EmbeddedVid;
