import styles from "./taskList.module.css";

export default function TaskList({ children, subtitle, message, image }) {
  return (
    <main className={styles.taskList}>
      <h2 className={styles.taskList_subtitle}>{subtitle}</h2>
      <p className={styles.taskList_message}>{message}</p>
      <img
        src={image}
        alt="Задачи"
        className={styles.taskList_img}
        width={126}
        height={100}
      />
      {children}
    </main>
  );
}
