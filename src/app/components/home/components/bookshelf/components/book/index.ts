/* beautify ignore:start */
import {Component, Renderer, ElementRef} from '@angular/core';
import {NgClass} from '@angular/common';
/* beautify ignore:end */

@Component({
    selector: 'book',
    inputs: [
        'authors',
        'title'
    ],
    directives: [NgClass],
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class BookComponent {
    bookEl: Object;
    authors: Array<string> = ['Loading authors..'];
    title: string = 'Loading title..';
    colorVarNum: Number = Math.floor(Math.random() * (11)) + 1;
    isOpened: Boolean = false;
    toggleOutsideClass: Boolean = false;
    toggleInsideViewClass: Boolean = false;
    onTransitionEnd: Function;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {

        this.onTransitionEnd = renderer.listen(elementRef.nativeElement, 'transitionend', (event) => {
            let parentElement = elementRef.nativeElement.parentElement;

            if(this.isOpened && !this.toggleInsideViewClass) {
                parentElement.style.zIndex = '20';
                this.toggleInsideViewClass = true;
            } else if (!this.isOpened) {
                parentElement.style.zIndex = parentElement.dataset.defaultZindex;
                this.toggleOutsideClass = false;
            }
        });
    }

    ngOnDestroy() {
        this.onTransitionEnd();
    }

    handleClick(event) {
        if(!this.isOpened) {
            this.isOpened = true;
            this.toggleOutsideClass = true;
        } else {
            this.toggleInsideViewClass = false;
            this.isOpened = false;
        }
    }
}
