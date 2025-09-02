import React from 'react';
import QuickLinksLink from './QuickLinksLink';
import { Title } from './Title';

export interface LinkData {
  label: string;
  link: string;
}

const CURRENT_LINKS: Array<LinkData> = [
  {
    label: 'fucking young! editorial',
    link: 'https://fuckingyoung.es/coney-island-baby/',
  },
  {
    label: "stream my new single 'IAAC'",
    link: 'https://distrokid.com/hyperfollow/danielherrerias/iaac',
  },
  {
    label: 'reels',
    link: 'https://danielherrerias.com/reels',
  },
  {
    label: 'acting profiles',
    link: 'https://danielherrerias.com/acting-profiles',
  },
  {
    label: 'headshot & resume',
    link: 'https://danielherrerias.com/headshot-resume',
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

export const QuickLinks = ({
  currLinks = CURRENT_LINKS,
  title = 'My links',
}) => {
  return (
    <div className='flex h-[calc(100vh-80px)] flex-col items-center justify-center space-y-6'>
      <div className='text-burgundy'>
        <Title>{title}</Title>
      </div>
      <div className='space-y-4 text-center'>
        {currLinks.map((item, idx) => {
          return (
            <QuickLinksLink key={'nav_item_' + idx}>{item}</QuickLinksLink>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
