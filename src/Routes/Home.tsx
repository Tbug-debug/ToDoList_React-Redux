import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { addToDo } from "../redux/modules/todo";
import {
  ToDoLayout,
  InputBox,
  Input,
  ToDoCard,
  Doing,
  DoingOut,
  ToDoneBox,
  AddBtn,
} from "../style/styled";
import { useForm } from "react-hook-form";
import { RooteState } from "../redux/config/configStore";

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
