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
export class HeaderComponent {

    constructor(private authService: AuthService, private router: Router) { }
  
    logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
}
