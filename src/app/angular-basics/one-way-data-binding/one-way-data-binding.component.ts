import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.scss']
})
export class OneWayDataBindingComponent implements OnInit {
  title: string = 'One way data binding something new';
  color: string = 'red';
  divWidth: string = '100px';
  divHeight: string = '100px';
  name: string = 'Damian';
  age: number = 29;
  countNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  myFirstMethod(): void {
    console.log('my first method!');
  }

  clickListener(): void {
    console.log('click click!');
  }

  incrementListener(): void {
    this.countNumber++;
  }

}
