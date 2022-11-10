import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnadirCarritoPage } from './annadir-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: AnnadirCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnadirCarritoPageRoutingModule {}
