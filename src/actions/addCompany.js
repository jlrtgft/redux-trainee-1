import { isEmpty } from "../utils/validators";
import { getId } from "../utils/maths";
import { DEFAULT } from "../utils/shared-constants";

export const ADD_COMAPNY = 'ADD_COMPANY';

export const addCompany = companyName => {
  if (!isEmpty(companyName)) {
    return {
      type: ADD_COMAPNY,
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