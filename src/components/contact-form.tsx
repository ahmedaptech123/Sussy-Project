"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage("Your form passed browser validation, but this demo does not send messages yet.");
    event.currentTarget.reset();
  }
  return <form className="form-stack" onSubmit={submit} style={{ marginTop: 24 }}>
    <label>Your name<input name="name" autoComplete="name" required /></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
    <label>Topic<select name="topic" defaultValue="Product question"><option>Product question</option><option>Order support</option><option>Returns</option><option>Other</option></select></label>
    <label>Message<textarea name="message" required minLength={10} /></label>
    <button className="button button-dark" type="submit">Send message ↗</button>
    {message && <p className="notice" role="status">{message}</p>}
  </form>;
}
