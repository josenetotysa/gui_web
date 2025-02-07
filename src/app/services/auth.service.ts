import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Serviço de autenticação responsável por gerenciar login, logout e verificação de autenticação.
 */
export class AuthService {

  constructor() { }

  /**
   * Verifica se o usuário está autenticado.
   * 
   * @returns {boolean} `true` se o usuário estiver autenticado, `false` caso contrário.
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Realiza o login do usuário, armazenando um token de autenticação no localStorage.
   */
  login(): void {
    localStorage.setItem('token', 'fake-token');
  }

  /**
   * Realiza o logout do usuário, removendo o token do localStorage.
   */
  logout(): void {
    localStorage.removeItem('token');
  }
}
