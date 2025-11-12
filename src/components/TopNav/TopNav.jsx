import styles from "./TopNav.module.css";
import LoginIcon from "../../assets/person-circle.svg";

export default function TopNav() {
  return (
    <>
      <div className={styles.logoContainer}>
        <div className={styles.headerLogo}>Motion</div>
      </div>
      <nav className={styles.headerContainer}>
        <div className={styles.headerCenter}>
          <a href="#">Home</a>
          <a href="#">Favorites</a>
        </div>
        <div className={styles.headerRight}>
          <LoginIcon className={styles.LoginIcon} />
        </div>
      </nav>
    </>
  );
}
