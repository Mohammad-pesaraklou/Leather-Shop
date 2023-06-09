import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
// styles
import styles from "../styles/Attributes.module.scss";

function Attributes() {
  return (
    <div className={styles.container}>
      <div>
        <h3>Why us?</h3>
      </div>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
