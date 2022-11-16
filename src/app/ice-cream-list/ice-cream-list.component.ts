import { Component, OnInit } from '@angular/core';
import { Ice } from './Ice';


@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss']
})
export class IceCreamListComponent implements OnInit {
  ices : Ice[] = [
    {
      "cant" : "1/4kg",
      "price" : 600,
      "stock" :  0,
      "image" : "assets/img/ice.jpg",
      "supply" : false,
      "quantity": 0,
    },
    {
      "cant" : "1/2 kg",
      "price" : 1100,
      "stock" :  5,
      "image" : "assets/img/ice.jpg",
      "supply" : true,
      "quantity": 0,
    },
    {
      "cant" : "1kg",
      "price" : 2000,
      "stock" :  5,
      "image" : "assets/img/ice.jpg",
      "supply" : false,
      "quantity": 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(ice : Ice): void {
    if(ice.quantity < ice.stock)
      ice.quantity++;
  }
  downQuantity(ice : Ice): void {
    if(ice.quantity > 0) 
      	ice.quantity--;
  }

  ChangeQuantity(event: any , ice:Ice): void {
    console.log(event);
  }

}
