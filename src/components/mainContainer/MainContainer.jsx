import styles from "./mainContainer.module.css";

export default function MainContainer({ title = "", children }) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainContainer_content}>
        <h1 className={styles.mainContainer_h1}>{title}</h1>
        {children}
      </div>
    </main>
  );
}
