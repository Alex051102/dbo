import React from 'react';

class StatementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statements: [],
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        statements: [
          { id: 1, date: '2024-01-15', type: 'Списание', amount: 15000, balance: 85000 },
          { id: 2, date: '2024-01-14', type: 'Зачисление', amount: 32000, balance: 100000 },
          { id: 3, date: '2024-01-13', type: 'Списание', amount: 8900, balance: 68000 },
        ],
        loading: false,
      });
    }, 600);
  }

  render() {
    const { statements, loading } = this.state;

    return (
      <div>
        <h3>📊 Выписки по счету</h3>
        {loading ? (
          <p>⏳ Загрузка...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Тип</th>
                <th>Сумма</th>
                <th>Баланс</th>
              </tr>
            </thead>
            <tbody>
              {statements.map((s) => (
                <tr key={s.id}>
                  <td>{s.date}</td>
                  <td>
                    <span style={{ color: s.type === 'Зачисление' ? '#28a745' : '#dc3545' }}>
                      {s.type}
                    </span>
                  </td>
                  <td>{s.amount.toLocaleString()} ₽</td>
                  <td>{s.balance.toLocaleString()} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default StatementList;
