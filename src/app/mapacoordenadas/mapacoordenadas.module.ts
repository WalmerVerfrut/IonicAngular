import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapacoordenadasPageRoutingModule } from './mapacoordenadas-routing.module';

import { MapacoordenadasPage } from './mapacoordenadas.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapacoordenadasPageRoutingModule
  ],
  declarations: [MapacoordenadasPage],
  exports:[MapacoordenadasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapacoordenadasPageModule {}
