import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapacoordenadasPage } from './mapacoordenadas.page';

const routes: Routes = [
  {
    path: '',
    component: MapacoordenadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapacoordenadasPageRoutingModule {}
