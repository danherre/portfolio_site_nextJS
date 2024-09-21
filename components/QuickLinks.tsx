import React from 'react';
import QuickLinksLink from './QuickLinksLink';
import { Title } from './Title';

interface LinkData {
  label: string;
  link: string;
}

const CURRENT_LINKS: Array<LinkData> = [
  {
    label: "listen to my new single 'u made me cry'",
    link: 'https://ffm.to/8kvx7pz',
  },
  {
    label: "listen to my debut single 'I need to know'",
    link: 'https://ffm.to/pljmevp',
  },
  {
    label: 'reel',
    link: 'https://danielherrerias.com/reel',
  },
  {
    label: 'headshots',
    link: 'https://www.dropbox.com/sh/7vyvl4mrlofggnl/AAAtQn5Z4qqGCC_-VCylI_VOa?dl=0',
  },
  /*{
    label: 'MODELING DIGITALS',
    link: 'https://www.dropbox.com/sh/6dusz55vt9fhowu/AAD-xBgqVZ8NwesbuSUSUyu3a?dl=0',
  }, */
  /* {
    label: 'engineering resume',
    link: 'https://danielherrerias.com/Daniel_Herrerias_Resume.pdf',
  }, */
  {
    label: 'contact & social media links',
    link: '#contact',
  },
  /* {
    label: 'MY WEBSITE (WITH A LOT MORE STUFF!)',
    link: '/',
  }, */
];

export const QuickLinks = () => {
  return (
    <div className='flex h-[calc(100vh-80px)] flex-col items-center justify-center space-y-6'>
      <div className='text-burgundy'>
        <Title>My Links</Title>
      </div>
      <div className='space-y-4 text-center'>
        {CURRENT_LINKS.map((item, idx) => {
          return (
            <QuickLinksLink key={'nav_item_' + idx}>{item}</QuickLinksLink>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
