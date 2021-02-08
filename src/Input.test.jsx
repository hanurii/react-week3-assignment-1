import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const value = '테스트';
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { container, getByText } = render ((
    <Input
      value={value}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(container).toHaveTextContent('추가');
  // expect(container).toHaveTextContent('테스트');

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('추가'));

  expect(container).not.toHaveTextContent('테스트');

});
