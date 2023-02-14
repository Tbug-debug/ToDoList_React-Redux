import { ADD, DELETE, MOVEDON } from "../redux/modules/todo";

export interface AddToDoAction {
  type: typeof ADD;
  text: string;
  body: string;
}

export interface DeleteToDoAction {
  type: typeof DELETE;
  id: number;
}

export interface MoveToDoAction {
  type: typeof MOVEDON;
  id: number;
  isDon: boolean;
}

export interface ToDo {
  text: string;
  body: string;
  id: number;
  isDon: boolean;
}

export type ToDoAction = AddToDoAction | DeleteToDoAction | MoveToDoAction;
