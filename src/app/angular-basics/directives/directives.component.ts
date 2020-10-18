import { Component, OnInit } from '@angular/core';
import { TodoInterface } from './todo.interface';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  doesExist: boolean = false;
  age: number = 18;
  todos: TodoInterface[] = [
    {title: 'kup kawę', isDone: false},
    {title: 'kup mleko', isDone: false},
    {title: 'naucz się angulara', isDone: true},
  ];
  // todos: Array<TodoInterface> = [
  //   {title: 'kup kawę', isDone: false},
  //   {title: 'kup mleko', isDone: false},
  //   {title: 'naucz się angulara', isDone: true},
  // ];
  person: string = 'Bob';

  constructor() { }

  ngOnInit(): void {
  }

  isOldEnough(): boolean {
    return this.age === 18 ? true : false;
    // if (this.age >= 18) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

}
