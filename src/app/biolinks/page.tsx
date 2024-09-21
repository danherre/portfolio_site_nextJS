'use client';
import { useRef } from 'react';
import Navbar from '../../../components/NavBar';
import QuickLinks from '../../../components/QuickLinks';
import { Contact } from '../../../components/Contact';
import { useIsVisible } from '../../../hooks/useIsVisible';

export default function BioLinks() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref1);
  return (
    <div>
      <Navbar />
      <main className='font-playfair'>
        <div
          ref={ref1}
          className={`transition-opacity duration-300 ease-in sm:duration-700 ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <QuickLinks />
        </div>
      </main>
      <section id='contact'>
        <div
          ref={ref2}
          className={`transition-opacity duration-300 ease-in sm:duration-700 ${
            isVisible2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Contact />
        </div>
      </section>
    </div>
  );
}
