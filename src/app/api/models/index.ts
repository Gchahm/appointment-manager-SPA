export {Appointment, IAppointment, IAppointmentWriteModel, AppointmentAdapter} from './Appointment';
export {Schedule, IScheduleWriteModel, ScheduleAdapter} from './Schedule';
export {Shift, IShiftWriteModel, ShiftAdapter, TimeFrame} from './Shift';
export {CompanyConfig, IConfigWriteModel, ConfigAdapter} from './CompanyConfig';
export {Company, ICompanyWriteModel, CompanyAdapter} from './Company';
export {CompanyStripeDetails, CompanyStripeDetailsAdapter} from './CompanyStripeDetails';
export {CompanyDetailsResult, CompanyDetailsResultAdapter} from './CompanyDetailsResult';
export {Employee, IEmployee, EmployeeWriteModel, EmployeeAdapter} from './IEmployee';
export {EmployeeResourceModel, IEmployeeResourceModel, EmployeeResourceModelAdapter} from './IEmployeeResourceModel';
export {EmployeeDashboardModel, EmployeeDashboardAdapter} from './EmployeeDashboardModel';
export {Customer, ICustomer, ICustomerWriteModel, CustomerAdapter} from './ICustomer';
export {Service, IServiceWriteModel, ServiceAdapter} from './Service';
export {SchedulingPanel, ISchedulingPanelWriteModel, SchedulingPanelAdapter, PanelManager} from './SchedulingPanel';
export {ServiceCategory, IServiceCategoryWriteModel, ServiceCategoryAdapter} from './ServiceCategory';
export {Group, IGroup, IGroupWriteModel, GroupAdapter} from './IGroup';
export {Permission, IPermissionWriteModel, PermissionAdapter} from './Permission';
export {User, IUser, IUserWriteModel, UserAdapter} from './IUser';
export {Slot, SlotAdapter} from './Slot';
export {Person, IPerson} from './IPerson';
export {RequestModel, RequestAdapter, AddAppointmentWriteModel} from './RequestModel';
export {IReadModel} from './IReadModel';


export type Partial<T> = {
  [P in keyof T]?: T[P];
};
