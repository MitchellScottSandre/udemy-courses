import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './star-button/star-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;
  // viewMode = 'map';
  // courses = [1, 2, 3];
  // title = 'Angular App';
  // post = {
  //   title: 'Title',
  //   isFavourite: false
  // };

  // tweet = {
  //   body: 'this is the body of the tweet',
  //   isLiked: true,
  //   likesCount: 10
  // };

  task = {
    title: 'aa',
    assignee: {
      name: null
    }
  };

  // loadCourses() {
  //   this.courses = [
  //     { id: 1, name: 'course1' },
  //     { id: 2, name: 'course2' },
  //     { id: 3, name: 'course3' }
  //   ];
  // }

  // trackCourse(index, course) {
  //   return course ? course.id : undefined;
  // }

  // onAdd() {
  //   this.courses.push({ id: this.courses.length + 1, name: `course${this.courses.length + 1}`});
  // }

  // onRemove(course) {
  //   const index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
  //   console.log('Favourite Changed', eventArgs );
  // }
}
