import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import { BbcChurchAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(BbcChurchAppComponent, [ROUTER_PROVIDERS]);
