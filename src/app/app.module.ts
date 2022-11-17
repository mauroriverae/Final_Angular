import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';

import { FormsModule } from '@angular/forms';
import { PistachoContactComponent } from './pistacho-contact/pistacho-contact.component';
import { PistachoIcecreamComponent } from './pistacho-icecream/pistacho-icecream.component';
import { PistachocartComponent } from './pistachocart/pistachocart.component';
import { CoffeListComponent } from './coffe-list/coffe-list.component';
import { InputIntComponent } from './input-int/input-int.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IceCreamListComponent,
    PistachoContactComponent,
    PistachoIcecreamComponent,
    PistachocartComponent,
    CoffeListComponent,
    InputIntComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
