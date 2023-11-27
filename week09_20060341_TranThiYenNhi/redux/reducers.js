var initialState = {
  number1: 0,
  number2: 0,
  result: 0,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, result: +state.number1 + +state.number2 };

    case 'MINUS':
      return { ...state, result: +state.number1 - +state.number2 };

    case 'MUTIL':
      return { ...state, result: +state.number1 * +state.number2 };

    case 'DIV':
      return { ...state, result: +state.number1 / +state.number2 };

    case 'SET_ONE':
      return { ...state, number1: action.payload };

    case 'SET_TWO':
      return { ...state, number2: action.payload };
    default:
      return state;
  }
}
export default reducer;