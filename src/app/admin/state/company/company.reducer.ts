import {CompanyActions, ActionTypes} from './companyActions';
import {ApiError} from '@api/Errors';
import {Company, CompanyStripeDetails} from '@api/models';

export interface State {
  apiError: ApiError | null;
  stripeDetailsApiError: ApiError | null;
  stripeUrlApiError: ApiError | null;
  companyEditMode: boolean;
  configEditMode: boolean;
  company: Company;
  companyStripeDetails: CompanyStripeDetails;
}

export const initialState: State = {
  apiError: null,
  stripeDetailsApiError: null,
  stripeUrlApiError: null,
  companyEditMode: false,
  configEditMode: false,
  company: null,
  companyStripeDetails: null
};


export function reducer(state: State = initialState, action: CompanyActions): State {

  switch (action.type) {

    case ActionTypes.ToggleEditCompany:
      return {
        ...state,
        companyEditMode: action.payload
      };

    case ActionTypes.ToggleEditConfig:
      return {
        ...state,
        configEditMode: action.payload
      };

    case ActionTypes.SetCompany:
      return {
        ...state,
        company: action.payload,
        apiError: null,
        companyEditMode: false,
        configEditMode: false
      };

    case ActionTypes.SetConfig:
      return {
        ...state,
        company: {...state.company, config: action.payload},
        apiError: null,
        companyEditMode: false,
        configEditMode: false
      };

    case ActionTypes.SetApiError:
      return {
        ...state,
        apiError: action.payload
      };

    case ActionTypes.SetStripeDetails:
      return {
        ...state,
        companyStripeDetails: action.payload
      };

    case ActionTypes.SetStripeDetailsAPiError:
      return {
        ...state,
        stripeDetailsApiError: action.payload
      };

    case ActionTypes.SetStripeUrlAPiError:
      return {
        ...state,
        stripeUrlApiError: action.payload
      };

    default:
      return state;
  }
}
