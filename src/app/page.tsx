'use client';

import { useRef } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { Contact } from '../../components/Contact';
import Navbar from '../../components/NavBar';
import { useIsVisible } from '../../hooks/useIsVisible';

export default function Home() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);
  return (
    <div>
      <Navbar />
      <main className='font-roboto font-thin'>
        <div
          ref={ref1}
          className={`transition-opacity duration-500 ease-in ${
            isVisible1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroSection />
        </div>
      </main>
      <section id='contact'>
        <div
          ref={ref2}
          className={`transition-opacity duration-500 ease-in ${
            isVisible2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Contact />
        </div>
      </section>
    </div>
  );
}
