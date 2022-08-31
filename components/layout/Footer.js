import React from "react";
import Image from "next/image";
import { VectorFooter, plane } from "../../images";
function Footer(props) {
  const styles = props.styles;
  return (
    <React.Fragment>
      <div className={styles.app__newslettre} id='newsLettre'>
        <Image src={plane} alt='Plane Image' />
        <div className={styles.newslettre__detaills}>
          <h4>Subscribe to newsletter</h4>
          <div className={styles.subHeader}>
            Get the latest news and interesting offers and real estate
          </div>
          <div className={styles.newslettre__form}>
            <input type='text' placeholder=' Your e-mail address' />
            <div className={styles.button__secondary}>Subscribe</div>
          </div>
        </div>
      </div>
      <div className={styles.app__footer}>
        <Image src={VectorFooter} alt='' />
      </div>
    </React.Fragment>
  );
}

export default Footer;
