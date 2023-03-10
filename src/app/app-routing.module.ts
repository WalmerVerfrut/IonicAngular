import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'trabajador',
    loadChildren: () => import('./trabajador/trabajador.module').then( m => m.TrabajadorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bodegas',
    loadChildren: () => import('./bodegas/bodegas.module').then( m => m.BodegasPageModule)
  },
  {
    path: 'mapacoordenadas',
    loadChildren: () => import('./mapacoordenadas/mapacoordenadas.module').then( m => m.MapacoordenadasPageModule)
  },
  {
    path: 'barras',
    loadChildren: () => import('./barras/barras.module').then( m => m.BarrasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
