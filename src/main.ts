import {importProvidersFrom, provideExperimentalZonelessChangeDetection} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {provideTranslate} from "./app/shared/configs/translate/translate.provider";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    provideHttpClient(),
    provideTranslate(),
    provideIonicAngular(),
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch(console.error);
