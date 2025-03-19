import styles from './Home.module.scss';
import logo from "../../assets/logo-transparent.svg";

export function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} alt="logo" src={logo} />
      <p className={styles.tagline}>EuroLeague Grids</p>
      <a href="https://localhost:7110/accounts/login?returnUrl=http://localhost:5173/choose-mode" className={styles.loginButton}>Login</a>
    </div>
  );
}
