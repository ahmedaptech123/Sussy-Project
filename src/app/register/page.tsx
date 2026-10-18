import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Create account", description: "Create a Vaelen customer account." };

export default function RegisterPage() {
  return <><header className="page-hero"><p className="eyebrow">Make it yours</p><h1>Create an account.</h1><p>Save your details and keep track of orders once account features are connected.</p></header><section className="section"><div className="content-narrow"><div className="notice">Registration is not connected to a database or authentication provider yet. Do not submit real credentials.</div><form className="form-stack" style={{ marginTop: 24 }}><label>Full name<input autoComplete="name" required /></label><label>Email address<input type="email" autoComplete="email" required /></label><label>Password<input type="password" autoComplete="new-password" minLength={12} required /></label><button className="button button-dark" type="button" disabled>Create account (not configured)</button></form><p>Already registered? <Link href="/login">Sign in</Link></p></div></section></>;
}
