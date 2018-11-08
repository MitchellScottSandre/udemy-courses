import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest'; //depricated
import 'rxjs/add/operator/map'; //depricated
import 'rxjs/add/operator/switchMap'; //depricated

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // Observable.com
    Observable.combineLatest([ //combineLatest like this is depricated
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      let paramMapObs = combined[0];
      let queryParamMapObs = combined[1];

      const id = paramMapObs.get('id');
      const page = queryParamMapObs.get('page');
      const order = queryParamMapObs.get('order');
      console.log(id, page, order);
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers );
  }
}
