import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import next from "next";
import arrow from '../public/arrow.svg';
import Image from 'next/image'


function About() {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div className={styles.card}>
          <h1>Lennart</h1>
          <p>
            I am a 3th year webdeveloper at mboRijnland Zoetermeer in the
            Netherlands. <br />
            My goal is to make the internet a better and more easy to use place.
          </p>
        </div>

        <Link href="https://develokey.com">
          <div className={styles.card}>
            <a>
              {" "}
              <h2>DeveloKey</h2>
            </a>
            <p>lorem ipsum is a dummy text</p>
          </div>
        </Link>
      </div>
      <div className={styles.flex}>

      <div className={styles.card}>
        <Link href="https://github.com/dragondungeon1">
          <a>
            {" "}
            <h2>My projects</h2>
          </a>
        </Link>
      </div>

      <div className={styles.card}>
        <Link href="/">
          <a>
            {" "}
            <h2>next</h2>
          </a>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default About;
