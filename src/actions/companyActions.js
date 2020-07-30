import { isEmpty } from '../utils/validators';
import { getId } from '../utils/maths';
import { DEFAULT } from '../utils/shared-constants';

export const ADD_COMAPANY = 'ADD_COMPANY';
export const DEL_COMPANY = 'DEL_COMPANY';
export const LOADING_COMPANY = 'LOADING_COMPANY';

const loading = () => {
  return {
    type: LOADING_COMPANY
  }
}

const asyncAddCompany = companyName => {
  if (!isEmpty(companyName)) {
    return {
      type: ADD_COMAPANY,
      payload: {
        id: getId(),
        company: companyName,
        workers: []
      }
    }
  }
  return {
    type: DEFAULT
  }
}

const asyncDeleteCompany = id => {
  return {
    type: DEL_COMPANY,
    payload: {
      companyId: id
    }
  }
}

export const addCompany = companyName => {
  return dispatch => {
    dispatch(loading());
    executeAsyncTask(dispatch, asyncAddCompany(companyName));
  }
}

export const deleteCompany = id => {
  return dispatch => {
    executeAsyncTask(dispatch, asyncDeleteCompany(id));
  }
}

const executeAsyncTask = (dispatchCallback, callback) => {
  return setTimeout(() => {
    dispatchCallback(callback);
  }, 1000);
}