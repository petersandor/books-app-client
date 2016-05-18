/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {Login} from './index';
/* beautify ignore:end */

describe('Component: Login', () => {

            beforeEachProviders(() => []);

            it('should be defined', inject([TestComponentBuilder], (tcb) => {
                            return tcb.createAsync(Login)
                                .then((fixture) => {
                                        let element = fixture.debugElement.nativeElement;
                                        let cmpInstance = <Login>fixture.debugElement.componentInstance;
                fixture.detectChanges();

                expect(cmpInstance).toBeDefined();
                expect(element).toBeDefined();
            });
    }));

});