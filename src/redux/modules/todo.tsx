import { ToDo, ToDoAction } from "../../type/typed";

export const ADD = "ADD";
export const DELETE = "DELETE";
export const MOVEDON = "MOVEDON";

export const addToDo = (text: string, body: string) => {
  return {
    type: ADD,
    text,
    body,
  };
};

export const deleteToDo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};

export const moveToDo = (id: number, isDon: boolean) => {
  return {
    type: MOVEDON,
    id,
    isDon,
  };
};

const reducer = (state: ToDo[] = [], action: ToDoAction) => {
  switch (action.type) {
    case ADD:
      return [
        { text: action.text, body: action.body, id: Date.now(), isDon: false },
        ...state,
      ];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    case MOVEDON:
      return state.map((toDo) => {
        if (toDo.id === action.id) {
          return { ...toDo, isDon: action.isDon };
        }
        return toDo;
      });
    default:
      return state;
  }
};

export default reducer;
