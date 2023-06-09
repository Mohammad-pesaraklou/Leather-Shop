import { Button } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.topTxt}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga
        enim ducimus quos commodi inventore?
      </p>
      <div className={styles.textContainer}>
        <p>
          The Diaper
          <br />
          <span>Bag BackPack</span>
        </p>
      </div>
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
