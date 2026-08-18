import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../modules/auth/actions/authActions';
import PaymentForm from '../modules/payments/components/PaymentForm';
import PaymentHistory from '../modules/payments/components/PaymentHistory';
import StatementList from '../modules/statements/components/StatementList';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(logout());
    this.props.navigate('/login');
  }

  render() {
    return (
      <div>
        <div className="dashboard-header">
          <h2>📊 Панель управления</h2>
          <button onClick={this.handleLogout}>Выйти</button>
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

const DashboardPageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <DashboardPage {...props} navigate={navigate} />;
};

export default DashboardPageWithNavigate; // ← экспортируем обёртку
