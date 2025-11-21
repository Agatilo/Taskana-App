import icon from "../../../public/records.svg";
import styles from "./sidebar.module.css";
import Statistic from "../statistic/Statistic";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src={icon}
        className={styles.sidebar_icon}
        alt="Блокнот для записей"
        width={231}
        height={168}
      />
      <p>
        Здесь мы поможем тебе управлять твоими <br /> задачами, отслеживать
        статистику
        <br /> и самочувствие.
      </p>
      <Statistic />
    </aside>
  );
}
