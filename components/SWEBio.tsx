import Bio from './Bio';

export const SWEBio = () => {
  return (
    <section className='mx-auto max-w-4xl px-6 py-12 font-playfair text-gray-800'>
      <div className='mb-10'>
        <h2 className='mb-4 border-b pb-2 text-2xl font-semibold'>
          Experience
        </h2>

        <div className='mb-6'>
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold text-burgundy'>
              Software Development Engineer I – Audible, Newark, NJ
            </h3>
            <span className='text-sm text-gray-500'>Jan 2022 – Jan 2024</span>
          </div>
          <ul className='mt-2 list-inside list-disc space-y-2 text-gray-700'>
            <li>
              Developed full stack features (S to XL complexity) for an internal
              data ingestion app used by hundreds of operators; primarily
              frontend using React, Java, AWS
            </li>
            <li>
              Rebuilt legacy React components (navbar, global search, full
              pages) to reduce tech debt and align with modern practices (React
              hooks, functional programming)
            </li>
            <li>
              Investigated and aligned app with Amazon's internal design systems
              to prepare for frontend design system migration
            </li>
            <li>
              Led migration to a secure credential system using AWS IAM roles
              (from 8-hour to 15-minute key rotations)
            </li>
            <li>
              Participated in monthly on-call rotations to resolve production
              bugs and address user needs
            </li>
          </ul>
        </div>

        <div className='mb-6'>
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold text-burgundy'>
              Technology Analyst – Deutsche Bank, New York, NY
            </h3>
            <span className='text-sm text-gray-500'>Aug 2021 – Dec 2021</span>
          </div>
          <ul className='mt-2 list-inside list-disc space-y-2 text-gray-700'>
            <li>
              Automated data transfer between Excel files using Python, reducing
              manual task time from 2 hours to seconds
            </li>
            <li>
              Introduced data visualization into reports, delivering new
              insights to the team
            </li>
          </ul>
        </div>

        <div>
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold text-burgundy'>
              Software Engineering Instructional Aide – University of Michigan,
              Ann Arbor, MI
            </h3>
            <span className='text-sm text-gray-500'>Aug 2020 – Dec 2020</span>
          </div>
          <ul className='mt-2 list-inside list-disc space-y-2 text-gray-700'>
            <li>
              Built Python scripts to automate randomized exam generation from
              JSON repositories for a custom online platform
            </li>
          </ul>
        </div>
      </div>

      <div className='mb-10'>
        <h2 className='mb-4 border-b pb-2 text-2xl font-semibold'>
          Personal Projects
        </h2>

        <div className='mb-4'>
          <h3 className='text-lg font-semibold text-burgundy'>
            Personal Website –{' '}
            <a
              href='https://danielherrerias.com'
              target='_blank'
              className='text-blue-600 hover:underline'
            >
              danielherrerias.com
            </a>
          </h3>
          <p className='mt-1 text-gray-700'>
            Designed and developed a fully responsive portfolio website using
            Next.js and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className='mb-10'>
        <h2 className='mb-4 border-b pb-2 text-2xl font-semibold'>Education</h2>

        <div className='flex justify-between'>
          <h3 className='text-lg font-semibold text-burgundy'>
            University of Michigan, Ann Arbor
          </h3>
          <span className='text-sm text-gray-500'>Aug 2017 – Dec 2020</span>
        </div>
        <p className='text-gray-700'>Bachelor of Science in Computer Science</p>
      </div>
      <div>
        <h2 className='mb-4 border-b pb-2 text-2xl font-semibold'>Skills</h2>
        <div className='grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2'>
          <div>
            <h4 className='font-medium'>Programming Languages</h4>
            <p>JavaScript, Python, C++, Java</p>
          </div>
          <div>
            <h4 className='font-medium'>Software Development</h4>
            <p>Git</p>
          </div>
          <div>
            <h4 className='font-medium'>Web Development</h4>
            <p>
              React, Bootstrap, Flask, HTML, CSS, NextJS, TailwindCSS, Redux,
              Jest
            </p>
          </div>
          <div>
            <h4 className='font-medium'>Amazon System Tech</h4>
            <p>Meridian design system, Polaris, CR process</p>
          </div>
          <div>
            <h4 className='font-medium'>Cloud Computing</h4>
            <p>AWS (S3, CloudFront, CloudSearch, IAM)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
