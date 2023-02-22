import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Resume() {
  const [navClicked, setNavClicked] = useState<string>('resume');
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/metapicportfolio.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        <div className={styles.header}>
          <div
            className={`${styles.container} flex flex-col justify-center items-center`}
          >
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
              </ul>
            </nav>
            <iframe
              className={`mt-5 ${styles.resume}`}
              src="/resume.pdf"
            ></iframe>
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
