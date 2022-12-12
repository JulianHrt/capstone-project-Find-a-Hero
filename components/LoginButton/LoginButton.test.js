import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoginButton from ".";

describe("LoginButton", () => {
  it("should display a button with children text", () => {
    render(<LoginButton>Login</LoginButton>);

    const login = screen.getByText(/Login/i);

    expect(login).toHaveTextContent("Login");
  });
});
