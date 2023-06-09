// styles
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
// icon
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/about-us"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
        </ul>
      </div>
      <div className={styles.center}>
        <h3>CHARM 20</h3>
      </div>
      <div className={styles.rightSide}>
        <ul>
          <li>Account</li>
          <li>
            <CiSearch />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
