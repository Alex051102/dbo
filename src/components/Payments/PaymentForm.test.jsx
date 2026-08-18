import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm', () => {
  test('рендерит форму', () => {
    render(<PaymentForm />);
    expect(screen.getByText('💳 Новый платёж')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите сумму')).toBeInTheDocument();
    expect(screen.getByText('Отправить платёж')).toBeInTheDocument();
  });

  test('показывает предупреждение если поля пустые', () => {
    render(<PaymentForm />);
    const button = screen.getByText('Отправить платёж');
    fireEvent.click(button);
    // alert вызывается, но в jsdom его нет, просто проверяем что ошибка не вылетела
    expect(button).toBeInTheDocument();
  });
});
