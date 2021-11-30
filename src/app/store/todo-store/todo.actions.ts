import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const createToDo = createAction('[TODO] Create toDo', props<{text: string}>());