import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromCompany from '@company/state';
import {Observable} from 'rxjs';
import {Service, ServiceCategory} from '@api/models';
import {BaseContainer} from '@app/containers/BaseContainer';

@Component({
  selector: 'company-services-shell',
  templateUrl: './services-shell.component.html',
  styleUrls: ['./services-shell.component.css']
})
export class ServicesShellComponent extends BaseContainer {
  services$: Observable<Service[]>;
  categories$: Observable<ServiceCategory[]>;
  currentCategoryId$: Observable<number>;
  currentServiceId$: Observable<number>;

  constructor(store: Store<fromCompany.State>) {
    super(store);
    this.services$ = this.store.select(fromCompany.getFilteredServices);
    this.categories$ = this.store.select(fromCompany.getServiceCategories);
    this.currentCategoryId$ = this.store.select(fromCompany.getCurrentCategoryId);
    this.currentServiceId$ = this.store.select(fromCompany.getCurrentServiceId);
  }

  updateSelectedCategory(id: number) {
    this.store.dispatch(new fromCompany.SetCurrentCategoryId(id));
  }

  updateSelectedService(id: number) {
    this.store.dispatch(new fromCompany.SetCurrentServiceId(id));
    this.store.dispatch(new fromCompany.OpenSlotsForServiceDialog())
  }
}
