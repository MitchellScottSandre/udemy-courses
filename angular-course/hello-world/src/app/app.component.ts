import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './star-button/star-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    title: 'Title',
    isFavourite: false
  };

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log('Favourite Changed', eventArgs );
  }
}
