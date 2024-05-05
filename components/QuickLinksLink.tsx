import Link from 'next/link';
import { FunctionComponent } from 'react';

interface LinkData {
  label: string;
  link: string;
}

type QuickLinksLinkProps = {
  children: LinkData;
};

const QuickLinksLink: FunctionComponent<QuickLinksLinkProps> = ({
  children,
}) => {
  return (
    <div className='text-black-green group text-xl transition duration-300 hover:font-normal hover:text-burgundy'>
      <Link href={children.link}>
        <div>{children.label}</div>
      </Link>
      <span className='block h-0.5 max-w-0 bg-burgundy transition-all duration-500 group-hover:max-w-full'></span>
    </div>
  );
};

export default QuickLinksLink;
