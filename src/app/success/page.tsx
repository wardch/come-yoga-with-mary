'use client';

import {useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {ScrollAnimation} from '@/components/ui/scroll-animation';
import {Suspense} from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();

  const name =
    searchParams.get('attendeeName') || searchParams.get('name') || 'there';
  const email = searchParams.get('email') || '';
  const date = searchParams.get('date') || '';
  const startTime = searchParams.get('startTime') || '';
  const endTime = searchParams.get('endTime') || '';
  const location =
    searchParams.get('location') ||
    "St. Anthony's Hall, Clontarf Road, D03 TY23";
  const title = 'Candle Lit Yoga with Mary Duffy';
  const hostName = 'Mary Duffy';
  const paymentIntent = searchParams.get('payment_intent') || '';
  const redirectStatus = searchParams.get('redirect_status') || '';
  const uid = searchParams.get('uid') || '';

  const formatDateTime = (dateStr: string, timeStr: string) => {
    if (!dateStr || !timeStr) return 'TBD';

    try {
      const date = new Date(dateStr);
      const time = new Date(timeStr);

      const formattedDate = date.toLocaleDateString('en-IE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const formattedTime = time.toLocaleTimeString('en-IE', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      return `${formattedDate} at ${formattedTime}`;
    } catch (error) {
      //frontenddebug
      console.log(
        '%c Date formatting error: %o',
        'background: red; color: white',
        error
      );
      return timeStr || 'TBD';
    }
  };

  return (
    <div className="font-sans min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            Candle Yoga
          </Link>
          <nav className="flex gap-2" aria-label="Main navigation">
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center space-y-8">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Checkmark icon"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.4}>
            <h1 className="text-4xl sm:text-6xl font-semibold text-green-600 mb-4">
              Booking Confirmed!
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Thank you,{' '}
              <span className="font-semibold text-foreground">{name}</span>!
              {redirectStatus === 'succeeded' && (
                <span className="block text-lg text-green-600 mt-2">
                  Your payment has been processed successfully.
                </span>
              )}
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.8}>
            <div className="bg-card border rounded-2xl p-8 sm:p-12 text-left max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Your Class Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Class
                  </span>
                  <span className="font-semibold text-right">{title}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Date & Time
                  </span>
                  <span className="font-semibold text-right">
                    {formatDateTime(date, startTime)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Duration
                  </span>
                  <span className="font-semibold">1 hour</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Location
                  </span>
                  <span className="font-semibold text-right">{location}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Instructor
                  </span>
                  <span className="font-semibold">{hostName}</span>
                </div>

                {paymentIntent && (
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="font-medium text-muted-foreground">
                      Payment Status
                    </span>
                    <span className="font-semibold text-green-600 capitalize">
                      {redirectStatus === 'succeeded'
                        ? '✓ Paid'
                        : redirectStatus}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium text-muted-foreground">
                    Price
                  </span>
                  <span className="font-semibold">€15</span>
                </div>

                {uid && (
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-muted-foreground">
                      Booking Reference
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {uid}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={1.0}>
            <div className="bg-[#101115] text-white rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">What to Expect</h3>
              <p className="text-white/80 mb-6">
                You're all set for an amazing candlelit yoga experience! Here's
                what to remember:
              </p>
              <ul className="text-white/80 space-y-2 text-left">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Bring your own yoga mat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Optional: water bottle and warm layer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Arrive 5-10 minutes early to settle in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Free parking available in the church grounds</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={1.2}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                We'll send a confirmation email to{' '}
                <span className="font-semibold text-foreground">{email}</span>{' '}
                shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-primary text-background">
                    Back to Home
                  </Button>
                </Link>

                <Link
                  href="https://maps.app.goo.gl/qETiqWa7L5dr5RWTA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    View Location
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={1.4}>
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Questions? We're here to help!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="https://instagram.com/come_yogawithmary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                </Link>

                <Link
                  href="https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    WhatsApp
                  </Button>
                </Link>

                <a href="mailto:charlieward18@gmail.com">
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </main>

      <footer className="border-t mt-20">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground text-center">
          <p>
            © {new Date().getFullYear()} Candle Yoga — St. Anthony's Hall,
            Clontarf
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="font-sans min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
