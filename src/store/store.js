import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // ← именованный импорт
import authReducer from '../modules/auth/reducers/authReducer';
import paymentReducer from '../modules/payments/reducers/paymentReducer';
import statementReducer from '../modules/statements/reducers/statementReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  payments: paymentReducer,
  statements: statementReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
