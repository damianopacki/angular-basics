import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoInterface } from '../angular-basics/directives/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodoInterface[] = [
    {title: 'kup kawę', isDone: false},
    {title: 'kup mleko', isDone: false},
    {title: 'naucz się angulara', isDone: true},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todoTitle: string): void {
    console.log('dodajemy todo: ', todoTitle);
    this.todos.push({title: todoTitle, isDone: false});
  }

  deleteTodo(todo: TodoInterface): void {
    console.log('todo: ', todo);
    this.todos = this.todos.filter(todoItem => todoItem.title !== todo.title);
  }

}
