import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CriarComponent } from './pages/gerencia-bilhete/criar/criar.component';
import { LiberarComponent } from './pages/gerencia-bilhete/liberar/liberar.component';
import { ConsultarComponent } from './pages/gerencia-bilhete/consultar/consultar.component';
import { CngPreExistenteComponent } from './pages/gerencia-bilhete/cng-pre-existente/cng-pre-existente.component';

export const routes: Routes = [
  // Rota de login (pública)
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent } // Exibe o LoginComponent
    ]
  },
  // Rotas protegidas pelo authGuard
  {
    path: 'auth',
    component: MainLayoutComponent,
    canActivate: [authGuard], // Protege a rota principal
    children: [
      { path: 'home', component: HomeComponent, canActivate: [authGuard] }, // Protege a home
      {
        path: 'gerencia-bilhete',
        data: { breadcrumb: 'Gerência de Bilhete' },
        children: [
          { path: 'criar', component: CriarComponent, canActivate: [authGuard], data: { breadcrumb: 'Criar' } },
          { path: 'liberar', component: LiberarComponent, canActivate: [authGuard], data: { breadcrumb: 'Liberar' } },
          { path: 'consultar', component: ConsultarComponent, canActivate: [authGuard], data: { breadcrumb: 'Consultar' } },
          { path: 'cng-pre-existente', component: CngPreExistenteComponent, canActivate: [authGuard], data: { breadcrumb: 'CNG Pré Existente' } }
        ]
      }
    ]
  },
  // Redirecionar para login caso a rota não exista
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
