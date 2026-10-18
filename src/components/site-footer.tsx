import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">VAELEN<span>®</span></Link>
          <p>Considered essentials. Modern silhouettes. Made for your everyday.</p>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link href="/shop">Shop all</Link><Link href="/collections/new-arrivals">New arrivals</Link><Link href="/about">Our story</Link><Link href="/blog">The journal</Link></div>
        <div className="footer-column"><h3>Customer care</h3><Link href="/contact">Contact</Link><Link href="/faq">FAQs</Link><Link href="/shipping">Shipping</Link><Link href="/returns">Returns</Link></div>
        <div className="footer-column"><h3>Information</h3><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookie preferences</Link><Link href="/size-guide">Size guide</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Vaelen. All rights reserved.</span><span>Thoughtfully considered, effortlessly worn.</span></div>
    </footer>
  );
}
