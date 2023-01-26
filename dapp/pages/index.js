import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { BuyCoin } from '../components/BuyCoin';
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
            <BuyCoin/>
          </main>
      </div>
    </>
  );
}
