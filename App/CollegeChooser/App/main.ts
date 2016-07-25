import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './Components/app';
import {appRouterProviders} from "./route";

bootstrap(AppComponent,[
    appRouterProviders
]);