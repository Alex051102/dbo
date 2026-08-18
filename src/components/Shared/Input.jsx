import React from 'react';

class Input extends React.Component {
  render() {
    const { label, name, value, onChange, placeholder, type = 'text', error } = this.props;

    return (
      <div style={{ marginBottom: '12px' }}>
        {label && <label className="label">{label}</label>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            padding: '8px 12px',
            border: `1px solid ${error ? '#dc3545' : '#d0d7de'}`,
            borderRadius: '6px',
            fontSize: '14px',
            width: '100%',
            maxWidth: '300px',
          }}
        />
        {error && <span style={{ color: '#dc3545', fontSize: '12px' }}>{error}</span>}
      </div>
    );
  }
}

export default Input;
