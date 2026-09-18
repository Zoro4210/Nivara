import Link from "next/link";

export default function NotFound() {
  return <section className="not-found section-shell"><p className="eyebrow">404 · Not found</p><h1>This place<br />is still a thought.</h1><p>The page you requested does not exist in the current collection.</p><Link className="button button--dark" href="/">Return home</Link></section>;
}
