import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href='/'>
            <a>Home</a>
        </Link>

        <Link href='/about'>
            <a>About me</a>
        </Link>

        <Link href='/work'>
            <a>work</a>
        </Link>
    </nav>

      <div className={styles.container}>
        <Link href="/about">
          <div className={styles.card}>
            <h1>My name is Lennart</h1>
            <p>click me</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

