const initialState = {
  'works': [
    {
      'company': 'Amazón',
      'Salary': 30000,
      'diference': 0,
      'name': 'Felipe'
    },
    {
      'company': 'Pizza hot',
      'Salary': 6000,
      'diference': 0,
      'name': 'Enrique'
    },
    {
      'company': 'GFT',
      'Salary': 20000,
      'diference': 0,
      'name': 'Alberto'
    }
  ],
  'vacants': []
}

const workReducer = (state = initialState, action) => {
  console.log(action);
  return { ...state };
}

export default workReducer;
