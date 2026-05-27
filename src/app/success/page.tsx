import type { Metadata } from "next";
import { Suspense } from "react";
import { SuccessContent } from "./success-content";

export const metadata: Metadata = {
  title: "Burnout Recovery Reset | Mary Duffy",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f7f4ee] text-[#536158]">
          Loading...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
