import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Segmento1PageRoutingModule } from './segmento1-routing.module';

import { Segmento1Page } from './segmento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Segmento1PageRoutingModule
  ],
  exports: [Segmento1PageRoutingModule, Segmento1Page],
  declarations: [Segmento1Page]
})
export class Segmento1PageModule {}
