import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { DELETE_ALL_ITEMS } from '../actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @select((s: IAppState) => s.dashboard.lastUpdate) lastUpdate;
  @select((s: IAppState) => s.dashboard.totalItems) totalItems;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  deleteAll() {
    this.ngRedux.dispatch({ type: DELETE_ALL_ITEMS });
  }
}
