import { Component, OnInit } from '@angular/core';
import { Ice } from './ice';


@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss']
})
export class IceCreamListComponent implements OnInit {
  ices : Ice[] = [
    {
      "quantity" : "1/4kg",
      "price" : 600,
      "stock" :  0,
      "image" : "assets/img/ice.jpg",
      "supply" : false,
    },
    {
      "quantity" : "1/2kg",
      "price" : 1100,
      "stock" :  5,
      "image" : "assets/img/ice.jpg",
      "supply" : true,
    },
    {
      "quantity" : "1kg",
      "price" : 2000,
      "stock" :  5,
      "image" : "assets/img/ice.jpg",
      "supply" : false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
