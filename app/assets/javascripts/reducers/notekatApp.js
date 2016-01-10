const initialState = {
  notebooks: ['nb one', 'nb two'],
  words: ['word 1']
}

function showAlert(state = initialState, action) {
  switch(action.type) {
    case '123':
      alert ('123');
      return state;
    default:
      return state
  }
}

export default showAlert
