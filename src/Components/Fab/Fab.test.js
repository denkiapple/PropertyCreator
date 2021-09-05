import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Fab from './Fab';

test('Renders empty Fab', () => {
  render(<Fab title="Test" />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checks Fab click', () => {
  let wasClicked = false;

  const { getByTestId } = render(<Fab onClick={() => (wasClicked = true)} />);
  const button = getByTestId("fabBtn");

  expect(wasClicked).toBe(false);

  fireEvent.click(button);

  expect(wasClicked).toBe(true);
});
