import React from 'react';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      recipient: '',
      status: 'idle',
      recipients: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        recipients: [
          { id: 1, name: 'ООО "Ромашка"' },
          { id: 2, name: 'ИП Иванов' },
          { id: 3, name: 'ООО "ТехноСервис"' },
        ],
      });
    }, 500);
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
    setTimeout(() => {
      this.setState({ status: 'success' });
      setTimeout(() => {
        this.setState({ status: 'idle', amount: '', recipient: '' });
      }, 2000);
    }, 1500);
  }

  render() {
    const { amount, recipient, status, recipients } = this.state;

    let statusText = '';
    let statusClass = '';
    if (status === 'loading') {
      statusText = '⏳ Отправка...';
      statusClass = 'status-loading';
    } else if (status === 'success') {
      statusText = '✅ Отправлено!';
      statusClass = 'status-success';
    }

    return (
      <div>
        <h3>💳 Новый платёж</h3>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '12px' }}>
            <label className="label">Сумма (₽)</label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={this.handleChange}
              placeholder="Введите сумму"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label className="label">Получатель</label>
            <select name="recipient" value={recipient} onChange={this.handleChange}>
              <option value="">Выберите получателя</option>
              {recipients.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex">
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? '⏳ Отправка...' : 'Отправить платёж'}
            </button>
            {statusText && <span className={`status-badge ${statusClass}`}>{statusText}</span>}
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
