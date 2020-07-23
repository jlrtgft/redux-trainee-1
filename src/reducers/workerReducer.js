const initialState = {
  workers: [
    {
      'name': 'Orlando',
      'profession': 'Ing. Sistemas',
      'salary': 10500
    },
    {
      'name': 'José',
      'profession': 'Ing. Mecánico',
      'salary': 11500
    },
    {
      'name': 'Luis',
      'profession': 'Ing. Biológo',
      'salary': 20500
    },
    {
      'name': 'Sarahi',
      'profession': 'Ing. Sistemas',
      'salary': 9500
    },
    {
      'name': 'Erika',
      'profession': 'Ing. Civil',
      'salary': 6500
    }
  ]
}

const workerReducer = (state = initialState, action) => {
  console.log(action);
  return { ...state };
}

export default workerReducer;
