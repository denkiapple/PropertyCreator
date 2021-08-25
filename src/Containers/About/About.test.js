import { render, screen } from '@testing-library/react';
import About from './About';

test('renders "About" page', () => {
  render(<About />);
  const linkElement = screen.getByText(/Hello there/i);
  expect(linkElement).toBeInTheDocument();
});
