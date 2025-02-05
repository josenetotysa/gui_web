import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login();
    this.router.navigate(['/auth/home']);
  }
}
