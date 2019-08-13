import {Employee} from '../../staff-services/models/Employee';
import {Customer} from '../../staff-services/models/Customer';
import {Service, ServiceAdapter} from '../../staff-services/models/Service';
import {Moment} from 'moment';
import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {Adapter} from '../adapter';

export class Appointment {
  constructor(
    public customer: Customer,
    public employee: Employee,
    public service: Service,
    public start: Moment,
    public end: Moment
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentAdapter implements Adapter<Appointment> {

  constructor(private serviceAdapter: ServiceAdapter) {
  }

  adapt(item: any): Appointment {
    return new Appointment(
      item.customer,
      item.employee,
      this.serviceAdapter.adapt(item.service),
      moment.utc(item.start),
      moment.utc(item.end)
    );
  }

}