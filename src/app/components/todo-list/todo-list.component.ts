import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Todo } from '../../models/todo.model';
import { validFilters } from '../../store/filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  currentFilter: validFilters;

  constructor(private store: Store<AppState>) {
    // this.store.select('todos').subscribe((todos) => (this.todos = todos));
    this.store.subscribe( ({ todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    })
  }

  ngOnInit(): void {}
}
