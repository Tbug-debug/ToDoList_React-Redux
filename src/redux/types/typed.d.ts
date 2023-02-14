import { ADD, DELETE, MOVEDON } from "../modules/todo";

declare global {
  type AddToDoAction = {
    type: typeof ADD;
    text: string;
    body: string;
  };

  type DeleteToDoAction = {
    type: typeof DELETE;
    id: number;
  };

  type MoveToDoAction = {
    type: typeof MOVEDON;
    id: number;
    isDon: boolean;
  };

  interface ToDo {
    text: string;
    body: string;
    id: number;
    isDon: boolean;
  }

  type ToDoAction = AddToDoAction | DeleteToDoAction | MoveToDoAction;
}
