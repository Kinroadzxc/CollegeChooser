import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'main-app',
    templateUrl:"App/UI/app.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }