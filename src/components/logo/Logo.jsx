import styles from "./logo.module.css";
import logoImage from "../../../public/logo.svg";

const Logo = ({ size = "medium", className = "" }) => {
  return (
    <img
      className={`${styles.logo} ${styles[`logo__${size}`]} ${className}`}
      src={logoImage}
      alt="Логотип компании"
      width={126}
      height={100}
    />
  );
};

export default Logo;
