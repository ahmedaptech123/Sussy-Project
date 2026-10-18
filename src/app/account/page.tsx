import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "My account", robots: { index: false, follow: false } };

export default function AccountPage() {
  return <><header className="page-hero"><p className="eyebrow">Your Vaelen</p><h1>Account</h1><p>Account dashboard preview.</p></header><section className="section"><div className="content-narrow"><p className="notice">Authentication is not implemented. This page is not a secure account area and must be protected before launch.</p><p><Link href="/account/orders">Order history ↗</Link></p><p><Link href="/account/profile">Profile settings ↗</Link></p><p><Link href="/login">Sign in ↗</Link></p></div></section></>;
}
