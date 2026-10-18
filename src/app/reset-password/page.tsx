import type { Metadata } from "next";

export const metadata: Metadata = { title: "Reset password", robots: { index: false, follow: false } };

export default function ResetPasswordPage() {
  return <><header className="page-hero"><p className="eyebrow">Account help</p><h1>Reset password</h1><p>A secure, token-based password reset flow must be configured before this page can reset an account.</p></header><section className="section"><div className="content-narrow"><p className="notice">Password reset is not active in this starter.</p></div></section></>;
}
