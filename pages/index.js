import styles from "./index.module.css";

const HeaderHero = () => {
  return (
    <div className={styles.headerHeroDiv}>
      <div className={styles.headerHeroDiv1}>
        <img
          className={styles.unsplashqom5MPOERIIcon}
          alt=""
          src="../unsplashqom5mpoeri@2x.png"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.textContantDiv}>
          <b className={styles.theArtOfSpeedFoodQuality}>
            <p className={styles.theArtOfSpeed}>
              <span className={styles.thSpan}>Th</span>
              <span>e Art of speed</span>
            </p>
            <p className={styles.foodQualityP}>
              <span>food Quality</span>
            </p>
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo}>
            <p className={styles.theArtOfSpeed}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className={styles.foodQualityP}>
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>
          <div className={styles.itsQuickAmusing}>{`Its Quick & Amusing!`}</div>
          <button className={styles.button}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.seeMenuDiv}>See Menu</div>
          </button>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.lineDiv} />
          <div className={styles.lineDiv1} />
          <div className={styles.groupDiv1}>
            <div className={styles.div}></div>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <img className={styles.image68Icon} alt="" src="../image-68@2x.png" />
          <img className={styles.ellipseIcon} alt="" src="../ellipse-34.svg" />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-8926@2x.png"
          />
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-8928@2x.png"
          />
          <img
            className={styles.unsplashMTzZD5z720Icon}
            alt=""
            src="../unsplashmtzzd5z720@2x.png"
          />
          <img
            className={styles.unsplashGkcXM3VY34Icon}
            alt=""
            src="../unsplashgkc-xm3vy34@2x.png"
          />
        </div>
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-8933@2x.png"
        />
      </div>
      <div className={styles.navberDiv}>
        <a className={styles.menuA}>Menu</a>
        <a className={styles.blogA}>Blog</a>
        <a className={styles.pages}>Pages</a>
        <a className={styles.about}>{`About `}</a>
        <a className={styles.shopA}>{`Shop `}</a>
        <a className={styles.contact}>{`Contact `}</a>
        <img
          className={styles.projectStatusIcon}
          alt=""
          src="../project-status.svg"
        />
        <input className={styles.rectangleInput} type="text" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search..."
        />
        <img className={styles.groupIcon} alt="" src="../group.svg" />
        <img className={styles.handbagIcon} alt="" src="../handbag.svg" />
        <a className={styles.homeA}>Home</a>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-33.svg" />
        <b className={styles.foodtuckB}>Foodtuck</b>
      </div>
    </div>
  );
};

export default HeaderHero;
