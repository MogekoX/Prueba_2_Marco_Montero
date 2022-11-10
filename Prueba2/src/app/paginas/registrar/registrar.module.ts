import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router'

import { RegistrarPageRoutingModule } from './registrar-routing.module';

import { RegistrarPage } from './registrar.page';
import { DirectivasService } from 'src/app/servicio/directivas.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonicModule,
    RegistrarPageRoutingModule
  ],
  declarations: [RegistrarPage],
  providers:[DirectivasService]
})
export class RegistrarPageModule {}
