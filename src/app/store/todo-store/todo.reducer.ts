import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { createToDo } from './todo.actions';

export const initialstate: Todo[] = [
    new Todo('Save the world')
];

const _toDoReducer = createReducer(
  initialstate,
  on(createToDo, (state, { text }) => [...state, new Todo(text)])
);

export function toDoReducer(state: any, action: Action) {
    return _toDoReducer(state, action);
}
