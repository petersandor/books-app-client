/* beautify ignore:start */
import {Pipe, PipeTransform} from '@angular/core';
/* beautify ignore:end */

@Pipe({
    name: 'calcZindex'
})
export class CalcZindexPipe implements PipeTransform {
    transform(value: number, args : number[]): any {
        return value < 6 ? ++value : --value;
    }
}
