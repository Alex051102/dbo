import React from 'react';
import { connect } from 'react-redux';
import { fetchPayments } from '../actions/paymentActions';

class PaymentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.dispatch(fetchPayments()).finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { payments } = this.props;
    const { loading } = this.state;
    if (loading) return <p>⏳ Загрузка...</p>;
    return (
      <div>
        <h3>📋 История платежей</h3>
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Сумма</th>
              <th>Получатель</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.date}</td>
                <td>{p.amount} ₽</td>
                <td>{p.recipient}</td>
                <td>
                  {p.status === 'completed' && '✅ Выполнен'}
                  {p.status === 'pending' && '⏳ В обработке'}
                  {p.status === 'failed' && '❌ Ошибка'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  payments: state.payments.list,
});

export default connect(mapStateToProps)(PaymentHistory);
