import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign in", description: "Sign in to your Vaelen account." };

export default function LoginPage() {
  return <><header className="page-hero"><p className="eyebrow">Your Vaelen</p><h1>Welcome back.</h1><p>Account sign-in is a placeholder until secure authentication is configured.</p></header><section className="section"><div className="content-narrow"><div className="notice">No account authentication is connected in this starter. Do not enter a real password.</div><form className="form-stack" style={{ marginTop: 24 }} action="/login"><label>Email address<input type="email" name="email" autoComplete="email" required /></label><label>Password<input type="password" name="password" autoComplete="current-password" required /></label><button className="button button-dark" type="button" disabled>Sign in (not configured)</button></form><p><Link href="/forgot-password" className="text-link">Forgot password?</Link></p><p>New to Vaelen? <Link href="/register">Create an account</Link></p></div></section></>;
}
