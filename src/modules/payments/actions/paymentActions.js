export const FETCH_PAYMENTS_REQUEST = 'FETCH_PAYMENTS_REQUEST';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAILURE = 'FETCH_PAYMENTS_FAILURE';
export const CREATE_PAYMENT = 'CREATE_PAYMENT';

export const fetchPayments = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PAYMENTS_REQUEST });
    try {
      const payments = [
        {
          id: 1,
          date: '2024-01-15',
          amount: 15000,
          recipient: 'ООО "Ромашка"',
          status: 'completed',
        },
        { id: 2, date: '2024-01-14', amount: 3200, recipient: 'ИП Иванов', status: 'completed' },
        {
          id: 3,
          date: '2024-01-13',
          amount: 8900,
          recipient: 'ООО "ТехноСервис"',
          status: 'pending',
        },
        { id: 4, date: '2024-01-12', amount: 500, recipient: 'ООО "Ромашка"', status: 'failed' },
      ];
      dispatch({ type: FETCH_PAYMENTS_SUCCESS, payload: payments });
    } catch (error) {
      dispatch({ type: FETCH_PAYMENTS_FAILURE, payload: error.message });
    }
  };
};

export const createPayment = (paymentData) => {
  return (dispatch) => {
    const newPayment = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      ...paymentData,
      status: 'pending',
    };
    dispatch({ type: CREATE_PAYMENT, payload: newPayment });
  };
};
