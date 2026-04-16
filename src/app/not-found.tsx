import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#003152] min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <span className="font-[family-name:var(--font-baskerville)] font-semibold text-[#89cff0]/20 text-[160px] leading-none block mb-0">
          404
        </span>
        <h1 className="font-[family-name:var(--font-baskerville)] font-semibold text-white text-4xl tracking-[-0.04em] mb-4 -mt-6">
          Page not found.
        </h1>
        <p className="text-white/50 mb-8 font-[family-name:var(--font-archivo)]">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#89cff0] text-[#003152] font-semibold rounded hover:bg-[#b3dff5] transition-colors font-[family-name:var(--font-archivo)]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
