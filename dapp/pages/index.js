import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Stream Stake</title>
        <meta
          name="description"
          content="Passive rewards for Filecoin ecosystem!"
        />
      </Head>
      <div className={styles.container}>
          
          <main className={styles.main}>
            <div>
              <div className={styles.title}>
                <span className={`${styles.titleWord} ${styles.word2}`}>
                  Develop staking interface
                </span>
              </div>
            </div>
          </main>
      </div>
    </>
  );
}
