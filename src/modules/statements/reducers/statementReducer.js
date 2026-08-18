const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function statementReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STATEMENTS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_STATEMENTS_SUCCESS':
      return { ...state, list: action.payload, isLoading: false };
    case 'FETCH_STATEMENTS_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
