import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input} from './Input';

const setNameTodo = jest.fn();

describe('Input component', () => {
 

  it('onChange works', () => {
    render(<Input value="" setNameTodo={setNameTodo} />);
    
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(setNameTodo).toHaveBeenCalledTimes(5);
  })
});
