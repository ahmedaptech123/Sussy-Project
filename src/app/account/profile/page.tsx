import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profile settings", robots: { index: false, follow: false } };

export default function ProfilePage() {
  return <><header className="page-hero"><p className="eyebrow">Your Vaelen</p><h1>Profile settings</h1><p>Manage your account details.</p></header><section className="section"><div className="content-narrow"><p className="notice">Profile editing is not implemented. A real version must use authenticated server actions and validate all submitted data.</p></div></section></>;
}
