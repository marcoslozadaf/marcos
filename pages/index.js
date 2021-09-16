import Head from 'next/head';
import {
  iconGithub,
  iconLinkedIn,
  iconTwitter,
  iconFacebook,
  iconInstagram,
} from '../components/icons';

import Favicons from '../components/Favicons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcos Lozada Freytes</title>
        <Favicons />
      </Head>
      <header className=''></header>
      <main className=''>
        <div className='max-w-5xl mx-auto pt-4 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg'>
            <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  className='h-16 w-16 rounded-full mr-4 shadow-lg border border-white'
                  src='/images/marcoslozada.jpg'
                  alt=''
                  width={300}
                  height={300}
                />
                <h3 className='text-lg leading-none font-medium text-gray-900 dark:text-white dark:text-white'>
                  Marcos Lozada Freytes
                </h3>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg mt-5'>
            <div className='px-4 pb-5 sm:p-0'>
              <dl className='divide-y divide-gray-200 dark:divide-black'>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>E-mail</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    marcoslozadaf@gmail.com | marcos@baas256.com
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Profession</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                  Systems Engineer. Co-Founder at Baas256 | Balloon Dapp. Blockchain Seminar Professor at Catholic University of Cordoba
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Experience</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Blockchain Development
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Business Management 
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Project Management 
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Data Science
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Full Stack Web Development 
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Test Automation 
                    </span>
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Preferred Stack</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
                    {techStack.map((tech) => (
                      <div key={tech.name} className='flex flex-col overflow-hidden'>
                        <div className='flex-1 py-1 mr-3'>
                          <img
                            className='h-10'
                            src={tech.logo}
                            alt={tech.name}
                            width={tech.width}
                            height={tech.height}
                          />
                        </div>
                      </div>
                    ))}
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Social</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <div className='space-x-6 md:order-2 flex items-center'>
                      {social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='text-gray-400 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
                        >
                          <span className='sr-only'>{item.name}</span>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </a>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

const techStack = [
  {
    name: 'Javascript',
    logo: '/images/tech-stack/javascript.svg',
    height: 48,
    width: 48,
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'NodeJS',
    logo: '/images/tech-stack/nodejs.svg',
    height: 48,
    width: 75,
    docs: 'https://nodejs.org/dist/latest-v14.x/docs/api/',
  },
  {
    name: 'expressJS',
    logo: '/images/tech-stack/expressjs.svg',
    height: 48,
    width: 100,
    docs: 'https://expressjs.com/en/4x/api.html',
  },
  {
    name: 'ethereum',
    logo: '/images/tech-stack/ethereum.svg',
    height: 48,
    width: 100,
    docs: 'https://ethereum.org/es/',
  },
  {
    name: 'MongoDB',
    logo: '/images/tech-stack/mongodb.svg',
    height: 48,
    width: 150,
    docs: 'https://docs.mongodb.com/drivers/node/current/',
  },
  {
    name: 'React',
    logo: '/images/tech-stack/react.svg',
    height: 48,
    width: 55,
    docs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    name: 'NextJS',
    logo: '/images/tech-stack/nextjs.svg',
    height: 48,
    width: 55,
    docs: 'https://nextjs.org/docs',
  },
];

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/marcoslozadaf',
    icon: iconGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcoslozadafreytes/',
    icon: iconLinkedIn,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/marcoslozada',
    icon: iconInstagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/marcoslozadaf',
    icon: iconTwitter,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/marcoslozadaf',
    icon: iconFacebook,
  },
];
