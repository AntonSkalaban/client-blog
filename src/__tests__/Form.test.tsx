import React from "react";

import { act, fireEvent, render } from "@testing-library/react";
import { ContactForm } from "components/index";
import { useSendEmail } from "hooks";

jest.mock("react-map-gl/maplibre", () => ({
  useRouter: () => ({}),
}));

jest.mock("next-intl", () => ({
  useLocale: () => "en",
}));

jest.mock("../../src/hooks", () => ({
  useSendEmail: () => {
    const send = jest.fn(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_form: HTMLFormElement, _lang = "fakeLang", _templateID = "fakeId") => "mocked email send",
    );
    return { send, successMessage: "", isFetching: false, errorMessage: "mockError" };
  },
}));

jest.mock("assets/images/svg/vector.svg", () => "svg");

describe("ContactForm", () => {
  it("should show required error", async () => {
    const { getByTestId, getAllByText, getByText } = render(<ContactForm />);

    const submitButton = getByTestId("contanc-form-btn");

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(getAllByText("Required")).toHaveLength(3);
    expect(getByText("You must select an option!")).toBeDefined();
  });

  it("should show email error", async () => {
    const { getByTestId, getByText } = render(<ContactForm />);

    const emailInput = getByTestId("email-input");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "fakeEmail@test.test" } });
    });

    expect(getByText("Invalid email address")).toBeDefined();
  });

  it("should send email", async () => {
    const { getByTestId } = render(<ContactForm />);

    const form = getByTestId("form") as HTMLFormElement;
    const nameInput = getByTestId("name-input");
    const emailInput = getByTestId("email-input");
    const queryInput = getByTestId("query-input");
    const messgeInput = getByTestId("messge-input");

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "user" } });
      fireEvent.change(emailInput, { target: { value: "fakeEmail@gmail.com" } });
      fireEvent.change(queryInput, { target: { value: "test-value" } });
      fireEvent.change(messgeInput, { target: { value: "message" } });
    });

    expect(useSendEmail().send(form, "en", "id")).toBe("mocked email send");
  });
});
