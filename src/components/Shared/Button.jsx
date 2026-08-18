import React from 'react';

class Button extends React.Component {
  render() {
    const {
      children,
      onClick,
      type = 'button',
      variant = 'primary',
      disabled = false,
    } = this.props;

    const styles = {
      primary: { background: '#0a1e3c', color: 'white' },
      secondary: { background: '#e1e4e8', color: '#24292f' },
      danger: { background: '#dc3545', color: 'white' },
    };

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: disabled ? 'default' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          ...(styles[variant] || styles.primary),
        }}
      >
        {children}
      </button>
    );
  }
}

export default Button;
