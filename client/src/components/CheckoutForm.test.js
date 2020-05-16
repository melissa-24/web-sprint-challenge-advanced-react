import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const form = rtl.render(<App />);
  const header = form.getByTestId('header');
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    // declare elements
  const form = rtl.render(<CheckoutForm />);
  const fname = form.getByTestId('fname');
  const lname = form.getByTestId('lname');
  const address = form.getByTestId('address');
  const city = form.getByTestId('city');
  const state = form.getByTestId('state');
  const zip = form.getByTestId('zip');
  const submit = form.getByTestId('submit');

  // change input of elements
  await rtl.waitFor(() => {
    rtl.fireEvent.change(fname, {target: {value: 'Melissa'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(lname, {target: {value: 'Longenberger'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(address, {target: {value: '24 My House St'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(city, {target: {value: 'Berwick'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(state, {target: {value: 'PA'}})
  })
  await rtl.waitFor(() => {
    rtl.fireEvent.change(zip, {target: {value: '18603'}})
  })

  // submit form
  await rtl.waitFor(() => {
    rtl.fireEvent.click(submit)
  })

  // get results
  const results = form.getByTestId('successMessage');

  // test results
  expect(results).toBeInTheDocument();

});