import { isEmpty } from "../utils/validators";

export const ADD_COMAPNY = 'ADD_COMPANY';

export const addCompany = companyName => {
  if (!isEmpty(companyName)) {
    return {
      type: ADD_COMAPNY,
      payload: {
        id: randomId(),
        company: companyName,
        workers: []
      }
    }
  }
  return {
    type: 'DEFAULT'
  }
}

const randomId = () => {
  let output = Math.floor(Math.random() * 1000);
  return output;
}