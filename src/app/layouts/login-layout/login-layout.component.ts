import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, LoginComponent], 
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
/**
 * Componente responsável pelo layout da página de login.
 * 
 * Este layout contém o `LoginComponent` e gerencia a exibição da página de autenticação.
 */
export class LoginLayoutComponent {

  /**
   * Construtor do componente.
   */
  constructor() {}

}
