import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import styles from "./appLayout.module.css";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
