import { Injectable } from '@angular/core';
import { Ice } from './ice-cream-list/Ice';

@Injectable({
  providedIn: 'root'
})
export class CreamCartService {

  cartList: Ice[] = []; 

  constructor() { }

  addTocart(ice: Ice) {
    let item = this.cartList.find((v1) => v1.cant == ice.cant);
    if(!item){
      this.cartList.push( {... ice} );
    }else {
      item.quantity += ice.quantity;
    }
    console.log(this.cartList);  
  }

  
}
