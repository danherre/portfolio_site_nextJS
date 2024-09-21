'use client'; // this is a client component
import Link from 'next/link';
import React from 'react';
import { useState, useRef } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'my links',
    page: '/biolinks',
  },
  {
    label: 'reels',
    page: '/reels',
  },
  {
    label: 'contact & socials',
    page: '#contact',
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const navMenu = useRef(null);
  const navMenuIsVisible = useIsVisible(navMenu);

  const renderNavItems = () => {
    return NAV_ITEMS.map((section, idx) => {
      return (
        <div key={'nav_item_' + idx}>
          <Link
            href={section.page}
            className='hover:text-burgundy-600'
            onClick={() => setNavbar(false)}
          >
            {section.label}
          </Link>
        </div>
      );
    });
  };

  return (
    <header className='flex flex-col space-y-3 p-4 font-playfair text-russian_violet sm:items-center'>
      <div className='flex w-full items-center justify-evenly'>
        <div className='text-3xl sm:text-5xl'>
          <Link href='/'>Daniel Herrerias</Link>
        </div>
        <div className='hover:text-rosy_brown sm:hidden'>
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <svg
                className='with-icon_icon__MHUeb'
                data-testid='geist-icon'
                fill='none'
                height='30'
                shape-rendering='geometricPrecision'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                width='30'
              >
                <path d='M18 6L6 18' />
                <path d='M6 6l12 12' />
              </svg>
            ) : (
              <svg
                className='with-icon_icon__MHUeb'
                data-testid='geist-icon'
                fill='none'
                height='30'
                shape-rendering='geometricPrecision'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                width='30'
              >
                <path d='M3 12h18' />
                <path d='M3 6h18' />
                <path d='M3 18h18' />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex h-[calc(100vh-80px)] flex-col sm:hidden ${
          navbar ? 'block' : 'hidden'
        }`}
      >
        <div
          ref={navMenu}
          className={`m-auto space-y-4 text-center text-xl transition-opacity duration-500 ease-in ${
            navMenuIsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {renderNavItems()}
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className={`flex h-auto justify-center space-x-6`}>
          {renderNavItems()}
        </div>
      </div>
    </header>
  );
}
