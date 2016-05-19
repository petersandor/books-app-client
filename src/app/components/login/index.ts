/* beautify ignore:start */
import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router, CanActivate} from '@angular/router-deprecated';
/* beautify ignore:end */

import {tokenNotExpired} from 'angular2-jwt';

// Services
import {UserService} from '../../services/user-service';

// Sub components
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'login',
    host: {
        '[class.row]': 'true'
    },
    directives: [FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MdToolbar, MdButton],
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
@CanActivate(() => !tokenNotExpired())
export class Login {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    login(event, email, password) {
        event.preventDefault();

        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['Home']);
            }
        });
    }
}
