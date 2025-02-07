import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
styleUrl: './navbar.component.scss'
})
/**
 * Componente responsável pela barra de navegação da aplicação.
 * 
 * Este componente exibe links de navegação e facilita a interação do usuário com as diferentes páginas do sistema.
 */
export class NavbarComponent {

  /**
   * Construtor do componente.
   */
  constructor() {}

}
