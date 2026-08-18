const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload, isLoading: false };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}
