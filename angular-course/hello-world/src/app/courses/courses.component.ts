import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  text = `This is some long text about something and yeah it is a long text deal with it`;
  // courses;
  // imageUrl = '';
  // colSpan = 2;
  // isActive = true;
  // email = 'sample@gmail.com';
  // course = {
  //   title: 'Course Title',
  //   rating: 4.234986,
  //   students: 1234,
  //   price: 232.14,
  //   releaseDate: new Date(2016, 3, 1)
  // };

  // Don't recreate an instance of CoursesService
  // Angular sees that this constructor has a dependency
  // Angular will instantiate a new CoursesService object when it needs to
  // constructor(service: CoursesService) {
  //   this.courses = service.getCourses();
  // }

  ngOnInit() {
  }

  // onKeyUp() {
  //   console.log(this.email);
  //   // console.log($event.target.value);
  //   // if ($event.keyCode === 13) {
  //     // console.log('enter key was pressed');
  //   // }
  // }
  // onSave($event) {
  //   $event.stopPropagation();
  //   console.log('Button was clicked');
  //   console.log($event);
  // }

  // onDivClicked() {
  //   console.log('div was clicked');
  // }

}
