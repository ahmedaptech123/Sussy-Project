import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy policy", description: "A template outline for the information a real Vaelen privacy policy should explain." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Privacy policy</h1><p>A template outline for the information a real Vaelen privacy policy should explain.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>Information we collect</h2><p>Describe the personal information your production site actually collects, why it is needed, how long it is retained, and the legal basis where applicable.</p><h2>Payments and service providers</h2><p>Name the payment, hosting, analytics, email, and other providers actually used. Never claim that providers are used before configuration.</p><h2>Your choices</h2><p>Explain applicable access, correction, deletion, marketing opt-out, and cookie choices based on the business's location and legal obligations.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
