import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { toggle, edit, deleteTodo } from '../../store/todo-store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisic') txtInputFisic: ElementRef;

  completed: boolean;
  editing: boolean = false;

  chkCompleted: FormControl;
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.completed = this.todo.completed;
    this.chkCompleted = new FormControl(this.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputFisic.nativeElement.select();
    });
  }
  terminateEdit() {
    this.editing = false;
    if(!this.txtInput.invalid && this.txtInput.value !== this.todo.text) {
      this.store.dispatch(edit({ id: this.todo.id, text: this.txtInput.value }));
    }

  }
  deleteTodo() {
    this.store.dispatch( deleteTodo({id: this.todo.id}));
  }
}
