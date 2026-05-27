"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ee] text-[#1f2a25]">
      <header className="border-b border-[#ddd6c9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold">
            Mary Duffy
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-[#bdc8b7]">
              Back to home
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center px-4 py-16">
        <section className="rounded-lg border border-[#ddd6c9] bg-[#fffdfa] p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase text-[#587260]">
            Burnout Recovery Reset
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#17211c] sm:text-5xl">
            You are on the reset list.
          </h1>
          <div className="mt-6 space-y-4 text-base leading-8 text-[#536158]">
            <p>
              {email ? (
                <>
                  We have noted <span className="font-medium">{email}</span> for
                  the 5-day reset.
                </>
              ) : (
                "We have noted your interest in the 5-day reset."
              )}
            </p>
            <p>
              The local page is ready for Kit. Once the Kit form is connected,
              this signup will trigger the automated email sequence.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/">
              <Button className="bg-[#243b31] text-white hover:bg-[#1b2e26]">
                Return to Mary&apos;s site
              </Button>
            </Link>
            <Link
              href="https://instagram.com/come_yogawithmary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#bdc8b7]">
                Follow on Instagram
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
