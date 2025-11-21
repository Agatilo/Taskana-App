import styles from "./footer.module.css";

export default function Footer({ text = "", linkUrl = "", linkText = "" }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>
        {text}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </p>
    </footer>
  );
}
