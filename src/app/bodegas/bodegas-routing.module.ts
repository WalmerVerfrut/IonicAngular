import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodegasPage } from './bodegas.page';

const routes: Routes = [
  {
    path: '',
    component: BodegasPage
  },
  {
    path: 'bodega/:id',
    loadChildren: () => import('./bod-detalle/bod-detalle.module').then( m => m.BodDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodegasPageRoutingModule {}
