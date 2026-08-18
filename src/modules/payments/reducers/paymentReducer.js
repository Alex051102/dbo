const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PAYMENTS_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_PAYMENTS_SUCCESS':
      return { ...state, list: action.payload, isLoading: false };
    case 'FETCH_PAYMENTS_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    case 'CREATE_PAYMENT':
      return { ...state, list: [action.payload, ...state.list] };
    default:
      return state;
  }
}
