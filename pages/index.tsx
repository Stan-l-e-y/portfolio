/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import StanIcon from '@/components/icons/StanIcon';
import { Poppins } from '@next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  const [navClicked, setNavClicked] = useState<string>('home');
  const [aboutClicked, setAboutClicked] = useState<string>('skills');

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Stanley's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/metapicportfolio.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        <div className={styles.header}>
          <div className={`${styles.container} flex flex-col`}>
            <nav className={`${styles.nav} justify-center text-2xl `}>
              {/* <Image
                alt="logo"
                src="/logo.png"
                className="logo"
                width={200}
                height={200}
              /> */}
              <ul id="sidemenu">
                <li
                  className={`${styles.navUiLi} hover:cursor-pointer`}
                  onClick={() => setNavClicked('home')}
                >
                  <Link
                    className={`${styles.navUiLiA} ${styles.test}  ${
                      navClicked == 'home' ? styles.testClicked : styles.test
                    }`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`${styles.navUiLi} hover:cursor-pointer`}
                  onClick={() => setNavClicked('resume')}
                >
                  <Link
                    className={`${styles.navUiLiA} ${styles.test}  ${
                      navClicked == 'resume' ? styles.testClicked : styles.test
                    }`}
                    href="/resume"
                  >
                    Resume
                  </Link>
                </li>
                {/* <li className={styles.navUiLi}>
                  <a className={styles.navUiLiA} href="#services">
                    Services
                  </a>
                </li>
                <li className={styles.navUiLi}>
                  <a className={styles.navUiLiA} href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className={styles.navUiLi}>
                  <a className={styles.navUiLiA} href="#contact">
                    Contact
                  </a>
                </li> */}
                {/* <i className="fas fa-times">X</i> */}
              </ul>
              {/* <i className="fas fa-bars">-</i> */}
            </nav>
            <div className={`${styles.headerText} flex items-center `}>
              <div className="flex-col basis-3/5">
                <p>Software Engineer</p>
                <h1 className={styles.headerTextH1}>
                  {/*  eslint-disable-next-line react/no-unescaped-entities */}
                  Hi, I'm{' '}
                  <span className="font-bold tracking-wide">Stanley</span>
                </h1>
              </div>
              <StanIcon />
            </div>
          </div>
        </div>

        <div className={styles.about} id="about">
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.aboutCol1}>
                <Image
                  className={styles.aboutCol1Img}
                  alt="user"
                  src="/stan4.png"
                  // fill={true}
                  width={292}
                  height={506}
                  quality={100}
                />
              </div>
              <div className={styles.aboutCol2}>
                <h1 className={styles.subTitle}>About Me</h1>
                <p>
                  Hey! My name is Stanley and I'm a Software Engineer based in
                  Toronto, Canada.
                  <br />
                  <br />
                  I've been developing web applications for over 3 years now and
                  I truly belive that this is my passion.
                  <br />
                  Over the years I've fallen in love with the idea of writing
                  entire web apps in one language, that language of course being
                  JavaScript (namely TypeScript). Something that would not have
                  been possible without the introduction of the Node runtime
                  environment
                  <br />
                  <br />
                  For my personal projects, I've spent quite some time scouring
                  the internet in search of finding the framework and libraries
                  that would result in the best possible developer experince.
                  Some of my current favourites are: React.js, Next.js,
                  Supabase, Prisma, GraphQL and TailwindCSS
                </p>

                <div className={styles.tabTitles}>
                  <p
                    className={`${styles.tabLinks}  ${
                      aboutClicked == 'skills' ? styles.activeLink : ''
                    }`}
                    onClick={() => setAboutClicked('skills')}
                  >
                    Skills
                  </p>
                  <p
                    className={`${styles.tabLinks}  ${
                      aboutClicked == 'experience' ? styles.activeLink : ''
                    } `}
                    onClick={() => setAboutClicked('experience')}
                  >
                    Experience
                  </p>
                </div>
                <div
                  className={`${styles.tabContents}  ${
                    aboutClicked == 'skills' ? styles.activeTab : ''
                  }`}
                  id="skills"
                >
                  <ul>
                    <li>
                      <span>Front End</span>
                      <br />
                      React.js | TailwindCSS | Jest
                    </li>
                    <li>
                      <span>Back End</span>
                      <br />
                      Node.js | Next.js | Supabase | SQL | OAuth 2.0 | PHP |
                      Java | C#
                    </li>
                    <li>
                      <span>DevOps</span>
                      <br />
                      Git | Github Actions | Jira
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.tabContents} ${
                    aboutClicked == 'experience' ? styles.activeTab : ''
                  } `}
                  id="experience"
                >
                  <ul>
                    <li>
                      <span>05/2022 - 08/2022</span>
                      <br />
                      <div className="text-lg font-semibold">
                        Web Developer Intern at{' '}
                        <a
                          href="https://omegacoders.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ff004f] underline hover:text-[#ff97ae] hover:cursor-pointer"
                        >
                          Omega Coders
                        </a>
                      </div>
                      <br />
                      Implemented and designed feature rich systems and
                      components for an enterprise level human resources SaaS
                      tool using CodeIgniter, PHP, JavaScript and MySQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="services">
          <div className={styles.container}>
            <h1 className={styles.subTitle}>My Services</h1>
            <div className={styles.servicesList}>
              <div>
                <CodeIcon />
                <h2>Web Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nulla nibh, tincidunt sit amet sapien quis.
                </p>
                <a href="#">Learn more</a>
              </div>
              <div>
                <i className="fas fa-crop-alt"></i>
                <h2>UI/UX Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nulla nibh, tincidunt sit amet sapien quis.
                </p>
                <a href="#">Learn more</a>
              </div>
              <div>
                <i className="fab fa-app-store"></i>
                <h2>App Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nulla nibh, tincidunt sit amet sapien quis.
                </p>
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.portfolio}>
          <div className={styles.containerWork}>
            <h1 className={styles.subTitle}>My Work</h1>
            <div className={styles.workList}>
              <div className={styles.work}>
                <Image
                  className={`${styles.workImg} hover:scale-90 overflow-hidden`}
                  alt="work"
                  src="/FrostCord1.png"
                  width={500}
                  height={500}
                />
                <div className={styles.layer}>
                  <h3>FrostCord</h3>
                  <p>
                    A FrostPunk themed Discord Clone. An instant messaging web
                    application that supports real-time communication via
                    web-sockets
                  </p>
                  <a
                    href="https://github.com/FrostCord/FrostCord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="gh"
                      src="/github-mark-white.png"
                      width={1000}
                      height={1000}
                      className="hover:scale-110 transition duration-150"
                    />
                  </a>
                </div>
              </div>
              <div className={`${styles.work}`}>
                <Image
                  className={`${styles.workImg}  hover:scale-90 overflow-hidden`}
                  alt="work"
                  src="/RemindMe1.png"
                  width={800}
                  height={800}
                />
                <div className={styles.layer}>
                  <h3>RemindMe</h3>
                  <p>
                    A personal reminder web application which enables users to
                    generate scheduled tasks and events
                  </p>
                  <a
                    href="https://github.com/Stan-l-e-y/RemindMe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="gh"
                      src="/github-mark-white.png"
                      width={1000}
                      height={1000}
                      className="hover:scale-110 transition duration-150"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <a href="#" className={styles.btn}>
              See more
            </a> */}
          </div>
        </div>

        <div id="contact">
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.contactLeft}>
                <h1 className={styles.subTitle}>Contact Me</h1>
                <div className="flex items-center ">
                  <span className="mr-5">stanleytsonev@hotmail.com</span>
                  <div className="">
                    <a
                      href="https://www.linkedin.com/in/stanleytsonev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt="linkedin"
                        src="/linked.png"
                        width={30}
                        height={30}
                      />
                    </a>
                    <a href="">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                {/* <a href="images/my-cv.pdf" download className="btn btn2">
                  Download CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
