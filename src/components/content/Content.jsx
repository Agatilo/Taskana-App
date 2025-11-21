import styles from "./content.module.css";
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import Incoming from "../../pages/incoming_tasks/IncomingTasks";

export default function Content() {
  return (
    <section className={styles.main}>
      <NavBar />
      <Incoming />
      <SideBar />
    </section>
  );
}
