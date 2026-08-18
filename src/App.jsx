import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './shared/styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
  }

  handleLoginSuccess() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <div className="header">
              <h1>🏦 ДБО — Система дистанционного банковского обслуживания</h1>
              <p>Версия: модульный монолит · 2023</p>
            </div>

            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <LoginPage onLoginSuccess={this.handleLoginSuccess} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
              />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
