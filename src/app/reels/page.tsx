'use client';

import React from 'react';
import Navbar from '../../../components/NavBar';
import { Contact } from '../../../components/Contact';
import { Title } from '../../../components/Title';
import EmbeddedVid from '../../../components/EmbeddedVid';

const ACTING_LINKS_1 = [
  {
    link: 'https://www.youtube.com/embed/6qQ1qJWhHZA?si=fbzgf4ivpuwbn9ds',
    description: "'Experimentality' - Stone Street Studios, Nikolas Elrifi",
  },
  {
    link: 'https://www.youtube.com/embed/Vjua_tfjbRM?si=0dfI8tkHkvJ-y32a',
    description: "'120 Años de Atleti' - Lee Films (Spain)",
  },
];

const ACTING_LINKS_2 = [
  {
    link: 'https://www.youtube.com/embed/AWnugPmNUaE?si=4Wr0HU5KPPKA-xo6',
    description: "'Misery = Comfort' - Independent Film Fund, Michael Jones",
  },
  {
    link: 'https://www.youtube.com/embed/sMVTeGKses4?si=oiPg-COIogaDQkBE',
    description: "'Una Carta' - Independent Film Fund, Michael Jones",
  },
];

const MUSICAL_LINKS_1 = [
  {
    link: 'https://www.youtube.com/embed/NAhLGpa6bv4?si=MKX9VRoLtf3T9A6h',
    description: "'Goodbye' from 'Catch Me If You Can' - Broadway Sessions",
  },
  {
    link: 'https://www.youtube.com/embed/woIM2s_vhyc?si=AHaJqsoiTCErqZca',
    description: "'30/90' from 'Tick, Tick... Boom!' - Broadway Sessions",
  },
];

const MUSICAL_LINKS_2 = [
  {
    link: 'https://www.youtube.com/embed/Y4fFyYgC0GE?si=8C2AbQkzFg4-cVhN',
    description:
      "'Are You There?' from 'Bare: A Pop Opera' - University of Michigan MUSKET, James Harbaugh",
  },
  {
    link: 'https://www.youtube.com/embed/4QqMu4cP4go?si=E9UnuCFvOgCn1eGW',
    description:
      "'Promise' from 'Bare: A Pop Opera' - University of Michigan MUSKET, James Harbaugh",
  },
];

export default function Reel() {
  const renderLinks = (links, size) => {
    return links.map((link) => <EmbeddedVid link={link} size={size} />);
  };
  return (
    <div>
      <Navbar />
      <main className='font-playfair'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-burgundy'>
            <div className='flex flex-col items-center'>
              <Title>Reels</Title>
              <div className='p-6 font-playfair text-3xl font-normal'>
                Acting
              </div>
            </div>
            <div className='flex flex-col items-center justify-center space-y-8 lg:hidden'>
              {renderLinks(ACTING_LINKS_1, 's')}
              {renderLinks(ACTING_LINKS_2, 's')}
            </div>
            <div className='hidden lg:block'>
              <div className='flex items-center justify-center space-x-6'>
                {renderLinks(ACTING_LINKS_1, 'l')}
              </div>
              <div className='flex items-center justify-center space-x-6'>
                {renderLinks(ACTING_LINKS_2, 'l')}
              </div>
            </div>
            <div className=' flex flex-col items-center p-6 font-playfair text-3xl font-normal'>
              Musical Theatre
            </div>
            <div className='flex flex-col items-center justify-center space-y-8 lg:hidden'>
              {renderLinks(MUSICAL_LINKS_1, 's')}
              {renderLinks(MUSICAL_LINKS_2, 's')}
            </div>
            <div className='hidden lg:block'>
              <div className='flex items-center justify-center space-x-6'>
                {renderLinks(MUSICAL_LINKS_1, 'l')}
              </div>
              <div className='flex items-center justify-center space-x-6'>
                {renderLinks(MUSICAL_LINKS_2, 'l')}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  );
}
