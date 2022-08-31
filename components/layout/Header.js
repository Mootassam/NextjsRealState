import React from "react";
import Image from "next/image";
import { vector } from "../../images";

function Header(props) {
  const styles = props.styles;
  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.nav}>
          <Image src={vector} alt='Vector Image' />
          <ul>
            <li>
              <a href='#offres'> Top offers </a>
            </li>
            <li>
              <a href=''> Search in offers</a>
            </li>
            <li>
              <a href='#references1'> References</a>
            </li>
            <li>
              <a href='#aboutus'> About us</a>
            </li>
            <li>
              <a href='#team'> Our team</a>
            </li>
          </ul>
        </div>
        <div className={styles.button__large}>Contact us</div>
      </div>
    </div>
  );
}

export default Header;
