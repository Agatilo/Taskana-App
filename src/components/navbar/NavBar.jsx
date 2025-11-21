import incoming_icon from "../../../public/incoming.svg";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.incoming_list}>
        <li>
          <a href="#" className={styles.incoming_link}>
            <img
              src={incoming_icon}
              className={styles.icon}
              alt="Входящие"
              width={18}
              height={16}
            ></img>
            <p>Входящие</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
