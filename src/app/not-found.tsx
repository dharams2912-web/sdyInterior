import Link from "next/link";
import { Corners, GoldRule } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-forest-800 bg-lattice px-5 pt-24 text-center text-ivory-100">
      <Corners className="inset-10 top-28" />
      <div>
        <p className="font-display text-[8rem] leading-none text-gold-500/80 sm:text-[12rem]">404</p>
        <GoldRule className="mt-4 justify-center" />
        <h1 className="mt-8 font-display text-4xl sm:text-5xl">This room hasn&apos;t been designed yet.</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory-100/65">The page you are looking for has moved or does not exist.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-900">Back to home</Link>
          <Link href="/services/" className="rounded-full border border-gold-500/60 px-7 py-3.5 text-sm font-semibold text-gold-500">Our services</Link>
        </div>
      </div>
    </section>
  );
}
