import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisic') txtInputFisic: ElementRef;

  completed: boolean;
  editing: boolean = false;

  chkCompleted: FormControl;
  txtInput: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.completed = this.todo.completed;
    this.chkCompleted = new FormControl( this.completed );
    this.txtInput = new FormControl(this.completed, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout( ( )=> {
      this.txtInputFisic.nativeElement.select();
    })  
  }
  terminateEdit() {
    this.editing= false;
  }
}
