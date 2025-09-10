import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {
  ScrollAnimation,
  StaggeredAnimation,
} from '@/components/ui/scroll-animation';

export default function Home() {
  return (
    <div className="font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Candle Yoga</span>
          <nav className="flex gap-2" aria-label="Main navigation">
            <Link
              href="https://cal.com/wardch/candle-lit-yoga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-primary text-background"
                aria-label="Book a yoga class"
              >
                Book a class
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-10 md:grid-cols-2 items-center">
          <ScrollAnimation direction="right" delay={0.2}>
            <div>
              <h1 className="text-4xl sm:text-6xl font-semibold">
                Candle Yoga in Clontarf
              </h1>
              <p className="mt-6 text-lg sm:text-xl max-w-prose">
                Immerse yourself in a serene vinyasa flow every Monday from 7:45
                PM to 8:45 PM. Perfect for all levels, this class will
                rejuvenate your body and mind under the soft glow of
                candlelight.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  href="https://cal.com/wardch/candle-lit-yoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a candle yoga class - opens in new tab"
                >
                  <Button size="lg" className="bg-primary text-background">
                    Book a class
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/yoga-field.webp"
                alt="Peaceful yoga mat placed on a field with warm candlelit tones, representing the serene outdoor yoga experience"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="bg-[#101115] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-12 md:grid-cols-2 items-center">
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/candle-class.webp"
                alt="Evening yoga class in St. Anthony's Hall with soft candlelight creating a peaceful, meditative atmosphere"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold">
                Why Candle Yoga?
              </h2>
              <p className="mt-6 text-base sm:text-lg text-white/80 max-w-prose">
                Experience yoga in a tranquil, candlelit setting every Monday
                evening. Our vinyasa flow class is designed for all levels, from
                beginners to seasoned practitioners. The gentle atmosphere and
                soft lighting create an ideal space for relaxation, allowing you
                to connect with your breath and body.
              </p>
              <div className="mt-8 flex gap-3">
                <Link
                  href="https://cal.com/wardch/candle-lit-yoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a candle yoga class - opens in new tab"
                >
                  <Button
                    variant="secondary"
                    className="bg-white text-[#101115] hover:bg-white/90"
                  >
                    Book a class
                  </Button>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/qETiqWa7L5dr5RWTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open St. Anthony's Hall location in Google Maps - opens in new tab"
                >
                  <Button className="bg-primary text-background">
                    Open in Maps
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <main
        id="main-content"
        className="mx-auto max-w-6xl px-4 py-20 sm:py-28 space-y-20 sm:space-y-28"
      >
        <section
          id="instructor"
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/Yoga Picture from Unsplash.webp"
                alt="Mary Duffy, certified yoga instructor, demonstrating a yoga pose with calm and professional guidance"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right" delay={0.4}>
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold">
                Meet your instructor
              </h2>
              <p className="mt-6 text-base sm:text-lg max-w-prose">
                Mary Duffy is a certified yoga instructor trained in Goa, India.
                She is also a chartered psychologist. Mary blends her love for
                yoga with her background in psychology to create classes that
                are both uplifting and supportive. No matter your level, you'll
                feel right at home in her classes, which are all about embracing
                mindfulness and community
              </p>
            </div>
          </ScrollAnimation>
        </section>

        <section className="rounded-2xl bg-[#101115] text-white p-8 sm:p-12 grid gap-10 md:grid-cols-2 items-center">
          <ScrollAnimation direction="right" delay={0.2}>
            <div>
              <h2 className="text-3xl sm:text-5xl font-semibold">The space</h2>
              <p className="mt-6 text-base sm:text-lg text-white/80 max-w-prose">
                Candlelit yoga in a high-ceilinged, beautifully repurposed
                church hall by the sea. Soft light, generous space and calm
                atmosphere help you settle your breath and unwind.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.4}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/candle-class.webp"
                alt="Candlelit yoga session in the high-ceilinged hall"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </ScrollAnimation>
        </section>

        <section id="where-when" className="grid gap-8">
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-semibold">Where & when</h2>
          </ScrollAnimation>
          <div className="grid gap-8">
            <StaggeredAnimation className="space-y-8" staggerDelay={0.15}>
              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-base sm:text-lg">
                  <Link
                    href="https://maps.app.goo.gl/qETiqWa7L5dr5RWTA"
                    target="_blank"
                    className="underline"
                  >
                    St. Anthony's Hall, Clontarf Rd, Dublin 3, D03 TY23
                  </Link>
                  <span className="text-muted-foreground">
                    {' '}
                    (Not be confused with St. Anthony's House which is nearby.)
                  </span>
                  . The venue is viewable from the seafront along the Clontarf
                  Road. The back door is the easiest way to access the hall.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Time</h3>
                <p className="text-base sm:text-lg">
                  Mondays 7:45pm–8:45pm (six-week series from 29 Sep 2025).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Parking</h3>
                <p className="text-base sm:text-lg">
                  There is plenty of free parking within the church grounds
                  right next to the hall.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What to bring</h3>
                <p className="text-base sm:text-lg">
                  Your own yoga mat; optional water and a warm layer. We can
                  provide mats if you don't have one.
                </p>
              </div>
            </StaggeredAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps?q=St.%20Anthony%E2%80%99s%20Hall%2C%20Clontarf%20Rd%2C%20Dublin%203%2C%20D03%20TY23&output=embed"
                  className="h-full w-full border-0"
                  title="Map of St. Anthony's Hall, Clontarf"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="rounded-2xl bg-gray-100 text-gray-900 p-8 sm:p-12 text-center">
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Reserve your Place
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.4}>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join us every Monday from 7:45 PM to 8:45 PM. Spaces are limited,
              so secure your spot today and immerse yourself in this unique
              experience!
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <Link href="https://cal.com/wardch/candle-lit-yoga" target="_blank">
              <Button
                size="lg"
                className="bg-primary text-background hover:bg-primary/90"
              >
                Reserve
              </Button>
            </Link>
          </ScrollAnimation>
        </section>

        <section id="contact" className="space-y-6">
          <ScrollAnimation direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Join Our Community
            </h2>
          </ScrollAnimation>
          <StaggeredAnimation className="space-y-4" staggerDelay={0.1}>
            <p className="text-base sm:text-lg max-w-prose">
              We'd love to hear from you! Whether you have questions about our
              Candlelit Yoga classes, need assistance with bookings, or want to
              share your feedback, we're here to help.
            </p>
            <p className="text-base sm:text-lg max-w-prose">
              At our Candlelit Yoga class, you'll find yourself in a welcoming
              space. It's a chance to practice alongside others who share your
              love for yoga and self-care. Whether you're hoping to unwind after
              a long day or want to dive deeper into your practice, you'll
              discover a peaceful and enriching experience here.
            </p>
            <p className="text-muted-foreground">
              These are the best ways to reach us and stay connected:
            </p>
          </StaggeredAnimation>
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://instagram.com/come_yogawithmary"
                target="_blank"
              >
                <Button>Instagram</Button>
              </Link>

              <Link
                href="https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl?mode=ems_copy_c"
                target="_blank"
              >
                <Button variant="outline">Join our WhatsApp group</Button>
              </Link>

              <a href="mailto:charlieward18@gmail.com">
                <Button variant="outline">Email</Button>
              </a>
            </div>
          </ScrollAnimation>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Candle Yoga — St. Anthony's Hall,
            Clontarf
          </p>
        </div>
      </footer>
    </div>
  );
}
