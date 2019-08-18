import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../shared/models/Employee';
import {EmployeeService} from '../../../shared/services/employee.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input('employee') employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
