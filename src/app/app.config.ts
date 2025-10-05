import { ApplicationConfig } from '@angular/core';
// 1. Importe 'withInMemoryScrolling' e remova 'withAnchorScrolling'
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // 2. A estrutura correta e final é esta:
    provideRouter(routes, 
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled' 
      })
    ),
    
    AuthService,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ]
};