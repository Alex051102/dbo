import React from 'react';
import { connect } from 'react-redux';
import { fetchStatements } from '../actions/statementActions';

class StatementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.dispatch(fetchStatements()).finally(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { statements } = this.props;
    const { loading } = this.state;
    if (loading) return <p>⏳ Загрузка...</p>;
    return (
      <div>
        <h3>📊 Выписки по счету</h3>
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
                <td>{s.type}</td>
                <td>{s.amount} ₽</td>
                <td>{s.balance} ₽</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statements: state.statements.list,
});

export default connect(mapStateToProps)(StatementList);
