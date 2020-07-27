import { getId } from '../utils/maths';
import { isEmpty } from '../utils/validators';
import { DEFAULT } from '../utils/shared-constants';
import { isANumber } from '../utils/regex';

export const DELETE_WORKER = 'DELETE_WORKER';
export const ADD_WORKER = 'ADD_WORKER';
export const REMOVE_WORKER_FROM_COMPANY = 'REMOVE_WORKER_FROM_COMPANIES';
export const ADD_TO_COMPANY = 'ADD_TO_COMPANY';

export const addWorker = (workerName, profession, salary) => {
  if (!isEmpty(workerName) && !isEmpty(profession) && !isEmpty(salary) && isANumber(salary)) {
    return {
      type: ADD_WORKER,
      payload: {
        id: getId(),
        name: workerName,
        profession: profession,
        salary: salary
      }
    }
  }
  return {
    type: DEFAULT
  }
}

export const deleteWorker = id => {
  return {
    type: DELETE_WORKER,
    payload: {
      workerId: id
    }
  }
}

export const removerWorkerFromWorks = (work, worker) => {
  return {
    type: REMOVE_WORKER_FROM_COMPANY,
    payload: {
      company: work,
      worker: worker
    }
  }
}

export const addToCompany = (companyKey, worker) => {
  return {
    type: ADD_TO_COMPANY,
    payload: {
      companyKey: parseInt(companyKey),
      worker: worker
    }
  }
}