import Navbar from '../../../components/NavBar';
import { LinkData } from '../../../components/QuickLinks';
import QuickLinks from '../../../components/QuickLinks';
import { Contact } from '../../../components/Contact';

const CURRENT_LINKS: Array<LinkData> = [
  {
    label: 'imdb',
    link: 'https://www.imdb.com/name/nm15475836/',
  },
  {
    label: 'backstage',
    link: 'https://www.backstage.com/u/daniel-herrerias/',
  },
  {
    label: 'actors access',
    link: 'https://resumes.actorsaccess.com/2273201-6335159',
  },
  {
    label: 'casting networks',
    link: 'https://app.castingnetworks.com/talent/public-profile/4ecaec54-c77a-11ee-b0df-53c6c9d919bb',
  },
];

function ActingProfiles() {
  return (
    <div>
      <Navbar />
      <main className='font-playfair'>
        <div className='flex flex-col items-center justify-center'>
          <QuickLinks currLinks={CURRENT_LINKS} title='Acting profiles' />
        </div>
      </main>
      <section id='contact'>
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default ActingProfiles;
