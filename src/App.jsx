import React from 'react';
import PaymentForm from './components/Payments/PaymentForm';
import PaymentHistory from './components/Payments/PaymentHistory';
import StatementList from './components/Statements/StatementList';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>🏦 ДБО — Система дистанционного банковского обслуживания</h1>
          <p>Версия: монолит на классовых компонентах · Декабрь 2023</p>
        </div>

        <div className="module">
          <PaymentForm />
        </div>

        <div className="module">
          <PaymentHistory />
        </div>

        <div className="module">
          <StatementList />
        </div>
      </div>
    );
  }
}

export default App;
