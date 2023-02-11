const ADD = "ADD";
const DELETE = "DELETE";
const MOVEDON = "MOVEDON";

interface AddToDoAction {
  type: typeof ADD;
  text: string;
  body: string;
}

interface DeleteToDoAction {
  type: typeof DELETE;
  id: number;
}

interface MoveToDoAction {
  type: typeof MOVEDON;
  id: number;
  isDon: boolean;
}

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

export interface ToDo {
  text: string;
  body: string;
  id: number;
  isDon: boolean;
}

export type ToDoAction = AddToDoAction | DeleteToDoAction | MoveToDoAction;

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
