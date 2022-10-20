import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.scss']
})
export class IceCreamListComponent implements OnInit {
  ice = {
    "quantity" : "1/4kg",
    "price" : 600,
    "stock" :  5,
    "image" : "src/assets/img/ice.jpg" 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
//prueba intentando subir comoponenetes e image