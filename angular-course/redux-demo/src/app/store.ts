import { INCREMENT, ADD_ITEM, REMOVE_ITEM, DELETE_ALL_ITEMS } from "./actions";
import { tassign } from 'tassign';
import { Map } from 'immutable';

export interface IAppState {
    // counter: number;
    items: string[];
    dashboard: {
        lastUpdate: Date;
        totalItems: number;
    };
}

export const INITIAL_STATE: IAppState = {
    // counter: 0
    items: [],
    dashboard: {
        lastUpdate: null,
        totalItems: 0
    }
};

class TodoActions {
    constructor(private state: IAppState, private action) {}

    addItem(): IAppState {
        return tassign(this.state, {
            items: [...this.state.items, this.action.payload],
            dashboard: {
                lastUpdate: new Date(),
                totalItems: this.state.dashboard.totalItems + 1
            }
        });
    }
}

// export function rootReducer(state: Map<string, any>, action): Map<string, any> {
export function rootReducer(state: IAppState, action): IAppState {
    let todoActions = new TodoActions(state, action);
    switch (action.type) {
        // case INCREMENT:
            // return { counter: state.counter + 1 };
            // Object.assign({}, state, { counter: state.counter + 1});
            // return tassign(state, { counter: state.counter + 1 });
            // can't use tassign with immutable.js MAP / fromJS
            // return state.set('counter', state.get('counter') + 1);
        // }
        case ADD_ITEM: return todoActions.addItem();
        case REMOVE_ITEM:
            return tassign(state, {
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1),
                ],
                dashboard: {
                    lastUpdate: new Date(),
                    totalItems: state.dashboard.totalItems - 1
                }
            });
        case DELETE_ALL_ITEMS:
            return tassign(state, {
                items: [],
                dashboard: {
                    totalItems: 0,
                    lastUpdate: new Date(),
                }
            });
    }
    return state;
}
