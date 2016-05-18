/* beautify ignore:start */
import {Component} from '@angular/core';
/* beautify ignore:end */

@Component({
    selector: 'book',
    inputs: [
        'authors',
        'title'
    ],
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class BookComponent {
    authors: Array<string> = ['Loading authors..'];
    title: string = 'Loading title..';

    constructor() {
        // this.authors = ['Anthony Burghiss'];
        // this.title = 'A Catwork Orange';
    }
}
