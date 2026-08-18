export const FETCH_STATEMENTS_REQUEST = 'FETCH_STATEMENTS_REQUEST';
export const FETCH_STATEMENTS_SUCCESS = 'FETCH_STATEMENTS_SUCCESS';
export const FETCH_STATEMENTS_FAILURE = 'FETCH_STATEMENTS_FAILURE';

export const fetchStatements = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATEMENTS_REQUEST });
    try {
      const statements = [
        { id: 1, date: '2024-01-15', type: 'Списание', amount: 15000, balance: 85000 },
        { id: 2, date: '2024-01-14', type: 'Зачисление', amount: 32000, balance: 100000 },
        { id: 3, date: '2024-01-13', type: 'Списание', amount: 8900, balance: 68000 },
      ];
      dispatch({ type: FETCH_STATEMENTS_SUCCESS, payload: statements });
    } catch (error) {
      dispatch({ type: FETCH_STATEMENTS_FAILURE, payload: error.message });
    }
  };
};
