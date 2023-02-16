import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodDetallePage } from './bod-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: BodDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodDetallePageRoutingModule {}
