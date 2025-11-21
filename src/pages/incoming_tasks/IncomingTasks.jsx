import MainContainer from "../../components/mainContainer/MainContainer";
import Footer from "../../components/footer/Footer";
import img_task from "../../../public/tasks.svg";
import TaskList from "../../components/taskList/TaskList";

export default function Incoming() {
  return (
    <MainContainer title="Входящие">
      <TaskList
        subtitle="Все твои задачи организованы как надо"
        message="Отличная работа! Ты большой молодец!"
        image={img_task}
      ></TaskList>

      <Footer
        text="Проект выполнен в рамках стажировки "
        linkUrl="https://preax.ru/sprints"
        linkText="PREAX"
        rel="noopener noreferrer"
      />
    </MainContainer>
  );
}
