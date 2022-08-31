import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { offre1, offre2, offre3, room3, room2, search } from "../../images";
function Rooms(props) {
  const { t } = useTranslation("common");

  const styles = props.styles;
  return (
    <>
      <div className={styles.offres__content}>
        <div className={styles.content__offres}>
          <h2>{t("metaTitle")}</h2>
          <div className={styles.content__text}>
            اختر من بين العروض الأكثر فائدة
          </div>
        </div>
      </div>
      <div className={styles.offres__search}>
        <div className={styles.search__form}>
          <div className={styles.form__input}>
            <input type='text' placeholder='أدخل كلمة رئيسية' />
            <div className={styles.button__large}>
              <Image src={search} alt='' />
              Search
            </div>
          </div>
          <div className={styles.form__filter}>
            <div className={styles.filter__bar}>
              {/* <div class="filter__text">Filter Settings</div> */}
            </div>
          </div>
          <div className={styles.form__select}>
            <select name='' id=''>
              <option value=''>Sale</option>
            </select>
            <select name='' id=''>
              <option value=''>Select room flat</option>
            </select>
            <select name='' id=''>
              <option value=''>Select location</option>
            </select>
            <select name='' id=''>
              <option value=''>Most expensive</option>
            </select>
          </div>
          <div className={styles.form__range}>
            <div className={styles.range__bar} />
            <div className={styles.range__number}>
              <div className={styles.number__left}>0 €</div>
              <div className={styles.number__right}>980 000 €</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page__offres}>
        <div className={styles.offres__rooms}>
          <div>
            <a href='../pages/detaillOffre.html'>
              <Image src={offre1} alt='' />
            </a>
            <div className={styles.rooms__detaills}>
              <h5>Large 4-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>320 000€</p>
              <p>Barcelona IX.</p>
            </div>
          </div>
          <div>
            <Image src={room2} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>5i large design apartment with terrace</h5>
              <p className={styles.cost}>280 000€</p>
              <p>Madrid VI.</p>
            </div>
          </div>
          <div>
            <Image src={offre2} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre2} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre1} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={room3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre2} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={room3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={offre1} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={room3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={room3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
          <div>
            <Image src={room3} alt='' />
            <div className={styles.rooms__detaills}>
              <h5>3-room apartment with a beautiful terrace</h5>
              <p className={styles.cost}>350 000€</p>
              <p>Madrid II.</p>
            </div>
          </div>
        </div>
        <div className={styles.offres__button}>
          <div className={styles.button__small__secondary}>Show Next</div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
