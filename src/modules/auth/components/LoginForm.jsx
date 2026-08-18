import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { login, password } = this.state;
    try {
      await this.props.dispatch(loginUser({ login, password }));
      this.props.onLoginSuccess();
    } catch {}
  }

  render() {
    const { login, password } = this.state;
    const { isLoading, error } = this.props;
    return (
      <div className="module">
        <h2>🔐 Вход в ДБО</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="login"
            value={login}
            onChange={this.handleChange}
            placeholder="Логин"
            disabled={isLoading}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Пароль"
            disabled={isLoading}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(LoginForm);
