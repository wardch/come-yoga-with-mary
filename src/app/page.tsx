import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Candle Yoga</span>
          <div className="flex gap-2">
            <Link href="#where-when">
              <Button variant="outline">Schedule</Button>
            </Link>
            <Link
              href="https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl?mode=ems_copy_c"
              target="_blank"
            >
              <Button className="bg-primary text-background">
                Join WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-semibold">
              Candle Yoga in Clontarf
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-prose">
              A warm, candlelit vinyasa flow for all levels. Mondays 7:45–8:45pm
              at St. Anthony’s Hall.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl?mode=ems_copy_c"
                target="_blank"
              >
                <Button size="lg" className="bg-primary text-background">
                  Join WhatsApp
                </Button>
              </Link>
              <a href="mailto:charlieward18@gmail.com">
                <Button size="lg" variant="outline">
                  Email
                </Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/yoga-field.webp"
              alt="Yoga mat on a field with warm candlelit tones"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#101115] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/candle-class.webp"
              alt="Candlelit evening yoga class in St. Anthony’s Hall"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">
              Why Candle Yoga?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-prose">
              Gentle, calming and spacious. Move, breathe and unwind in a
              beautiful, repurposed church hall by the sea. Suitable for
              complete beginners and experienced practitioners.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="#where-when">
                <Button
                  variant="secondary"
                  className="bg-white text-[#101115] hover:bg-white/90"
                >
                  View schedule
                </Button>
              </Link>
              <Link
                href="https://maps.app.goo.gl/qETiqWa7L5dr5RWTA"
                target="_blank"
              >
                <Button className="bg-primary text-background">
                  Open in Maps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-20 sm:py-28 space-y-20 sm:space-y-28">
        <section
          id="instructor"
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/Yoga Picture from Unsplash.jpg"
              alt="Mary Duffy guiding a yoga pose"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">
              Meet your instructor
            </h2>
            <p className="mt-6 text-base sm:text-lg max-w-prose">
              Mary Duffy is a certified yoga instructor trained in Goa, India,
              and a chartered psychologist. Her classes are uplifting,
              supportive and community-focused, offering options for complete
              beginners to experienced practitioners.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-[#101115] text-white p-8 sm:p-12 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold">The space</h2>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-prose">
              Candlelit yoga in a high-ceilinged, beautifully repurposed church
              hall by the sea. Soft light, generous space and calm atmosphere
              help you settle your breath and unwind.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/candle-class.webp"
              alt="Candlelit yoga session in the high-ceilinged hall"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        <section id="where-when" className="grid gap-8">
          <h2 className="text-3xl sm:text-4xl font-semibold">Where & when</h2>
          <ul className="grid gap-4 text-base sm:text-lg">
            <li>
              <span className="font-medium">Location:</span> St. Anthony’s Hall,
              Clontarf Rd, Dublin 3, D03 TY23.{' '}
              <Link
                href="https://maps.app.goo.gl/qETiqWa7L5dr5RWTA"
                target="_blank"
                className="underline"
              >
                Open in Maps
              </Link>
              . Not to be confused with St. Anthony’s House (smaller space
              within the same grounds, not on the seafront).
            </li>
            <li>
              <span className="font-medium">Time:</span> Mondays 7:45–8:45pm
              (six-week series from 29 Sep 2025).
            </li>
            <li>
              <span className="font-medium">Parking:</span> Free parking via St.
              Lawrence’s Road.
            </li>
            <li>
              <span className="font-medium">What to bring:</span> Your own yoga
              mat; optional water and a warm layer.
            </li>
          </ul>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">Stay in touch</h2>
          <p className="text-muted-foreground">
            Join the WhatsApp group for updates or reach out directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://chat.whatsapp.com/CwzzpKBZvPwHMV7gN5vMJl?mode=ems_copy_c"
              target="_blank"
            >
              <Button>Join WhatsApp</Button>
            </Link>
            <Link
              href="https://instagram.com/come_yogawithmary"
              target="_blank"
            >
              <Button variant="outline">Instagram</Button>
            </Link>
            <a href="mailto:charlieward18@gmail.com">
              <Button variant="outline">Email</Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Candle Yoga — St. Anthony’s Hall,
          Clontarf
        </div>
      </footer>
    </div>
  );
}
