import Link from "next/link";

export default function NotFound() {
  return <main className="section empty-state"><p className="eyebrow">404 · Page not found</p><h1>That page took another turn.</h1><p>The page may have moved or no longer exists.</p><Link href="/" className="button button-dark">Return home ↗</Link></main>;
}
