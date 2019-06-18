import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'direccion', loadChildren: './direccion/direccion.module#DireccionPageModule' },
  { path: 'elemento/id', loadChildren: './elemento/elemento.module#ElementoPageModule' },
  { path: 'vendedor', loadChildren: './vendedor/vendedor.module#VendedorPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'elemento', loadChildren: './elemento/elemento.module#ElementoPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
