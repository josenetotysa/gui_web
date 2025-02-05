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
import { ListarJanelaBroadcastComponent } from './pages/janela-broadcast/listar-janela-broadcast/listar-janela-broadcast.component';

export const routes: Routes = [
  // Rota de login (pública)
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent } // Exibe o LoginComponent
    ]
  },
  // Rotas protegidas pelo authGuard (filhas de /auth)
  {
    path: 'auth',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'gerencia-bilhete',
        data: { breadcrumb: 'Gerência de Bilhete' },
        children: [
          { path: 'criar', component: CriarComponent, data: { breadcrumb: 'Criar' } },
          { path: 'liberar', component: LiberarComponent, data: { breadcrumb: 'Liberar' } },
          { path: 'consultar', component: ConsultarComponent, data: { breadcrumb: 'Consultar' } },
          { path: 'cng-pre-existente', component: CngPreExistenteComponent, data: { breadcrumb: 'CNG Pré Existente' } }
        ]
      },
      {
        path: 'janela-broadcast',
        data: {breadcrumb: 'Janela de Broadcast Bloqueada'},
        children: [
          { path: 'listar', component: ListarJanelaBroadcastComponent, data: { breadcrumb: 'Listar' } },
        ]
      }
    ]
  },
  // Redirecionar para login caso a rota não exista
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
