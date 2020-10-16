import {Injectable} from '@angular/core';
import {BaseGuard} from './base-guard';
import {PERMISSION_VIEW} from '@api/permissions';
import {Schedule} from '@api/models';
import {Store} from '@ngrx/store';
import * as fromRoot from '@app/state';

@Injectable({
  providedIn: 'root'
})
export class CanViewSchedulesGuard extends BaseGuard {

  constructor(store: Store<fromRoot.State>) {
    super(store, PERMISSION_VIEW, Schedule.modelType);
  }
}
