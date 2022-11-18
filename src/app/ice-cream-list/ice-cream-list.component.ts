import { Component, OnInit } from '@angular/core';
import { CreamCartService } from '../cream-cart.service';
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
      "stock" :  5  ,
      "image" : "assets/img/ice.jpg",
      "supply" : false,
      "quantity": 0,
    }
  ];
  

  constructor( private cart : CreamCartService) { 
    
  }

  ngOnInit(): void {
  }

  addTocart(ice: Ice): void {
    this.cart.addTocart(ice);
    ice.stock -= ice.quantity;
    ice.quantity = 0;
  }

  maxReached(m : string) {
    alert(m);
  }

}
