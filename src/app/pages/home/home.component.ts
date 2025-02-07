import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
/**
 * Componente responsável por exibir a página inicial da aplicação.
 */
export class HomeComponent {

  /**
   * Construtor do componente.
   * 
   * @param {AuthService} authService - Serviço de autenticação.
   * @param {Router} router - Serviço de roteamento do Angular.
   */
  constructor(private authService: AuthService, private router: Router) {}

}
