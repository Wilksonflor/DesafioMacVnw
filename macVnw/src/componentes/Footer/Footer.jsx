import logo from "../../assets/logo.png";
import playstore from "../../assets/playstore.png";
import applestore from "../../assets/appstore.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.logoFooter}>
          <img src={logo} alt="" />
          <p>© McDonald’s 2024</p>
        </div>

        <div className={styles.containerStore}>
          <img src={playstore} alt="" />
          <img src={applestore} alt="" />
        </div>
      </footer>
    </>
  );
};
