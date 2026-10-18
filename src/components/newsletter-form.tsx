"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email address.");
      return;
    }
    setMessage("Thanks — this demo form is validated, but a mailing service must be connected to subscribe you.");
    event.currentTarget.reset();
  }
  return <form className="newsletter-form" onSubmit={submit} noValidate>
    <label className="sr-only" htmlFor="newsletter-email">Email address</label>
    <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
    <button type="submit" className="button button-dark">Join us <span>↗</span></button>
    {message && <p className="form-message" role="status">{message}</p>}
  </form>;
}
