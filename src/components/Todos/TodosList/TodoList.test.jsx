import {render, screen} from '@testing-library/react';
import { TodoList  } from './TodoList';

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
    render(<TodoList todos={TODOS} />);


    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Поесть')).toBeInTheDocument();
  });

  it('TodoList renders without data', () => {
    render(<TodoList />);

    expect(screen.queryByRole('ul')).toBeNull();
  });

  it('TodoList snapshots renders without data', () => {
    const view = render(<TodoList todos={TODOS}/>);

    expect(view).toMatchSnapshot();
  })
});