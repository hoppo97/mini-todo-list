import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input} from './Input';

const textTodo = jest.fn();

describe('Input component', () => {
  it('onChange works', () => {
    render(<Input value="" textTodo={textTodo} />);
    
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(textTodo).toHaveBeenCalledTimes(5);
  })
});