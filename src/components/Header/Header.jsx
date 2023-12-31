import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/articles">
            Article
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
