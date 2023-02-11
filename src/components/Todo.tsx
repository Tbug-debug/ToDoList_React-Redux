import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../redux/modules/todo";
import { moveToDo } from "../redux/modules/todo";
import styled from "styled-components";

const Todobox = styled.div`
  max-width: 15rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8%;
  button {
    background: white;
    border: 3px solid #222831;
    color: black;
    font-weight: bolder;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 14px;
    &:hover {
      background-color: #b83b5e;
      color: white;
    }
  }
`;

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
