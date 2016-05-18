import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'about',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class About implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
    }
}
