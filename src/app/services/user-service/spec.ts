/* beautify ignore:start */
import {it, inject, beforeEachProviders} from '@angular/core/testing';
import {UserService} from './index';
/* beautify ignore:end */

describe('Service: UserService', () => {

    beforeEachProviders(() => [UserService]);

    it('should be defined', inject([UserService], (service: UserService) => {
        expect(service).toBeDefined();
    }));

});
