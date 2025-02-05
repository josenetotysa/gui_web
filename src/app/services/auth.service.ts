import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // Simulação de autenticação: verificar se existe um token no localStorage
    return localStorage.getItem('token') !== null;
  }

  login(): void {
    // Simular login gerando um token fake
    localStorage.setItem('token', 'fake-token');
  }

  logout(): void {
    // Remover o token ao fazer logout
    localStorage.removeItem('token');
  }
}
