import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';

test('renders empty toggle', () => {
  render(<Toggle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
