import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {BookshelfComponent} from './components/bookshelf';
import {BookComponent} from './components/bookshelf/components/book';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, BookshelfComponent, BookComponent],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}