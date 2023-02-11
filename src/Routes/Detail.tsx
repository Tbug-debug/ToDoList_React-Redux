import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RooteState } from "../redux/config/configStore";

const Detail = () => {
  const { id } = useParams();
  const todo = useSelector((state: RooteState) => state.persist.todo);
  const toDo = todo.find((toDo) => toDo.id === parseInt(id ?? ""));
  return (
    <div>
      <Link to={`/`}>
        <h4>이전으로</h4>
      </Link>
      <h1>Detail</h1>
      <h2>유저 ID: {toDo?.id}</h2>
      <h3>제목: {toDo?.text}</h3>
      <h3>내용: {toDo?.body}</h3>
    </div>
  );
};

export default Detail;
