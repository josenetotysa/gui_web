import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideToastr } from 'ngx-toastr';

/**
 * Configuração principal da aplicação.
 * 
 * Este objeto define os provedores utilizados globalmente no Angular, incluindo:
 * - Configuração de roteamento (`provideRouter`)
 * - Animações assíncronas (`provideAnimationsAsync`)
 * - Máscaras (`provideEnvironmentNgxMask`)
 * - Notificações (`provideToastr`)
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    provideToastr(),
  ]
};
