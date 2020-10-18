import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from 'src/app/angular-basics/directives/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todoInput: TodoInterface;
  @Output() todoRemoved = new EventEmitter<TodoInterface>();

  constructor() { }

  ngOnInit(): void {
    console.log('todoInput: ', this.todoInput);
  }

  deleteTodo(): void {
    // console.log('usuwam todo...', this.todoInput);
    this.todoRemoved.emit(this.todoInput);
  }

}
