import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import LoginModal from ".";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
  it("returns all inputs", async () => {
    const expectedUser = "Julian";
    const expectedPassword = "123456";

    render(<LoginModal />);

    const userInput = screen.getByLabelText(/name/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(userInput, expectedUser);
    await userEvent.type(passwordInput, expectedPassword);

    expect(userInput).toHaveValue(expectedUser);
    expect(passwordInput).toHaveValue(expectedPassword);
  });
});
