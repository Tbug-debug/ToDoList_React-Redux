import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../redux/modules/todo";
import { moveToDo } from "../redux/modules/todo";
import { Todobox, BtnBox } from "../style/styled";

interface TodoProps {
  text: string;
  body: string;
  id: number;
  isDon: boolean;
}

function Todo({ text, body, id, isDon }: TodoProps) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(deleteToDo(id));
  }

  function movedone() {
    dispatch(moveToDo(id, !isDon));
  }

  return (
    <Todobox>
      <Link to={`/${id}`}>
        <h3>상세보기</h3>
      </Link>
      <h3>{text}</h3>
      <h4>{body}</h4>
      <BtnBox>
        <button onClick={movedone}>{isDon ? "취소" : "완료"}</button>
        <button onClick={onClick}>삭제</button>
      </BtnBox>
    </Todobox>
  );
}

export default Todo;
