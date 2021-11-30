import { ActionReducerMap } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { toDoReducer } from './todo-store/todo.reducer';
import { validFilters } from './filters/filter.actions';
import { filterReducer } from './filters/filter.reducer';

export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: toDoReducer,
  filter: filterReducer
}
