import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeListComponent } from './coffe-list/coffe-list.component';
import { HomeComponent } from './home/home.component';
import { PistachoContactComponent } from './pistacho-contact/pistacho-contact.component';
import { PistachoIcecreamComponent } from './pistacho-icecream/pistacho-icecream.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'creams',
    component: PistachoIcecreamComponent
  },
  {
    path: 'contact',
    component: PistachoContactComponent
  },
  {
    path: 'coffeshop',
    component: CoffeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
