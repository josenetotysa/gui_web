import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Guarda de rota que verifica se o usuário está autenticado.
 * 
 * Se o usuário estiver autenticado, ele pode acessar a rota normalmente.
 * Caso contrário, será redirecionado para a página de login.
 * 
 * @param {import("@angular/router").ActivatedRouteSnapshot} route - Snapshot da rota ativa.
 * @param {import("@angular/router").RouterStateSnapshot} state - Estado da URL atual.
 * @returns {boolean | UrlTree} `true` se o usuário estiver autenticado, ou uma `UrlTree` para redirecionamento caso contrário.
 */
export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated() ? true : router.createUrlTree(['/login']);
};
