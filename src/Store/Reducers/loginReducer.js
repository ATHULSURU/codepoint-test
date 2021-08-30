const initialState = {
  data: [],
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER-API':
      return {
        ...state,
        data: action.payload.result,
      }
    default:
      return state
  }
}

export default loginReducer
