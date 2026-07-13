import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-white-200 min-h-[60vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 py-24 lg:px-[148px] w-full">
        <div className="max-w-[640px] flex flex-col gap-[24px]">
          <span className="font-mono text-[14px] tracking-[1.2px] uppercase text-cobolt-500">404</span>
          <h1 className="h2 text-black-500">Page not found</h1>
          <p className="p3 text-black-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Here are a few useful places to go next.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] mt-2">
            <Link href="/" className="cta-primary">Back to home</Link>
            <Link href="/services" className="cta-secondary">Explore services</Link>
            <Link href="/contact" className="cta-secondary">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
