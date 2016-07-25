import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'index-page',
    templateUrl:"App/UI/index.html",
    styleUrls:['App/UI/index.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class IndexComponent { }