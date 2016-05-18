/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {BookComponent} from './index';
/* beautify ignore:end */

describe('Component: BookComponent', () => {

            beforeEachProviders(() => []);

            it('should be defined', inject([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(BookComponent)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <BookComponent>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});