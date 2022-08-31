import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  plane,
  search,
  dots,
  headerBackground,
  localisation,
  header,
} from "../images";
import { Header, Home, Rooms, Footer } from "../components";
import Link from "next/link";

export default function Index() {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <Header styles={styles} />
      </div>
      <div className={styles.header__content}>
        <div className={styles.content}>
          <div className={styles.content__left}>
            <h1>Modern living for everyone</h1>
            <div className={styles.subHeader}>
              We provide a complete service for the sale, purchase or rental of
              real estate. We have been operating in Madrid and Barcelona more
              than 15 years.
            </div>
          </div>
          <div className={styles.content__right}>
            <Image src={header} className={styles.image__header} alt='' />
            <Image
              src={headerBackground}
              className={styles.image__background}
              alt=''
            />
            <Image src={dots} alt='Dots ' className={styles.image__dots} />
          </div>
          <div className={styles.content__bottom}>
            <select name='' id=''>
              <option value=''>Property type</option>
            </select>
            <div className={styles.right__input}>
              <Image src={localisation} alt='Localisation Icon' />
              <input type='text' placeholder='Search of location' />
            </div>
            <div className={styles.button__large}>
              <Image
                src={search}
                alt='Search Icon'
                className={styles.image__search}
              />
              Search
            </div>
          </div>
        </div>
      </div>

      <Home styles={styles} />
      <Footer styles={styles} />
    </div>
  );
}
