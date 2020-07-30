import { getId } from '../utils/maths';
import { isEmpty } from '../utils/validators';
import { DEFAULT, LOADING } from '../utils/shared-constants';
import { isANumber } from '../utils/validators';

export const DELETE_WORKER = 'DELETE_WORKER';
export const ADD_WORKER = 'ADD_WORKER';
export const REMOVE_WORKER_FROM_COMPANY = 'REMOVE_WORKER_FROM_COMPANIES';
export const ADD_WORKER_TO_COMPANY = 'ADD_WORKER_TO_COMPANY';
export const LOADING_WORKER = 'LOADING_WORKER';

const loading = () => {
  return {
    type: LOADING_WORKER
  }
}
const asyncAddWorker = (workerName, profession, salary) => {
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

const asyncDeleteWorker = id => {
  return {
    type: DELETE_WORKER,
    payload: {
      workerId: id
    }
  }
}

const asyncRemoverWorkerFromWorks = (work, worker) => {
  return {
    type: REMOVE_WORKER_FROM_COMPANY,
    payload: {
      company: work,
      worker: worker
    }
  }
}

const asyncAddToCompany = (companyKey, worker) => {
  return {
    type: ADD_WORKER_TO_COMPANY,
    payload: {
      companyKey: parseInt(companyKey),
      worker: worker
    }
  }
}

export const addWorker = (workerName, profession, salary) => {
  return dispatch => {
    dispatch(loading());
    executeAsyncTask(dispatch, asyncAddWorker(workerName, profession, salary));
  }
}

export const deleteWorker = id => {
  return dispatch => {
    executeAsyncTask(dispatch, asyncDeleteWorker(id));
  }
}

export const removerWorkerFromWorks = (company, worker) => {
  return dispatch => {
    executeAsyncTask(dispatch, asyncRemoverWorkerFromWorks(company, worker));
  }
}

export const addToCompany = (companyKey, worker) => {
  return dispatch => {
    executeAsyncTask(dispatch, asyncAddToCompany(companyKey, worker));
  }
}

const executeAsyncTask = (dispatchCallback, callback) => {
  return setTimeout(() => {
    dispatchCallback(callback);
  }, 1000);
}