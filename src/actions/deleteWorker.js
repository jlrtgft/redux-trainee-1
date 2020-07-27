export const DELETE_WORKER = 'DELETE_WORKER';

export const deleteWorker = id => {
  return {
    type: DELETE_WORKER,
    payload: {
      workerId: id
    }
  }
}