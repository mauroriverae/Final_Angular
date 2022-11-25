import { Component } from '@angular/core';

@Component({
  selector: 'app-sabores-c',
  templateUrl: './sabores-c.component.html',
  styleUrls: ['./sabores-c.component.scss']
})
export class SaboresCComponent {

  saboresList() :void{
    let sabores = ["Chocolates", "Dulce de leche", "Americana"]
    for( let sabor of sabores){
      alert(`<li>${sabor}</li>`);
    }
  }
}
