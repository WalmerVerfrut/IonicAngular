import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Segmento2Page } from './segmento2.page';

const routes: Routes = [
  {
    path: '',
    component: Segmento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Segmento2PageRoutingModule {}
