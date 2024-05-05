import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type IconsObject = {
  [key: string]: {
    link: string;
    filePath: string;
  };
};

type BoxIconProps = {
  iconName: string;
};

const ICONS: IconsObject = {
  instagram: {
    link: 'https://www.instagram.com/danielherrerias/',
    filePath: 'https://danielherrerias.com//instagram-logo-regular.png',
  },
  tiktok: {
    link: 'https://www.tiktok.com/@danielangel.us',
    filePath: 'https://danielherrerias.com//tiktok.png',
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/daniel-herrerias/',
    filePath: 'https://danielherrerias.com//linkedin.png',
  },
  soundcloud: {
    link: 'https://soundcloud.com/daniel-herrerias6',
    filePath: 'https://danielherrerias.com//soundcloud.png',
  },
  youtube: {
    link: 'https://www.youtube.com/@danielherrerias8237',
    filePath: 'https://danielherrerias.com//youtube.png',
  },
};

export const BoxIcon: FunctionComponent<BoxIconProps> = ({ iconName }) => {
  return (
    <div>
      <Link href={ICONS[iconName].link} className='hover:animate-pulse'>
        <img src={ICONS[iconName].filePath} width={24} />
      </Link>
    </div>
  );
};
