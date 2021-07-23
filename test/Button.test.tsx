import * as React from 'react';
// This below import is what gives us the "toBeInTheDocument" method
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { SCButton as Button } from '../stories/Button.stories';

describe('Button', () => {
  //... our former test
  it('should call the onClick method when a user clicks on the button', () => {
    // mock out our OnClick function
    const mockClick = jest.fn();

    const { getByRole } = render(<Button text='test' onClick={mockClick} />);

    // we store a variable with the button element
    const buttonElement = getByRole('button');

    // Simulate a user clicking on the button
    fireEvent.click(buttonElement);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});