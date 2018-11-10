import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select((state: IAppState) => state.items) items;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addItem(item: HTMLInputElement) {
    this.ngRedux.dispatch({ type: ADD_ITEM, payload: item.value });
    item.value = '';
  }

  removeItem(index: number) {
    this.ngRedux.dispatch({ type: REMOVE_ITEM, payload: index });
  }

}
