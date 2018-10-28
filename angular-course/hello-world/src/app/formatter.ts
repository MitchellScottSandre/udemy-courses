// ASSIGNMENT
import { Pipe, PipeTransform } from '@angular/core';

// use 'summary' in the template to use this pipe
@Pipe({
    name: 'formatter'
})
export class TitleFormatterPipe implements PipeTransform {
    prepositions = [ 'a', 'an', 'the', 'from', 'on', 'of', 'for', 'by', 'in', 'into', 'on', 'onto' ];

    public transform(value: string): string {
        const lowerCaseValue = value.toLowerCase().trim();
        const words: string[] = lowerCaseValue.split(' ');
        let output = '';
        let firstWord = true;

        for (const word of words) {
            if (!firstWord) {
                output += ' ';
            }
            if (firstWord || !this.prepositions.includes(word)) {
                output += this.capitalizeFirstLetter(word);
            } else {
                output += word;
            }
            firstWord = false;
        }

        return output;
    }

    private capitalizeFirstLetter(word: string): string {
        const firstLetter = word.substr(0, 1);
        return firstLetter.toUpperCase() + word.substr(1, word.length - 1);
    }
}
