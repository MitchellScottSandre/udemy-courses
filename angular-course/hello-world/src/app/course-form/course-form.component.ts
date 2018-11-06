import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
  categories = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' }
  ];

  log(x) {
    console.log(x);
  }
}
