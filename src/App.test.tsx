import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/v8 ComboBox Callout Bug 🐛/i);
  expect(linkElement).toBeInTheDocument();
});
