import { ADD_WORKER_TO_COMPANY, REMOVE_WORKER_FROM_COMPANY } from '../actions/workerActions';
import { ADD_WORKER } from '../actions/workerActions';
import { DELETE_WORKER } from '../actions/workerActions';

const initialState = {
  workers: [
    {
      'id': 7,
      'name': 'Orlando',
      'profession': 'Ing. Sistemas',
      'salary': 10500
    },
    {
      'id': 8,
      'name': 'José',
      'profession': 'Ing. Mecánico',
      'salary': 11500
    },
    {
      'id': 9,
      'name': 'Luis',
      'profession': 'Ing. Biológo',
      'salary': 20500
    },
    {
      'id': 10,
      'name': 'Sarahi',
      'profession': 'Ing. Sistemas',
      'salary': 9500
    },
    {
      'id': 11,
      'name': 'Erika',
      'profession': 'Ing. Civil',
      'salary': 6500
    }
  ]
}

const workerReducer = (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case ADD_WORKER_TO_COMPANY:
      copyState.workers = copyState.workers.filter(e => e.id !== action.payload.worker.id);
      break;
    case REMOVE_WORKER_FROM_COMPANY:
      copyState.workers = copyState.workers.concat(action.payload.worker);
      break;
    case ADD_WORKER:
      const workerFind = copyState.workers.find(e => e.name === action.payload.name);
      if (workerFind === undefined) {
        copyState.workers = copyState.workers.concat(action.payload);
      }
      break;
    case DELETE_WORKER:
      copyState.workers = copyState.workers.filter(worker => worker.id !== action.payload.workerId)
      break;
  }
  return copyState
}

export default workerReducer;
