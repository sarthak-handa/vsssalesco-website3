import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8f9fc] px-4">
      <div className="text-center">
        <p className="font-display text-[10rem] font-semibold text-gray-100 leading-none select-none">404</p>
        <h1 className="font-display text-3xl font-semibold text-gray-900 mb-4 -mt-6">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Head back to explore our smart home solutions.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
