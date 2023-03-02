import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Segmento1Page } from './segmento1.page';

const routes: Routes = [
  {
    path: '',
    component: Segmento1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Segmento1PageRoutingModule {}
