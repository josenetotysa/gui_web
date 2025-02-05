import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
