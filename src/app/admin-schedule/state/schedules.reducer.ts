import {BaseEntityState, baseInitialState, createBaseAdapter, createBaseReducer} from '@shared/state/base';
import {Schedule} from '@api/models';
import {actions} from './schedules.actions';


export interface State extends BaseEntityState<Schedule> {
}


const initialState: State = {
  ...baseInitialState<Schedule>(),
};


export const adapter = createBaseAdapter<Schedule>(Schedule);


export const reducer = createBaseReducer<Schedule>(initialState, adapter, actions);