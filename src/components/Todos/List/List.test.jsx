import {render, screen} from '@testing-library/react';
import { List  } from './List';

const TODOS = [
  {
    id: 1,
    text: 'Приготовить',
    completed: true,
  },
  {
    id: 2,
    text: 'Поесть',
    completed: false,
  },
  {
    id: 3,
    text: 'Поспать',
    completed: true,
  },
];

describe('TodoList component', () => {
  it('TodoList renders', () => {
    render(<List todos={TODOS} />);


    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Поесть')).toBeInTheDocument();
  });

  it('TodoList renders without data', () => {
    render(<List />);

    expect(screen.queryByRole('ul')).toBeNull();
  });

  it('TodoList snapshots renders without data', () => {
    const view = render(<List todos={TODOS}/>);

    expect(view).toMatchSnapshot();
  })
});