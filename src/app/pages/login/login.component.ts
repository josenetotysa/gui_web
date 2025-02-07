import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  // Certifique-se de que FormsModule está aqui
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
/**
 * Componente responsável pela autenticação do usuário.
 * Permite o login e armazenamento dos dados de acesso caso o usuário escolha a opção "Lembrar-me".
 */
export class LoginComponent implements OnInit {
  /**
   * Nome de usuário digitado pelo usuário.
   */
  username: string = '';

  /**
   * Senha digitada pelo usuário.
   */
  password: string = '';

  /**
   * Indica se o usuário deseja que suas credenciais sejam lembradas.
   */
  rememberMe: boolean = false;

  /**
   * Construtor do componente.
   * 
   * @param {AuthService} authService - Serviço de autenticação.
   * @param {Router} router - Serviço de roteamento Angular.
   * @param {ToastrService} toastr - Serviço para exibição de notificações.
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  /**
   * Método de ciclo de vida chamado ao inicializar o componente.
   * Recupera as credenciais salvas no `localStorage`, se existirem.
   */
  ngOnInit() {
    const savedUsername = localStorage.getItem('savedUsername') || '';
    const savedPassword = localStorage.getItem('savedPassword') || '';

    if (savedUsername && savedPassword) {
      this.username = savedUsername;
      this.password = savedPassword;
      this.rememberMe = true;
    }
    console.log("Valores recuperados:", this.username, this.password);
  }

  /**
   * Realiza a autenticação do usuário.
   * Se a opção "Lembrar-me" estiver ativada, salva as credenciais no `localStorage`.
   * Se houver falha no login, exibe uma mensagem de erro.
   */
  login() {
    if (!this.username || !this.password) {
      this.toastr.error('Preencha todos os campos para continuar.', 'Erro de Login', {
        timeOut: 2000,
      });
      return;
    }

    if (this.rememberMe) {
      localStorage.setItem('savedUsername', this.username);
      localStorage.setItem('savedPassword', this.password);
    } else {
      localStorage.removeItem('savedUsername');
      localStorage.removeItem('savedPassword');
    }

    this.authService.login();
    this.toastr.success('Login realizado com sucesso!', 'Bem-vindo', {
      timeOut: 2000,
    });
    this.router.navigate(['/auth/home']);
  }
}
