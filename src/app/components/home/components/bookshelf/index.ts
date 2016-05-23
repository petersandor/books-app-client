/* beautify ignore:start */
import {Component} from '@angular/core';
import {Router, CanActivate} from '@angular/router-deprecated';
/* beautify ignore:end */
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {Book} from './interfaces/book/book.interface';
import {BookComponent} from './components/book';
import {CalcZindexPipe} from './pipes/calc-zindex';

@Component({
    selector: 'bookshelf',
    directives: [BookComponent],
    pipes: [CalcZindexPipe],
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
@CanActivate(() => !tokenNotExpired())
export class BookshelfComponent {
    books: Array<Book>;

    constructor(
        // private _bookService: BookService,
        private _authHttp: AuthHttp,
        private router: Router
    ) {
        if(!tokenNotExpired()) {
            console.info('Not authorized to access Home page, redirecting to Login...');
            this.router.navigate(['Login']);
            return;
        }

        this._authHttp.get('https://books-app-server.herokuapp.com/api/books')
            .subscribe(
                data => this.books = data.json(),
                err => console.log(err),
                () => console.log('Books request complete')
            );
    }
}
