import React from 'react';

class StatementFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 'month',
      type: 'all',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (this.props.onFilterChange) {
      this.props.onFilterChange({ [e.target.name]: e.target.value });
    }
  }

  render() {
    const { period, type } = this.state;
    return (
      <div className="flex" style={{ marginBottom: '16px' }}>
        <div>
          <label className="label">Период</label>
          <select name="period" value={period} onChange={this.handleChange}>
            <option value="week">Неделя</option>
            <option value="month">Месяц</option>
            <option value="quarter">Квартал</option>
            <option value="year">Год</option>
          </select>
        </div>
        <div>
          <label className="label">Тип</label>
          <select name="type" value={type} onChange={this.handleChange}>
            <option value="all">Все</option>
            <option value="income">Зачисления</option>
            <option value="expense">Списания</option>
          </select>
        </div>
      </div>
    );
  }
}

export default StatementFilter;
