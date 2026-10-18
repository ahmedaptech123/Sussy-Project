"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="section empty-state"><p className="eyebrow">Something went wrong</p><h1>Let's try that again.</h1><p>We couldn't load this part of Vaelen just now.</p><button className="button button-dark" onClick={() => reset()}>Try again</button></main>;
}
