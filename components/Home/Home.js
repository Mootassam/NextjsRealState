import React from "react";
import Image from "next/image";
import {
  dots,
  room1,
  room2,
  room3,
  room4,
  aboutUs,
  team1,
  team2,
  team3,
  team4,
  team5,
  precedent,
  more,
  point,
} from "../../images";
function Home(props) {
  const styles = props.styles;
  return (
    <>
      <div className={styles.app__offers} id='offres'>
        <div className={styles.offres}>
          <div className={styles.offres__header}>
            <h2>Top offers</h2>
            <div className={styles.offres__detaill}>
              <div className={styles.subHeader}>
                Fulfill your career dreams, enjoy all the achievements of the
                city center and luxury housing to the fullest.
              </div>
              <div className={styles.button__secondary}>Show all offers</div>
            </div>
            <div className={styles.offres__nav}>
              <div className={styles.nav__progress} />
              <div className={styles.nav__precedent}>
                <Image src={precedent} alt='' />
              </div>
              <div className={styles.nav__more}>
                <Image src={more} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.offres__rooms}>
            <div>
              <Image src={room1} alt='' />
              <div className={styles.rooms__detaills}>
                <h5>Large 4-room apartment with a beautiful terrace</h5>
                <p className='cost'>320 000€</p>
                <p>Barcelona IX.</p>
              </div>
            </div>
            <div>
              <Image src={room2} alt='' />
              <div className={styles.rooms__detaills}>
                <h5>5i large design apartment with terrace</h5>
                <p className='cost'>280 000€</p>
                <p>Madrid VI.</p>
              </div>
            </div>
            <div>
              <Image src={room3} alt='' />
              <div className={styles.rooms__detaills}>
                <h5>3-room apartment with a beautiful terrace</h5>
                <p className='cost'>350 000€</p>
                <p>Madrid II.</p>
              </div>
            </div>
            <div>
              <Image src={room4} alt='' />
              <div className={styles.rooms__detaills}>
                <h5>Magnificent duplex in a private villa</h5>
                <p className='cost'>280 000€</p>
                <p>Barcelona IV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.app__about}>
        <div className={styles.about__us} id='aboutus'>
          <div className={styles.about__content}>
            <div className={styles.about__left}>
              <Image
                src={aboutUs}
                className='aboutus__left'
                alt='about us image'
              />
              <Image src={dots} className='about__dots' alt='' />
            </div>
            <div className={styles.about__right}>
              <h2>About us</h2>
              <div className={styles.right__detaills}>
                <p>
                  We are a company that connects the world of real estate and
                  finance. We provide a complete service for the sale, purchase
                  or rental of real estate. Our advantage is more than 15 years
                  of experience and soil in attractive locations in Slovakia
                  with branches in Bratislava and Košice.
                </p>
                <p>
                  We have a connection to all banks on the Slovak market, so we
                  can solve everything under one roof. By constantly innovating
                  our business activities, we move forward and we are able to
                  offer truly above-standard services that set us apart from the
                  competition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about__team} id='team'>
          <div className={styles.team}>
            <div>
              <Image src={team1} alt='' />
              <div className={styles.subHeader}>Davis Carder</div>
              <p>Super duper position</p>
            </div>
            <div>
              <Image src={team5} alt='' />
              <div className={styles.subHeader}>Maren Press</div>
              <p>Super duper position</p>
            </div>
            <div>
              <h2>Our Team</h2>
              <div className={styles.subHeader}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                rutrum donec ultricies cras id ac.
              </div>
            </div>
            <div>
              <Image src={team4} alt='' srcSet='' />
              <div className={styles.subHeader}>Haylie Donin</div>
              <p>Super duper position</p>
            </div>
            <div>
              <Image src={team3} alt='' srcSet='' />
              <div className={styles.subHeader}>Randy Rosser</div>
              <p>Super duper position</p>
            </div>
            <div>
              <Image src={team2} alt='' srcSet='' />
              <div className={styles.subHeader}>Miracle Bator</div>
              <p>Super duper position</p>
            </div>
          </div>
          <div className={styles.references__navigations}>
            <ul>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className={styles.about__references} id='references'>
          <div className={styles.references}>
            <div className={styles.references__header}>
              <h2>References</h2>
              <div className={styles.offres__detaill}>
                <div className={styles.subHeader}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  rutrum donec ultricies cras id ac.
                </div>
              </div>
            </div>
            <div className={styles.references__content}>
              <div>
                <div className={styles.references__detaills}>
                  <Image src={point} alt='' />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tristique in pellentesque ultrices et massa neque, convallis
                    lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                    scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst
                    nunc placerat ultricies pretium.
                  </p>
                </div>
                <div className={styles.author}>
                  <div className={styles.subHeader}>Emerson Aminoff</div>
                  <p>3 bedroom apartmentt in Madrid</p>
                </div>
              </div>
              <div>
                <div className={styles.references__detaills}>
                  <Image src={point} alt='' />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tristique in pellentesque ultrices et massa neque, convallis
                    lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                    scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst
                    nunc placerat ultricies pretium.
                  </p>
                </div>
                <div className={styles.author}>
                  <div className={styles.subHeader}>Jocelyn Stanton</div>
                  <p>2 bedroom apartmentt in Barcelona</p>
                </div>
              </div>
            </div>
            <div className={styles.references__navigations}>
              <ul>
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
