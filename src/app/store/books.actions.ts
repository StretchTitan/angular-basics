import { createAction, props } from "@ngrx/store";


export const setBooks = createAction(
    'Set Books',
    props<{ books: any }>()
)