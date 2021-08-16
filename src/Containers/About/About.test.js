import { render, screen } from '@testing-library/react';
import About from './About';

test('renders "About" page', () => {
  render(<About />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
