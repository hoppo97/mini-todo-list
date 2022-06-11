import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Input} from './Input';

const onChange = jest.fn();

describe('Input component', () => {
  it('onChange works', () => {
    render(<Input value='' onChange={onChange} />);
    
    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(onChange).toHaveBeenCalledTimes(5);
  })
});