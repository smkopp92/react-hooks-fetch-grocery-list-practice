import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

import App from "../components/App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays grocery prompts after fetching", async () => {
  render(<App />);

  expect(await screen.findByText(/lorem grocerium 1/g)).toBeInTheDocument();
  expect(await screen.findByText(/lorem grocerium 2/g)).toBeInTheDocument();
});

test("creates a new grocery when the form is submitted", async () => {
  render(<App />);

  // wait for first render of list (otherwise we get a React state warning)
  await screen.findByText(/lorem grocerium 1/g);


  // fill out form
  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "lorem grocerium 3" },
  });

  // submit form
  fireEvent.submit(screen.queryByText(/Add Grocery/));

  expect(await screen.findByText(/lorem grocerium 1/g)).toBeInTheDocument();
  expect(await screen.findByText(/lorem grocerium 3/g)).toBeInTheDocument();
});

test("deletes the grocery when the delete button is clicked", async () => {
  const { rerender } = render(<App />);

  await screen.findByText(/lorem grocerium 1/g);

  fireEvent.click(screen.queryAllByText("Delete Grocery")[0]);

  await waitForElementToBeRemoved(() => screen.queryByText(/lorem grocerium 1/g));

  rerender(<App />);

  await screen.findByText(/lorem grocerium 2/g);

  expect(screen.queryByText(/lorem grocerium 1/g)).not.toBeInTheDocument();
});

test("Updates the grocery when clicked", async () => {
  const { rerender } = render(<App />);

  await screen.findByText(/lorem grocerium 2/g);

  fireEvent.click(screen.queryAllByText(/lorem grocerium 2/));

  rerender(<App />);

  expect(screen.queryAllByText(/lorem grocerium 2/)).toHaveStyle(`text-decoration: line-through`)
});
