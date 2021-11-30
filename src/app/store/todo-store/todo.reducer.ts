import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { deleteCompleted } from './todo.actions';
import {
  createToDo,
  toggle,
  edit,
  deleteTodo,
  toggleAll,
} from './todo.actions';

export const initialstate: Todo[] = [
  new Todo('Save the world'),
  new Todo('Beat Thanos'),
  new Todo('Buy Ironman costume '),
  new Todo("Steal Captain America's Shield"),
];

const _toDoReducer = createReducer(
  initialstate,
  on(createToDo, (state, { text }) => [...state, new Todo(text)]),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),

  on(edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),

  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(toggleAll, (state, { completed }) => {
    return state.map((todo) => {
      return { ...todo, completed };
    });
  }),

  on(deleteCompleted, (state) => {
    return state.filter( todo => !todo.completed);
  })

);

export function toDoReducer(state: any, action: Action) {
  return _toDoReducer(state, action);
}
