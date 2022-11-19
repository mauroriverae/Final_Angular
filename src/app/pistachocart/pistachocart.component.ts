import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CreamCartService } from '../cream-cart.service';
import { Ice } from '../ice-cream-list/Ice';

@Component({
  selector: 'app-pistachocart',
  templateUrl: './pistachocart.component.html',
  styleUrls: ['./pistachocart.component.scss']
})
export class PistachocartComponent implements OnInit {
  cartList$ !: Observable<Ice[]>;
  constructor(private cart : CreamCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
