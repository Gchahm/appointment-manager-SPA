import {Injectable} from '@angular/core';
import {Adapter} from '@api/adapter';
import {Service} from './Service';
import {ISchedule, Schedule} from './ISchedule';
import {Employee, IEmployee} from './IEmployee';

export class EmployeeResourceModel extends Employee implements IEmployeeResourceModel {
  scheduleModel: ISchedule;
  serviceModels: Service[];

  static fromJs(data: any): IEmployeeResourceModel {
    data = typeof data === 'object' ? data : {};
    const result = new EmployeeResourceModel();
    result.init(data);
    return result;
  }

  init(data: any) {
    super.init(data);
    this.scheduleModel = data.schedule ? Schedule.fromJs(data.schedule) : null;
    this.services = data.services ? data.services.map(s => s.id) : [];
    this.serviceModels = data.services ? data.services.map(s => Service.fromJs(s)) : [];
  }
}

export interface IEmployeeResourceModel extends IEmployee {
  scheduleModel: ISchedule;
  serviceModels: Service[];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeResourceModelAdapter implements Adapter<IEmployeeResourceModel> {
  adapt(data: any): IEmployeeResourceModel {
    return EmployeeResourceModel.fromJs(data);
  }
}
