import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialstate: validFilters = 'all';

const _filterReducer = createReducer<validFilters, Action>(
  initialstate,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
