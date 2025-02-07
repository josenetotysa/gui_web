import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
/**
 * Componente principal da aplicação.
 * 
 * Este componente atua como o contêiner principal para exibição das páginas dentro do layout principal.
 * Ele inclui o `BreadcrumbComponent` para mostrar a trilha de navegação.
 */
export class MainComponent {

  /**
   * Construtor do componente.
   */
  constructor() {}

}
