import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Forgot password", description: "Password recovery for Vaelen accounts." };

export default function ForgotPasswordPage() {
  return <><header className="page-hero"><p className="eyebrow">Account help</p><h1>Forgot your password?</h1><p>Password recovery becomes available after authentication and email services are configured.</p></header><section className="section"><div className="content-narrow"><p className="notice">Password recovery is not active in this starter.</p><p><Link href="/login" className="text-link">Back to sign in ↗</Link></p></div></section></>;
}
