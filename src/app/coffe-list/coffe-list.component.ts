import { Component, OnInit } from '@angular/core';
import { Coffe } from './coffe';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.scss']
})
export class CoffeListComponent implements OnInit {
  
  coffe : Coffe[] = [
    {
      "name" : "Cafe Pistacho",
      "price" : 600,
      "image" :"assets/img/coffe1.jpg",
    },
    {
      "name" : "Capuchino Italiano",
      "price" : 600,
      "image" :"assets/img/coffe2.jpg",
    },
    {
      "name" : "Cafe",
      "price" : 600,
      "image" :"assets/img/coffe3.jpg",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
