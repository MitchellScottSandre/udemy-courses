import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coursesRef: AngularFireList<{}>;

  courses$: Observable<any[]>;
  course$;
  author$;
  // courses: any[];
  // subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list('/courses');
    this.courses$ = this.coursesRef.snapshotChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();

    // db.list('/courses').snapshotChanges()
    //   .subscribe(courses => {
    //     console.log(courses);
    //     for (let course of courses) {
    //       console.log(course.key);
    //       console.log(course.payload.val());
    //     }
    //   });
  }

  add(course: HTMLInputElement) {
    this.coursesRef.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'aaa' }
      ]
    }).then(() => console.log('add course success!'));
  }

  update(course) {
    this.db.object('/courses/' + course.key)
    .set(course.payload.val() + ' UPDATED');
  }

  delete(course) {
    this.db.object('/courses/' + course.key).remove();
  }

  // ngOnDestroy() { // requires implementing OnDestroy
  //   this.subscription.unsubscribe();
  // }
}
