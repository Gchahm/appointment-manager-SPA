import * as moment from 'moment';

export class CreateSelfAppointmentForm {
  constructor(public startDate: string,
              public endDate: string,
              public startTime: string,
              public endTime: string,
              public reason: string,
              public employeeId: string) {
  }

  model(): CreateSelfAppointmentModel {
    return {
      start: moment.utc(this.startDate + ' ' + this.startTime).toISOString(),
      end: moment.utc(this.endDate + ' ' + this.endTime).toISOString(),
      reason: this.reason,
      employee: this.employeeId
    };
  }
}

export interface CreateSelfAppointmentModel {
  start: string;
  end: string;
  reason: string;
  employee: string;
}