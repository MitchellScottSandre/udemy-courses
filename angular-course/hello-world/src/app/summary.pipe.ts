import { Pipe, PipeTransform } from '@angular/core';

// use 'summary' in the template to use this pipe
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: number) {
        if (!value) {
            return null;
        }

        const actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}
