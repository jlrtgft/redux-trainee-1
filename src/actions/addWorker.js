import { getId } from "../utils/maths";
import { isEmpty } from "../utils/validators";
import { DEFAULT } from "../utils/shared-constants";
import { isANumber } from '../utils/regex';

export const ADD_WORKER = 'ADD_WORKER';

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