"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function CheckoutForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setMessage("Demo only: no order was created and no payment was taken. Connect server-side order creation and a supported payment provider before launch.");
  }
  return <div className="content-narrow">
    <div className="notice">Do not enter real payment card details. Payment processing is not configured in this starter.</div>
    <form className="form-stack" onSubmit={submit} style={{ marginTop: 24 }}>
      <label>Full name<input name="name" autoComplete="name" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
      <label>Address<input name="address" autoComplete="street-address" required /></label>
      <label>City<input name="city" autoComplete="address-level2" required /></label>
      <label>Postal code<input name="postalCode" autoComplete="postal-code" required /></label>
      <button className="button button-dark" type="submit">Review demo checkout ↗</button>
      {message && <p className="notice" role="status">{message}</p>}
    </form>
    <p><Link href="/cart" className="text-link">← Return to bag</Link></p>
  </div>;
}
