/* beautify ignore:start */
import {it} from '@angular/core/testing';
import {CalcZindexPipe} from './index';
/* beautify ignore:end */

describe('Pipe: CalcZindexPipe', () => {
    let pipe: CalcZindexPipe;

    beforeEach(() => {
        pipe = new CalcZindexPipe();
    });

    it('should be defined', () => {
        expect(pipe).toBeDefined();
    });

    it('transforms abc to abc', () => {
        expect(pipe.transform(1, [])).toEqual(2);
    });

});