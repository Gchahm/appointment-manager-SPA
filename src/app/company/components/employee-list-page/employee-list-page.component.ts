import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../core/models/Employee';
import {IAppState} from '../../../Store';
import {select} from '@angular-redux/store';
import {EmployeeService} from '../../../shared/services/employee.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'customer-employee-list',
  templateUrl: './employee-list-page.component.html',
  styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent implements OnInit {

  employees$;
  @select((s: IAppState) => s.company.companyName) companyName$;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employees$ = this.empService.get()
      .pipe(
        map(res => res.results)
      );
  }

  services(employee: Employee): string {
    return employee.services.map(s => s.name).join(' - ');
  }
}
