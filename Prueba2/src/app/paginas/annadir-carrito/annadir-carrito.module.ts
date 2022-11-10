import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnadirCarritoPageRoutingModule } from './annadir-carrito-routing.module';

import { AnnadirCarritoPage } from './annadir-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnadirCarritoPageRoutingModule
  ],
  declarations: [AnnadirCarritoPage]
})
export class AnnadirCarritoPageModule {}
