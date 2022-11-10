import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./paginas/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./paginas/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'detalle-productos',
    loadChildren: () => import('./paginas/detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
  },
  {
    path: 'annadir-carrito',
    loadChildren: () => import('./paginas/annadir-carrito/annadir-carrito.module').then( m => m.AnnadirCarritoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
