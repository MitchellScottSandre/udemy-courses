import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select('counter') count;
  // @select(s => s.get('counter')) count;
  // @select(['messaging', 'newMessages']) newMessages;
  // @select((s: IAppState) => s.messages.newMessages) newMessages;

  // constructor(private ngRedux: NgRedux<Map<string, any>>) {
  constructor(private ngRedux: NgRedux<IAppState>) {
    // ngRedux.subscribe(() => {
    //   console.log(ngRedux.getState());
    // });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
