import Navbar from '../../../components/NavBar';
import { LinkData } from '../../../components/QuickLinks';
import QuickLinks from '../../../components/QuickLinks';
import { Contact } from '../../../components/Contact';

const CURRENT_LINKS: Array<LinkData> = [
  {
    label: 'headshots',
    link: 'https://www.dropbox.com/scl/fo/6x5u9sznl23udw2bme8gf/ANn_sc_N1jva_36v37tdsos?rlkey=0nypb7z8gafwvznehxmd9hpt4&st=7ifxt0ps&dl=0',
  },
  {
    label: 'resume',
    link: 'https://danielherrerias.com/Daniel_Herrerias_CV.pdf',
  },
  {
    label: 'imdb',
    link: 'https://www.imdb.com/name/nm15475836/',
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

function HeadshotResume() {
  return (
    <div>
      <Navbar />
      <main className='font-playfair'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center'>
            <QuickLinks currLinks={CURRENT_LINKS} title='Headshot & resume' />
          </div>
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

export default HeadshotResume;
