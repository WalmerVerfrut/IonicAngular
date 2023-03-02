import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrasPageRoutingModule } from './barras-routing.module';

import { BarrasPage } from './barras.page';
import {Segmento1PageModule} from "./segmento1/segmento1.module";
import {Segmento2PageModule} from "./segmento2/segmento2.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrasPageRoutingModule,
    Segmento1PageModule,
    Segmento2PageModule
  ],
  declarations: [BarrasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BarrasPageModule {}
