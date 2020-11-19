import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Moment} from 'moment';
import {Appointment, Employee} from '@api/models';
import * as moment from 'moment';
import {ModelPermissions} from '@core/state';

@Component({
  selector: 'employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.css']
})
export class EmployeeScheduleComponent {
  @Input() currentDate: Moment;
  @Input() startDate: Moment;
  @Input() endDate: Moment;
  @Input() appointments: Appointment[];
  @Input() permissions: ModelPermissions;
  @Input() employee: Employee;

  @Output() updateCurrent = new EventEmitter<Moment>();
  @Output() add = new EventEmitter<Moment>();

  dates(): Moment[] {
    const dates = [];
    let controlDate = moment.utc(this.startDate.toISOString());
    while (controlDate.isBefore(this.endDate) || controlDate.isSame(this.endDate)) {
      dates.push(moment.utc(controlDate.toISOString()));
      controlDate = controlDate.clone().add(1, 'day');
    }
    return dates;
  }

  isCurrent(date: Moment) {
    return this.currentDate.format('DDMMYYYY') === date.format('DDMMYYYY');
  }

  emitDate(value: Moment) {
    this.updateCurrent.emit(value);
  }

  nextDay() {
    this.emitDate(this.currentDate.clone().add(1, 'day'));
  }

  previousDay() {
    this.emitDate(this.currentDate.clone().subtract(1, 'day'));
  }
}