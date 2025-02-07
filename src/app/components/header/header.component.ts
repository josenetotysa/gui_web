import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
/**
 * Componente responsável pelo cabeçalho da aplicação.
 * 
 * O cabeçalho inclui um menu de navegação e a opção de logout.
 */
export class HeaderComponent {

  /**
   * Construtor do componente.
   * 
   * @param {AuthService} authService - Serviço de autenticação para gerenciar login e logout.
   * @param {Router} router - Serviço de roteamento do Angular para navegação.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Realiza o logout do usuário e redireciona para a tela de login.
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
