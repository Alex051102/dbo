import React from 'react';
import { connect } from 'react-redux';
import { createPayment } from '../actions/paymentActions';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', recipient: '', status: 'idle' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { amount, recipient } = this.state;
    if (!amount || !recipient) {
      alert('Заполните все поля');
      return;
    }
    this.setState({ status: 'loading' });
    this.props.dispatch(createPayment({ amount, recipient }));
    setTimeout(() => {
      this.setState({ status: 'success', amount: '', recipient: '' });
      setTimeout(() => this.setState({ status: 'idle' }), 2000);
    }, 1000);
  }

  render() {
    const { amount, recipient, status } = this.state;
    return (
      <div>
        <h3>💳 Новый платёж</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            placeholder="Сумма (₽)"
            disabled={status === 'loading'}
          />
          <input
            name="recipient"
            value={recipient}
            onChange={this.handleChange}
            placeholder="Получатель"
            disabled={status === 'loading'}
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '⏳ Отправка...' : 'Отправить платёж'}
          </button>
          {status === 'success' && (
            <span style={{ color: 'green', marginLeft: '10px' }}>✅ Отправлено!</span>
          )}
        </form>
      </div>
    );
  }
}

export default connect()(PaymentForm);
