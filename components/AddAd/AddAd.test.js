import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddAd from ".";

jest.mock("next/router", () => require("next-router-mock"));

describe("Button", () => {
  it("returns all inputs", async () => {
    const addAd = jest.fn();
    const expectedAdtitle = "Test title";
    const expectedDescription = "test";
    const expectedCosts = "1";
    const expectedCategory = "events";
    const expectedTags = "Tag1, Tag2";

    render(<AddAd onSubmit={addAd} />);

    const AdtitleInput = screen.getByLabelText(/adTitle/i);
    const categoryInput = screen.getByRole(/category/i);
    const tagsInput = screen.getByLabelText(/tags/i);
    const submitButton = screen.getByText(/save/i);
    const adDescriptionInput = screen.getByRole(/adDescription/i);
    const adCostsInput = screen.getByRole(/adCosts/i);

    await userEvent.type(AdtitleInput, "Test title");
    await userEvent.type(adDescriptionInput, "test");
    await userEvent.selectOptions(categoryInput, "events");
    await userEvent.type(tagsInput, "Tag1, Tag2");
    await userEvent.type(adCostsInput, "1");
    await userEvent.click(submitButton);

    expect(AdtitleInput).toHaveValue(expectedAdtitle);
    expect(adDescriptionInput).toHaveValue(expectedDescription);
    expect(adCostsInput).toHaveDisplayValue(expectedCosts);
    expect(categoryInput).toHaveValue(expectedCategory);
    expect(tagsInput).toHaveValue(expectedTags);
    expect(addAd).toHaveBeenCalledTimes(1);
  });
});
