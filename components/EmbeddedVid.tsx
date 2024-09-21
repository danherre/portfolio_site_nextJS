import React from 'react';

function EmbeddedVid({ link, size }) {
  return (
    <div className='h-64'>
      <iframe
        width={size == 's' ? '320' : '400'}
        height={size == 's' ? '175' : '225'}
        src={link.link}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
      <div className='w-80 text-russian_violet lg:w-96'>{link.description}</div>
    </div>
  );
}

export default EmbeddedVid;
