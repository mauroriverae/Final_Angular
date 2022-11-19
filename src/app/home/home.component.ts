import { Component } from '@angular/core';
import { Quant } from './quant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quant : Quant[] = [
    {
      "quantity" : "1/4kg",
      "price" : 600
    },
    {
      "quantity" : "1/2kg",
      "price" : 1100
    },
    {
      "quantity" : "1kg",
      "price" : 2000
    },
  ]
}
