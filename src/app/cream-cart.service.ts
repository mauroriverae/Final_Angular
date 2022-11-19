import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ice } from './ice-cream-list/Ice';

@Injectable({
  providedIn: 'root'
})
export class CreamCartService {
  //varibal e a observar
  private _cartList: Ice[] = [];

  cartList: BehaviorSubject<Ice[]> = new BehaviorSubject(this._cartList); 

  constructor() { }

  addTocart(ice: Ice) {
    let item = this._cartList.find((v1) => v1.cant == ice.cant);
    if(!item){
      this._cartList.push( {... ice} );
    }else {
      item.quantity += ice.quantity;
    }
    console.log(this._cartList);  
    //emito el evento
    this.cartList.next(this._cartList); //equivale al emit 
  }
}
