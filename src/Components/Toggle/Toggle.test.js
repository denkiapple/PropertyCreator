import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Toggle from './Toggle';

test('Renders empty toggle', () => {
  const component = render(<Toggle />);

  const linkElement = screen.getByText(/Placeholder/i);
  expect(linkElement).toBeInTheDocument();
});
