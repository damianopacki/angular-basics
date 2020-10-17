import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.scss']
})
export class OneWayDataBindingComponent implements OnInit {
  title = true;

  constructor() { }

  ngOnInit(): void {
  }

  myFirstMethod(): void {
    console.log('my first method!');
  }

}
