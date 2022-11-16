import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeListComponent } from './coffe-list/coffe-list.component';
import { PistachoContactComponent } from './pistacho-contact/pistacho-contact.component';
import { PistachoIcecreamComponent } from './pistacho-icecream/pistacho-icecream.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'creams',
    pathMatch: 'full'
  },
  {
    path: 'creams',
    component: PistachoIcecreamComponent
  },
  {
    path: 'creams',
    component: PistachoIcecreamComponent
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
