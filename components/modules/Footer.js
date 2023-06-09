import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <p>CHARM 20</p>
        </div>
        <div className={styles.linkContainer}>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Github</p>
        </div>
        <div className={styles.linkContainer}>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>left</p>
        <p>right</p>
      </div>
    </div>
  );
};

export default Footer;
