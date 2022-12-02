import { Component } from '@angular/core';
import { Quant } from './quant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  quant: Quant[] = [
    {
      quantity: '1/4kg',
      price: 600,
      image:
        'https://raw.githubusercontent.com/mauroriverae/Final_Angular/main/src/assets/img/h1.jpg',
    },
    {
      quantity: '1/2kg',
      price: 1100,
      image:
        'https://raw.githubusercontent.com/mauroriverae/Final_Angular/main/src/assets/img/1-2kg2.jpg',
    },

    {
      quantity: '1kg',
      price: 2000,
      image:
        'https://raw.githubusercontent.com/mauroriverae/Final_Angular/main/src/assets/img/h3.jpg',
    },
  ];
}
