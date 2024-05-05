import React from 'react';
import QuickLinksLink from './QuickLinksLink';
import { Title } from './Title';

interface LinkData {
  label: string;
  link: string;
}

const CURRENT_LINKS: Array<LinkData> = [
  {
    label: "LISTEN TO MY DEBUT SINGLE 'I need to know'",
    link: 'https://ffm.to/pljmevp',
  },
  {
    label: 'LATEST MUSIC DEMO (SOUNDCLOUD)',
    link: 'https://soundcloud.com/daniel-herrerias6/open-arms-opb-sza-a-cappella?si=e21d32ef56f1492fa9a558b75cea7243&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },
  {
    label: 'ACTING & SINGING REEL',
    link: 'https://youtu.be/YAer6TR5qIU',
  },
  {
    label: 'HEADSHOTS',
    link: 'https://www.dropbox.com/sh/7vyvl4mrlofggnl/AAAtQn5Z4qqGCC_-VCylI_VOa?dl=0',
  },
  {
    label: 'MODELING DIGITALS',
    link: 'https://www.dropbox.com/sh/6dusz55vt9fhowu/AAD-xBgqVZ8NwesbuSUSUyu3a?dl=0',
  },
  {
    label: 'ENGINEERING RESUME',
    link: 'https://danielherrerias.com/Daniel_Herrerias_Resume.pdf',
  },
  {
    label: 'CONTACT & SOCIAL MEDIA LINKS',
    link: '#contact',
  },
  {
    label: 'MY WEBSITE (WITH A LOT MORE STUFF!)',
    link: '/',
  },
];

export const QuickLinks = () => {
  return (
    <div className='flex h-[calc(100vh-80px)] flex-col items-center justify-center space-y-6'>
      <Title>My links</Title>
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
