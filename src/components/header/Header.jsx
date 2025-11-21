import Logo from "../logo/Logo";
import Button from "../button/Button";
import styles from "./header.module.css";
import icon_plus from "../../../public/plus.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo size="medium" />
      <Button className={styles.button}>
        <img src={icon_plus} alt="+" className={styles.plus} /> Создать
      </Button>
    </header>
  );
}
