/// src/app/index.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {UserService} from './services/user-service';
import routes from './routes';

import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

const APP_TITLE = 'Books App';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, MdIconRegistry, UserService],
    directives: [...ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MdToolbar, MdButton, MdAnchor, MdIcon],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    appName: string = APP_TITLE;

    constructor() {
    }
}
