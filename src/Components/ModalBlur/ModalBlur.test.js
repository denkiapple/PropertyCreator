import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import ModalBlur from './ModalBlur';

test('Renders empty modal blur', () => {
  render(
    <ModalBlur>
      <p>Test ModalBlur</p>
    </ModalBlur>
  );
  const linkElement = screen.getByText(/Test ModalBlur/i);
  expect(linkElement).toBeInTheDocument();
});

