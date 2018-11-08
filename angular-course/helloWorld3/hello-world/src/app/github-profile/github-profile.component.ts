import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('ngOnInit github-profile');
    this.activatedRoute.paramMap
      .subscribe(params => {
        const id: number = +params.get('id'); // the + turns the id string into a number'
        console.log(id);
      })
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    })
  }

}
