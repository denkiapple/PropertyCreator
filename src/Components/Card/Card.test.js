import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./Card";

test("Card renders correctly", () => {
    const component = render(<Card />);
    const headerEl = component.getByTestId("header");

    expect(headerEl).toBe("0 Street");
});
