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
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService  // Toastr adicionado
  ) {}

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
