import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GooglemapsComponent} from "./googlemaps.component";
import {IonicModule} from "@ionic/angular";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    GooglemapsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ], exports:[
    GooglemapsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GooglemapsModule { }
