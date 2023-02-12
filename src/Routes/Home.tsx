import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { addToDo } from "../redux/modules/todo";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { RooteState } from "../redux/config/configStore";

const ToDoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  max-width: 75rem;
  min-width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #a6e3e9;
  font-size: 30px;
  font-family: "TTTtangsbudaejjigaeB";
`;

const Input = styled.div`
  width: 37.5rem;
  display: flex;
  justify-content: space-around;
  input {
    padding: 10px;
    border-radius: 10px;
    background: rgb(233, 233, 233);
    border: none;
    outline: none;
  }
`;

const ToDoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 75rem;
  min-width: 80rem;
  background-color: #cbf1f5;
  padding-bottom: 2rem;
`;

const Doing = styled.div`
  min-height: 18.5rem;
  width: 90%;
  padding-top: 2rem;
  font-family: "TTTtangsbudaejjigaeB";
`;

const DoingOut = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 18.5rem);
  grid-template-rows: repeat(1, 15rem);
`;

const ToDoneBox = styled.div`
  min-height: 16.5rem;
  width: 90%;
  padding-top: 2rem;
  font-family: "TTTtangsbudaejjigaeB";
`;

const AddBtn = styled.button`
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
`;

interface DataTodo {
  ToDoTitle: string;
  ToDoText: string;
}

function Home() {
  const { register, handleSubmit, reset } = useForm<DataTodo>();

  const todo = useSelector((state: RooteState) => state.persist.todo);
  const dispatch = useDispatch();

  function onTodoSubmit(data: DataTodo) {
    dispatch(addToDo(data.ToDoTitle, data.ToDoText));
    reset();
  }

  return (
    <>
      <ToDoLayout>
        <InputBox>
          <h1>ToDo List</h1>
          <form onSubmit={handleSubmit(onTodoSubmit)}>
            <Input>
              <input
                {...register("ToDoTitle", { required: true })}
                placeholder="제목"
              />
              <input
                {...register("ToDoText", { required: true })}
                placeholder="내용"
              />
              <AddBtn>add</AddBtn>
            </Input>
          </form>
        </InputBox>
        <ToDoCard>
          <Doing>
            <div>
              <h1>할일</h1>
            </div>
            <DoingOut>
              {todo?.map((todo) =>
                todo.isDon === false ? (
                  <Todo
                    {...todo}
                    key={todo?.id}
                    id={todo?.id}
                    isDon={todo?.isDon}
                  />
                ) : null
              )}
            </DoingOut>
          </Doing>
          <ToDoneBox>
            <div>
              <h1>다 한일</h1>
            </div>
            <DoingOut>
              {todo?.map((todo) =>
                todo.isDon === true ? (
                  <Todo
                    {...todo}
                    key={todo.id}
                    id={todo.id}
                    isDon={todo.isDon}
                  />
                ) : null
              )}
            </DoingOut>
          </ToDoneBox>
        </ToDoCard>
      </ToDoLayout>
    </>
  );
}

export default Home;
