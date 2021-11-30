import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCompleted } from 'src/app/store/todo-store/todo.actions';
import { AppState } from '../../store/app.reducer';
import { validFilters, setFilter } from '../../store/filters/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: validFilters;
  filters: validFilters[] = ['all', 'completed', 'pending']
  pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
      this.store.subscribe( state => {
        this.currentFilter = state.filter;
        this.pendings = state.todos.filter( todo => !todo.completed).length;
      })
  }

  changeFilter(filter) {
    this.store.dispatch(setFilter({ filter }));
  }

  deleteCompleted() {
    this.store.dispatch(deleteCompleted());
  }
}
