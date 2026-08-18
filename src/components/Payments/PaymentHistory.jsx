import React from 'react';

class PaymentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        payments: [
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
        ],
        loading: false,
      });
    }, 800);
  }

  render() {
    const { payments, loading } = this.state;

    return (
      <div>
        <h3>📋 История платежей</h3>
        {loading ? (
          <p>⏳ Загрузка...</p>
        ) : (
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
              {payments.map((p) => {
                let statusText = '';
                let statusClass = '';
                if (p.status === 'completed') {
                  statusText = '✅ Выполнен';
                  statusClass = 'status-success';
                } else if (p.status === 'pending') {
                  statusText = '⏳ В обработке';
                  statusClass = 'status-pending';
                } else {
                  statusText = '❌ Ошибка';
                  statusClass = 'status-failed';
                }

                return (
                  <tr key={p.id}>
                    <td>{p.date}</td>
                    <td>{p.amount.toLocaleString()} ₽</td>
                    <td>{p.recipient}</td>
                    <td>
                      <span className={`status-badge ${statusClass}`}>{statusText}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default PaymentHistory;
