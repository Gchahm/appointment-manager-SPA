import {EmployeesPageComponent} from '@admin/../admin-employee/pages/employees-page/employees-page.component';
import {CanViewEmployeesGuard} from '@admin/guards/can-view-employees.guard';
import {checkForPermission} from '../api/models/IUser';
import {ServicesPageComponent} from '@admin/../admin-services/pages/services-page/services-page.component';
import {SchedulePageComponent} from '@admin/../admin-schedule/pages/schedule-page/schedule-page.component';
import {CanViewSchedulesGuard} from '@admin/guards/can-view-schedules.guard';
import {CustomersPageComponent} from '@admin/../admin-customers/pages/customers-page/customers-page.component';
import {CanViewCustomersGuard} from '@admin/guards/can-view-customers.guard';
import {UsersPageComponent} from '@admin/../admin-users/pages/users-page/users-page.component';
import {GroupsPageComponent} from '@admin/pages/groups-page/groups-page.component';
import {HomePageComponent} from '@admin/pages/home-page/home-page.component';
import {SchedulingPageComponent} from '@admin/../admin-scheduling/pages/scheduling-page/scheduling-page.component';
import {CanBookAppointmentsGuard} from '@admin/guards/can-book-appointments.guard';
import {DashBoardRoute} from '@shared/components/dashboard-container/dashboard-container.component';
import {PERMISSION_VIEW, PermissionModels} from '@api/permissions';
import {CanViewUsersGuard} from '@app/admin-users/guards/can-view-users.guard';
import {CanViewUserGroupsGuard} from '@app/admin-users/guards/can-view-user-groups.guard';


export const adminDashboardRoutes: DashBoardRoute[] =
  [
    {
      path: 'home',
      icon: 'home',
      component: HomePageComponent,
    },
    {
      path: 'services',
      icon: 'magic',
      component: ServicesPageComponent,
      // canActivate: [CanViewServicesGuard]
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.service)
    },
    {
      path: 'schedules',
      icon: 'calendar-alt',
      component: SchedulePageComponent,
      canActivate: [CanViewSchedulesGuard],
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.schedule)
    },
    {
      path: 'employees',
      icon: 'user-friends',
      component: EmployeesPageComponent,
      canActivate: [CanViewEmployeesGuard],
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.employee)
    },
    {
      path: 'customers',
      icon: 'address-card',
      component: CustomersPageComponent,
      canActivate: [CanViewCustomersGuard],
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.customer)
    },
    {
      path: 'appointments',
      icon: 'book',
      component: SchedulingPageComponent,
      canActivate: [CanBookAppointmentsGuard]
    },
    {
      path: 'users',
      icon: 'user-circle',
      component: UsersPageComponent,
      canActivate: [CanViewUsersGuard],
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.user)
    },
    {
      path: 'groups',
      icon: 'user-cog',
      component: GroupsPageComponent,
      canActivate: [CanViewUserGroupsGuard],
      fn: (user) => checkForPermission(user, PERMISSION_VIEW, PermissionModels.group)
    },
  ];
