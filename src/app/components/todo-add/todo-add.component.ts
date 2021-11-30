import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { createToDo } from '../../store/todo-store/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  addTodo(event: any) {
    if( this.txtInput.valid && event.code === "Enter" ) {
      this.store.dispatch(createToDo({text: this.txtInput.value}));
      this.txtInput.setValue("");
    }
  }
}
