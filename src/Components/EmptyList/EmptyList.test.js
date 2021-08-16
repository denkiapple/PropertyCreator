import { render, screen } from '@testing-library/react';
import EmptyList from './EmptyList';

test('renders empty list text', () => {
  render(<EmptyList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
