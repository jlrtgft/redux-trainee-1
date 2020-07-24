export const REMOVE_WORKER_FROM_WORKS = 'REMOVE_WORKER_FROM_WORKS';
export const ADD_TO_COMPANY = 'ADD_TO_COMPANY';

export const removerWorkerFromWorks = (work, worker) => {
  return {
    type: REMOVE_WORKER_FROM_WORKS,
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