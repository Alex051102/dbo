export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Имитация входа (без бэкенда)
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      // Имитация задержки запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Любые логин/пароль подходят
      const user = {
        id: 1,
        name: 'Тестовый пользователь',
        login: credentials.login,
      };

      dispatch({ type: LOGIN_SUCCESS, payload: user });
      return user;
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: 'Ошибка входа' });
      throw error;
    }
  };
};

export const logout = () => ({
  type: LOGOUT,
});
