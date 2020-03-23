import {Component, OnInit} from '@angular/core';
import {BaseDetailsComponent} from '../BaseDetailsComponent';
import {Customer} from '../../../../core/models/Customer';
import {AppointmentService} from '../../../../shared/services/appointment.service';
import {Appointment} from '../../../../core/models/Appointment';
import {AppointmentEventDialogComponent} from '../../_dialogs/appointment-event/appointment-event-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'admin-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent extends BaseDetailsComponent<Customer> implements OnInit {

  displayedColumns: string[] = ['start', 'employee', 'service'];
  appointmentData: AppointmentData[];
  appointments: Appointment[];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  constructor(private appointmentService: AppointmentService,
              private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.appointmentService.get({customer: this.model.id})
      .toPromise()
      .then(appointments => {
        this.appointmentData = appointments.map(a => transformAppointment(a));
        this.appointments = appointments;
      });
  }

  onLineClick(row: AppointmentData) {
    const appointment = this.appointments.find(m => m.id === row.id);
    console.log(appointment)
    const dialogRef = this.dialog.open(AppointmentEventDialogComponent, {
      width: '400px',
      data: {appointment}
    });

    dialogRef.afterClosed().toPromise()
      .then(event => {
        if (event) {
        }
      });
  }
}

interface AppointmentData {
  id: number;
  start: string;
  employee: string;
  service: string;
}

function transformAppointment(appointment: Appointment): AppointmentData {
  return {
    id: appointment.id,
    start: appointment.start.format('DD/MM/YYYY'),
    employee: appointment.employee.name,
    service: appointment.service.name
  };
}
