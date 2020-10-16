import {Component, OnInit} from '@angular/core';
import {Service} from '@api/models/Service';
import {Employee} from '@api/models/Employee';
import {Appointment} from '@api/models/Appointment';
import {select, Store} from '@ngrx/store';
import {State} from '@admin/state/admin.reducer';
import {Customer} from '@api/models/Customer';
import {Observable} from 'rxjs';

import * as fromAppointments from '@app/admin-appointments/state';
import * as fromCustomers from '@app/admin-customers/state';
import * as fromEmployees from '@app/admin-employee/state';
import * as fromServices from '@app/admin-services/state';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-customer-appointments',
  templateUrl: './customer-appointments.component.html',
  styleUrls: ['./customer-appointments.component.css']
})
export class CustomerAppointmentsComponent implements OnInit {

  appointments$: Observable<Appointment[]>;
  selectedCustomer$: Observable<Customer>;
  services$: Observable<Service[]>;
  employees$: Observable<Employee[]>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.services$ = this.store.select(fromServices.selectors.selectAll);
    this.employees$ = this.store.select(fromEmployees.selectors.selectAll);
    this.appointments$ = this.store.select(fromCustomers.selectors.getCurrentCustomerAppointments);

    this.selectedCustomer$ = this.store.pipe(
      select(fromCustomers.selectors.getCurrent),
      filter(customer => customer !== null)
    );

  }

  loadAppointments(obj) {
    this.store.dispatch(fromAppointments.actions.requestEntities({params: obj}));
  }

  openAppointment(id: number) {
    this.store.dispatch(fromAppointments.actions.openFormDialog({id}));
  }
}




