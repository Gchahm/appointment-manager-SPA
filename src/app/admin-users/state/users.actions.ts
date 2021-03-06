import {ActionCreator, createAction, props} from '@ngrx/store';
import {IUser} from '@api/models';
import {UserPasswordWriteModel} from '@api/clients/UserAdminClient';
import {BaseEntityActions, createActions} from '@shared/state/base/actions';
import {TypedAction} from '@ngrx/store/src/models';
import {ApiError} from '@api/Errors';


export const storeName = 'adminUsers';


interface UsersActions extends BaseEntityActions<IUser> {
  requestChangeUserPassword: ActionCreator<string, (props: { id: number, command: UserPasswordWriteModel }) =>
    ({ id: number, command: UserPasswordWriteModel } & TypedAction<string>)>;
  toggleShowPasswordForm: ActionCreator<string, (props: {value: boolean}) => ({value: boolean} & TypedAction<string>)>,
  changePasswordSuccess: ActionCreator<string, (props: {}) => ({} & TypedAction<string>)>;
  changePasswordError: ActionCreator<string, (props: {changePassError: ApiError}) => ({changePassError: ApiError} & TypedAction<string>)>;
}


export const actions: UsersActions = {
  ...createActions<IUser>(storeName),
  requestChangeUserPassword: createAction(`[${storeName}] Request Change Password`,
    props<{ id: number, command: UserPasswordWriteModel }>()),
  toggleShowPasswordForm: createAction(`[${storeName}] Toggle Show Password`, props<{value: boolean}>()),
  changePasswordSuccess: createAction(`[${storeName}] Change Password Success`, props<{}>()),
  changePasswordError: createAction(`[${storeName}] Change Password Error`, props<{changePassError: ApiError}>()),
};
