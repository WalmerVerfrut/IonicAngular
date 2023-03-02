import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Segmento2PageRoutingModule } from './segmento2-routing.module';

import { Segmento2Page } from './segmento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Segmento2PageRoutingModule
  ],
  exports: [Segmento2PageRoutingModule, Segmento2Page],
  declarations: [Segmento2Page]
})
export class Segmento2PageModule {}
