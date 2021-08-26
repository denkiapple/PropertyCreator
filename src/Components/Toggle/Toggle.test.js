import React, { useState } from "react";
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Toggle from './Toggle';

const Wrapper = () => {
  const [value, setValue] = useState(false);
  return (
    <Toggle field={{
      name: "Wrapped Toggle",
      value,
      onChange: e => setValue(e.target.value),
    }} />
  );
};

test('Renders empty toggle', () => {
  const { getByTestId } = render(<Toggle />);
  const title = getByTestId("text");

  expect(title.textContent).toBe("Placehoder");
});

test('Toggles component value', () => {
  const { getByTestId } = render(<Wrapper />);
  const toggle = getByTestId("button");

  fireEvent.click(toggle);
  expect(toggle.classList.contains("togglerOn")).toBe(true);
  
  fireEvent.click(toggle);
  expect(toggle.classList.contains("togglerOn")).toBe(false);
});
