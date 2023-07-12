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
                  src='/images/marcoslozada.JPEG'
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
                  {/* <a  target='_blank' href='mailto:marcos@ropero.io' className='hover:text-blue-400'>marcos@ropero.io</a> - <a  target='_blank' href='mailto:marcos@bircle.io' className='hover:text-blue-400'>marcos@bircle.io</a> | <a target='_blank' href='mailto:marcos.lozada@ucc.edu.ar' className='hover:text-blue-400'>marcos.lozada@ucc.edu.ar</a> | <a  target='_blank' href='mailto:marcoslozadaf@gmail.com' className='hover:text-blue-400'>marcoslozadaf@gmail.com</a> */}
                  <a  target='_blank' href='mailto:email@marcoslozada.com' className='hover:text-blue-400'>email@marcoslozada.com</a> | <a target='_blank' href='mailto:marcos.lozada@ucc.edu.ar' className='hover:text-blue-400'>marcos.lozada@ucc.edu.ar</a> | <a  target='_blank' href='mailto:marcoslozadaf@gmail.com' className='hover:text-blue-400'>marcoslozadaf@gmail.com</a>
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                <dt className='text-sm font-medium text-gray-400'>Phone - Telegram</dt>
                <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                  <a target='_blank' href="https://api.whatsapp.com/send?phone=5493516152680" className='hover:text-blue-400'>+5493516152680</a> | 
                  <a target='_blank' href="https://t.me/marcoslozada" className='hover:text-blue-400'> @marcoslozada</a>
                </dd>
              </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Profession</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                   Software Engineer & Professor <a target='_blank' href='https://twitter.com/UCCoficial' className='hover:text-blue-400' >@UCCoficial</a> | <a target='_blank' href='https://twitter.com/WhartonCypher' className='hover:text-blue-400'>@WhartonCypher</a> '23 | <a target='_blank' href='https://twitter.com/platan_ventures' className='hover:text-blue-400'>@platan_ventures</a> 22-2 | 🇦🇷 
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Book</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                    <a target='_blank' href="https://cal.com/marcoslozada/15min?duration=15" className='hover:text-blue-400'>15 min meeting</a>
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                    <a target='_blank' href="https://cal.com/marcoslozada/30min?duration=30" className='hover:text-blue-400'>30 min meeting</a>
                    </span>
                  </dd>
                </div>

                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Social</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    <div className='space-x-8 lg:space-x-12 md:order-2 flex items-center '>
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
                      Software Engineer
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Full Stack Web Development 
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Generative AI
                    </span>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-black text-gray-800 mr-3 dark:text-white mb-1'>
                      Healthtech
                    </span>
                    
                  </dd>
                </div>
                
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-400'>Preferred Stack</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
                    {techStack.map((tech) => (
                      <div key={tech.name} className='flex flex-col overflow-hidden'>
                        <div className='flex-1 py-1 mr-3 justify-between'>
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
  {
    name: 'Ethereum',
    logo: '/images/tech-stack/ethereum.svg',
    height: 68,
    width: 75,
    docs: 'https://ethereum.org/en/developers/',
  },
  {
    name: 'Polygon',
    logo: '/images/tech-stack/polygon.svg',
    height: 68,
    width: 75,
    docs: 'https://docs.polygon.technology/',
  },
];

const social = [
  
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcoslozadafreytes/',
    icon: iconLinkedIn,
  },

  {
    name: 'Twitter',
    href: 'https://twitter.com/marcoslozadaf',
    icon: iconTwitter,
  },

  {
    name: 'Instagram',
    href: 'https://instagram.com/marcoslozada',
    icon: iconInstagram,
  },

  {
    name: 'GitHub',
    href: 'https://github.com/marcoslozadaf',
    icon: iconGithub,
  },

  {
    name: 'Facebook',
    href: 'https://www.facebook.com/marcoslozadaf',
    icon: iconFacebook,
  },
];
