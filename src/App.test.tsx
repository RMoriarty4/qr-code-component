import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";

test("renders the qr texts", () => {
  render(<App />);
  const qrHeading = screen.getByText(/Improve your front-end skills/i);
  const qrText = screen.getByText(/Scan/i);
  expect(qrHeading).toBeInTheDocument();
  expect(qrText).toBeInTheDocument();
});
