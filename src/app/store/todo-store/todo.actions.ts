import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const createToDo = createAction(
  '[TODO] Create toDo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit todo',
  props<{ id: number, text: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToogleAll todo',
  props<{ completed: boolean }>()
);

export const deleteCompleted = createAction(
  '[TODO] delete Completed'
)
