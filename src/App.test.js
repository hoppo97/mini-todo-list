import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {

  it('render App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Добавить задачу/i);
    expect(linkElement).toBeInTheDocument();
  });
 
  it('typing in InputBox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.getByDisplayValue(/React/)).toBeInTheDocument();
  });
});
