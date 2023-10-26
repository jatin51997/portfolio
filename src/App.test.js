import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the App component", () => {
  render(<App />);
  const appElement = screen.getByText("Your App Content");
  expect(appElement).toBeInTheDocument();
});
