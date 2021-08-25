import React from "react";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import { PROPERTY_TYPES } from "../../constants";
import Select from './Select';

test('Renders empty select', () => {
  const { getByTestId } = render(<Select />);
  const emptyComponent = getByTestId("emptyLayout");

  expect(emptyComponent.textContent).toBe("Select_Error: Ingresa más de dos opciones");
});

test('Renders select with 3 property types', () => {
  const { getByTestId } = render(<Select options={PROPERTY_TYPES} />);
  const selectComponent = getByTestId("fullLayout");

  expect(selectComponent.childNodes.length).toBe(3);
});
