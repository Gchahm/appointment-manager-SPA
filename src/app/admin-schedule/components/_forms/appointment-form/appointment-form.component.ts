import {Component} from '@angular/core';
import {BaseFormComponent} from '../BaseFormComponent';
import {FormBuilder} from '@angular/forms';
import {Appointment} from '../../../../core/models/Appointment';
import {MatDialog} from '@angular/material/dialog';
import {AppointmentService} from '../../../../shared/services/appointment.service';

@Component({
  selector: 'admin-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent extends BaseFormComponent<Appointment> {
  form;
  constructor(private fb: FormBuilder,
              private dialog: MatDialog,
              service: AppointmentService) {
     super(service);
  }
}

