/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {BookshelfComponent} from './index';
/* beautify ignore:end */

describe('Component: BookshelfComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', inject([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(BookshelfComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <BookshelfComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});