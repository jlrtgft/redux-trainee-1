import { REMOVE_WORKER_FROM_WORKS } from "../actions/removeWorkerFromWork";

const initialState = {
  'works': [
    {
      'id': 1,
      'company': 'Amazón',
      'workers': [
        {
          'id': 1,
          'name': 'George',
          'profession': 'Ing. Sistemas',
          'salary': 10500
        },
        {
          'id': 2,
          'name': 'John',
          'profession': 'SCRUM',
          'salary': 13500
        }
      ]
    },
    {
      'id': 2,
      'company': 'Pizza hot',
      'workers': [
        {
          'id': 3,
          'name': 'Enrique',
          'profession': 'Ing. Sistemas',
          'salary': 10500
        }
      ]
    },
    {
      'id': 3,
      'company': 'GFT',
      'workers': [
        {
          'id': 4,
          'name': 'Margarita',
          'profession': 'Desarrollador front',
          'salary': 294821
        },
        {
          'id': 5,
          'name': 'Luis',
          'profession': 'Desarrollador back',
          'salary': 294821
        },
        {
          'id': 6,
          'name': 'Alberto',
          'profession': 'SCRUM',
          'salary': 294821
        }
      ]
    }
  ]
}

const workReducer = (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case REMOVE_WORKER_FROM_WORKS:
      copyState.works = state.works.map(work => {
        if (work.id === action.payload.company.id) {
          work.workers = work.workers.filter(e => e.id !== action.payload.worker.id);
        }
        return work;
      })
      break;
  }
  return copyState;
}

export default workReducer;
