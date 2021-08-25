import React, { useState } from "react";
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import NumberInput from './NumberInput';

const Wrapper = () => {
  const [value, setValue] = useState(0);
  return (
    <NumberInput field={{
      name: "Wrapped Component",
      value,
      onChange: e => setValue(e.target.value),
    }} />
  );
};

test('Renders empty number input', () => {
  const { getByTestId } = render(<NumberInput />);
  const title = getByTestId("title");
  const value = getByTestId("value");

  expect(title.textContent).toBe("Number Input");
  expect(value.textContent).toBe("0");
});

test('Decrements and Increments number input', () => {
  const { getByTestId } = render(<Wrapper />);
  const value = getByTestId("value");
  const sbsBtn = getByTestId("sbsBtn");
  
  // No less than creo
  fireEvent.click(sbsBtn);
  expect(value.textContent).toBe("0");

  // Increment
  const addBtn = getByTestId("addBtn");
  fireEvent.click(addBtn);
  expect(value.textContent).toBe("1");

  // No more than 99
  [...Array(100).keys()].forEach(() => fireEvent.click(addBtn));
  expect(value.textContent).toBe("99");

  // Decrement
  fireEvent.click(sbsBtn);
  expect(value.textContent).toBe("98");
});
