import React, { useState } from "react";
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import MetersInput from './MetersInput';

const Wrapper = () => {
  const [value, setValue] = useState(0);
  return (
    <MetersInput field={{
      name: "Wrapped Component",
      value,
      onChange: e => setValue(e.target.value),
    }} />
  );
};

test('Renders empty meters input', () => {
  const { getByTestId } = render(<MetersInput />);
  const emptyComponent = getByTestId("title");

  expect(emptyComponent.textContent).toBe("Meters Input");
});

test('Sets a value to the meters input', () => {
  const { getByTestId } = render(<Wrapper />);
  const inputField = getByTestId("input");

  fireEvent.change(inputField, {
    target: {
      value: 5,
      name: "Input",
    },
  });

  expect(inputField.value).toBe("5");
});
