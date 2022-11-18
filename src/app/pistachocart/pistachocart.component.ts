import { Component, OnInit } from '@angular/core';
import { CreamCartService } from '../cream-cart.service';

@Component({
  selector: 'app-pistachocart',
  templateUrl: './pistachocart.component.html',
  styleUrls: ['./pistachocart.component.scss']
})
export class PistachocartComponent implements OnInit {

  constructor(private cart : CreamCartService) { 
  }

  ngOnInit(): void {
  }

}
