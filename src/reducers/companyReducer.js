import { REMOVE_WORKER_FROM_COMPANY, ADD_TO_COMPANY } from '../actions/workerActions';
import { ADD_COMAPANY } from '../actions/companyActions';
import { DEL_COMPANY } from '../actions/companyActions';

const initialState = {
  'companies': [
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

const companyReducer = (state = initialState, action) => {
  const copyState = { ...state };
  switch (action.type) {
    case REMOVE_WORKER_FROM_COMPANY:
      copyState.companies = copyState.companies.map(company => {
        if (company.id === action.payload.company.id) {
          company.workers = company.workers.filter(e => e.id !== action.payload.worker.id);
        }
        return company;
      })
      break;
    case ADD_TO_COMPANY:
      copyState.companies = copyState.companies.map(company => {
        if (company.id === action.payload.companyKey) {
          company.workers = company.workers.concat(action.payload.worker);
        }
        return company;
      })
      break;
    case ADD_COMAPANY:
      copyState.companies = copyState.companies.concat(action.payload);
      break;
    case DEL_COMPANY:
      copyState.companies.map(company => {
        if (company.workers.length === 0) {
          copyState.companies = copyState.companies.filter(comp => comp.id !== action.payload.companyId)
        }
        return company;
      });
      break;
  }
  return copyState;
}

export default companyReducer;
