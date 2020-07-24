export const REMOVE_WORKER_FROM_WORKS = 'REMOVE_WORKER_FROM_WORKS';

export const removerWorkerFromWorks = (work, worker) => {
  return {
    type: REMOVE_WORKER_FROM_WORKS,
    payload: {
      company: work,
      worker: worker
    }
  }
}