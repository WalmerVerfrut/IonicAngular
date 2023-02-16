import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodDetallePageRoutingModule } from './bod-detalle-routing.module';

import { BodDetallePage } from './bod-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodDetallePageRoutingModule
  ],
  declarations: [BodDetallePage]
})
export class BodDetallePageModule {}
