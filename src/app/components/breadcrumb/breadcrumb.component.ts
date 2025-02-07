import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // Para usar routerLink

/**
 * Interface que representa um item do breadcrumb.
 */
interface Breadcrumb {
  /**
   * Rótulo do breadcrumb.
   */
  label: string;

  /**
   * URL associada ao breadcrumb.
   */
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
/**
 * Componente responsável por exibir a trilha de navegação (breadcrumb) na aplicação.
 */
export class BreadcrumbComponent implements OnInit {
  /**
   * Lista de breadcrumbs gerada com base na navegação da aplicação.
   */
  breadcrumbs: Breadcrumb[] = [];

  /**
   * Indica se a rota atual é a página inicial (`/auth/home`).
   */
  isHomeRoute: boolean = false;

  /**
   * Construtor do componente.
   * 
   * @param {Router} router - Serviço de roteamento do Angular.
   * @param {ActivatedRoute} activatedRoute - Representa a rota ativa da aplicação.
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  /**
   * Método do ciclo de vida do Angular chamado quando o componente é inicializado.
   * Constrói os breadcrumbs e verifica se a rota atual é a página inicial.
   */
  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
    this.checkIfHomeRoute();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumb(this.activatedRoute.root);
        this.checkIfHomeRoute();
      });
  }

  /**
   * Constrói a lista de breadcrumbs baseada na estrutura das rotas ativadas.
   * 
   * @param {ActivatedRoute} route - Rota ativa da aplicação.
   * @param {string} url - Caminho acumulado das rotas.
   * @param {Breadcrumb[]} breadcrumbs - Lista de breadcrumbs gerada até o momento.
   * @returns {Breadcrumb[]} - Lista de breadcrumbs atualizada.
   */
  private buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if (child.snapshot.data['breadcrumb']) {
        breadcrumbs.push({
          label: child.snapshot.data['breadcrumb'],
          url
        });
      }

      this.buildBreadcrumb(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  /**
   * Verifica se a rota atual é a página inicial (`/auth/home`).
   * Define a propriedade `isHomeRoute` como `true` se for a rota inicial.
   */
  private checkIfHomeRoute(): void {
    this.isHomeRoute = this.router.url === '/auth/home';
  }
}
