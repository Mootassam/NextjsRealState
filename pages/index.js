import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { plane } from "../images";
import { Header, Home, Rooms, Footer } from "../components";
import Link from "next/link";

export default function Index() {
  return (
    <div className={styles.app}>
      <Header styles={styles} />
      <Home styles={styles} />
      <Footer styles={styles} />
    </div>
  );
}
