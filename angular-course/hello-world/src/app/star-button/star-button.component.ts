// ASSIGNMENT
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StarButtonComponent {
  @Input('is-selected') isFavourite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.click.emit({
      newValue: this.isFavourite
    }); // use this to publish an event
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
