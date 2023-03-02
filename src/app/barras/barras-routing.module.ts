import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrasPage } from './barras.page';

const routes: Routes = [
  {
    path: '',
    component: BarrasPage,
    pathMatch: 'full'
  },
  {
    path: 'segmento1',
    loadChildren: () => import('./segmento1/segmento1.module').then( m => m.Segmento1PageModule)
  },
  {
    path: 'segmento2',
    loadChildren: () => import('./segmento2/segmento2.module').then( m => m.Segmento2PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrasPageRoutingModule {}
