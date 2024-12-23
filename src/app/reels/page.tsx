'use client';

import React from 'react';
import Navbar from '../../../components/NavBar';
import { Contact } from '../../../components/Contact';
import { Title } from '../../../components/Title';
import EmbeddedVid from '../../../components/EmbeddedVid';

const ACTING_LINKS_1 = [
  {
    link: 'https://www.youtube-nocookie.com/embed/6qQ1qJWhHZA?si=7oWq-FZO82sPtlTI',
    yt: 'https://youtu.be/6qQ1qJWhHZA',
    description: "'Experimentality' - Stone Street Studios, Nikolas Elrifi",
  },
  {
    link: 'https://www.youtube-nocookie.com/embed/Vjua_tfjbRM?si=LJvuBzIdRbPdGEWd',
    yt: 'https://youtu.be/Vjua_tfjbRM',
    description: "'120 Años de Atleti' - Lee Films (Spain)",
  },
];

const ACTING_LINKS_2 = [
  {
    link: 'https://www.youtube-nocookie.com/embed/AWnugPmNUaE?si=4Wr0HU5KPPKA-xo6',
    yt: 'https://youtu.be/AWnugPmNUaE?si=4tuxWIfqR63bTaIb',
    description: "'Misery = Comfort' - Independent Film Fund, Michael Jones",
  },
  {
    link: 'https://www.youtube-nocookie.com/embed/sMVTeGKses4?si=aSdfvQ7YUrRmh0V5',
    yt: 'https://youtu.be/sMVTeGKses4',
    description: "'Una Carta' - Independent Film Fund, Michael Jones",
  },
];

const MUSICAL_LINKS_1 = [
  {
    link: 'https://www.youtube-nocookie.com/embed/NAhLGpa6bv4?si=A6DI-_3xes596exn',
    yt: 'https://youtu.be/NAhLGpa6bv4',
    description: "'Goodbye' from 'Catch Me If You Can' - Broadway Sessions",
  },
  {
    link: 'https://www.youtube-nocookie.com/embed/woIM2s_vhyc?si=-UnBZsRzIsEjETyW',
    yt: 'https://youtu.be/woIM2s_vhyc',
    description: "'30/90' from 'Tick, Tick... Boom!' - Broadway Sessions",
  },
];

const MUSICAL_LINKS_2 = [
  {
    link: 'https://www.youtube-nocookie.com/embed/Y4fFyYgC0GE?si=efKPWEZ_VtILzi-w',
    yt: 'https://youtu.be/Y4fFyYgC0GE',
    description:
      "'Are You There?' from 'Bare: A Pop Opera' - University of Michigan MUSKET, James Harbaugh",
  },
  {
    link: 'https://www.youtube-nocookie.com/embed/4QqMu4cP4go?si=a5FcTVWw2qaa9b1X',
    yt: 'https://youtu.be/4QqMu4cP4go',
    description:
      "'Promise' from 'Bare: A Pop Opera' - University of Michigan MUSKET, James Harbaugh",
  },
];

export default function Reel() {
  const renderLinks = (links: any, size: any) => {
    return links.map((link: any) => (
      <EmbeddedVid key={link.id} link={link} size={size} />
    ));
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
              <div className='flex justify-center space-x-6'>
                {renderLinks(ACTING_LINKS_1, 'l')}
              </div>
              <div className='flex justify-center space-x-6'>
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
              <div className='flex justify-center space-x-6'>
                {renderLinks(MUSICAL_LINKS_1, 'l')}
              </div>
              <div className='flex justify-center space-x-6'>
                {renderLinks(MUSICAL_LINKS_2, 'l')}
              </div>
            </div>
          </div>
        </div>
      </main>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  );
}
