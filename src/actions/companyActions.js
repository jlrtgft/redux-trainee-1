import { isEmpty } from '../utils/validators';
import { getId } from '../utils/maths';
import { DEFAULT } from '../utils/shared-constants';

export const ADD_COMAPANY = 'ADD_COMPANY';
export const DEL_COMPANY = 'DEL_COMPANY';

export const addCompany = companyName => {
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

export const deleteCompany = id => {
  return {
    type: DEL_COMPANY,
    payload: {
      companyId: id
    }
  }
}