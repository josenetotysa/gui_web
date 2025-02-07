import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/**
 * Componente raiz da aplicação.
 * 
 * Responsável por gerenciar a estrutura principal da aplicação, incluindo o `HeaderComponent` e o `MainComponent`.
 */
export class AppComponent {
  /**
   * Título da aplicação.
   */
  title = 'gui_web';

  /**
   * Construtor do componente.
   * 
   * @param {Router} router - Serviço de roteamento do Angular.
   */
  constructor(private router: Router) {}

  /**
   * Verifica se a rota atual é a página de login.
   * 
   * @returns {boolean} `true` se a rota for `/login`, caso contrário, `false`.
   */
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
