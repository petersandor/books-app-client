/* beautify ignore:start */
import {Component} from '@angular/core';
import {Router, CanActivate} from '@angular/router-deprecated';
/* beautify ignore:end */

import {tokenNotExpired} from 'angular2-jwt';

// Services
import {UserService} from '../../services/user-service';

// Sub components
import {MdInput} from '@angular2-material/input';
import {MdCard} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'login',
    directives: [MdInput, MdCard, MdButton],
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
@CanActivate(() => !tokenNotExpired())
export class Login {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    login(email, password) {
        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['Home']);
            }
        });
    }
}
