import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/come_yogawithmary",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@come_yogawithmary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mary-duffy-295832127/",
  },
];

const stats = [
  {
    value: "40%",
    label:
      "of employees globally experienced a lot of stress the previous day.",
    source: "Gallup 2026",
    href: "https://www.gallup.com/workplace/697904/state-of-the-global-workplace-global-data.aspx",
  },
  {
    value: "45%",
    label: "of managers reported significant daily stress.",
    source: "Gallup 2026",
    href: "https://www.gallup.com/workplace/697904/state-of-the-global-workplace-global-data.aspx",
  },
  {
    value: "WHO",
    label:
      "recognises burnout as an occupational phenomenon linked to chronic workplace stress.",
    source: "WHO ICD-11",
    href: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon",
  },
];

const pillars = [
  {
    title: "Burnout literacy",
    text: "What burnout is, what it is not, and why capable people often miss the signs until recovery is already overdue.",
  },
  {
    title: "Recovery as a skill",
    text: "Practical ways to rebuild capacity through rest, attention, boundaries, nervous system regulation, and sustainable rhythms.",
  },
  {
    title: "Healthier work",
    text: "Evidence-based organisational psychology for workload, role clarity, autonomy, team norms, and better-designed jobs.",
  },
  {
    title: "Embodied leadership",
    text: "The yoga and mind-body bridge: noticing stress earlier, grounding before decisions, and leading from a regulated state.",
  },
];

const resetDays = [
  "Spot the signs of burnout before collapse",
  "Understand your stress and recovery cycle",
  "Try a five-minute nervous system reset",
  "Redesign one work boundary",
  "Build a recovery rhythm that survives real life",
];

const offers = [
  "Low-cost workshops on burnout recovery",
  "Mini series for high-functioning professionals",
  "Workplace sessions for teams and managers",
  "Guided playlists and practical recovery resources",
];

function SignupBlock() {
  return (
    <form
      action="/success"
      method="get"
      className="grid gap-3 rounded-lg border border-[#d8ded2] bg-white p-4 shadow-sm sm:grid-cols-[1fr_auto]"
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="h-11 min-w-0 rounded-md border border-[#cfd8c8] bg-[#fbfaf6] px-3 text-base text-[#1f2a25] outline-none transition focus:border-[#436b55] focus:ring-3 focus:ring-[#436b55]/20"
      />
      <Button
        type="submit"
        size="lg"
        className="h-11 bg-[#243b31] text-white hover:bg-[#1b2e26]"
      >
        Get the 5-day reset
      </Button>
      <p className="text-sm leading-6 text-[#5f6d63] sm:col-span-2">
        Five short emails to help you understand burnout, rebuild recovery, and
        stop relying on push-through mode. Kit integration is ready to connect.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <div className="font-sans bg-[#f7f4ee] text-[#1f2a25]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#243b31] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-[#ddd6c9] bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="text-base font-semibold">
            Mary Duffy
          </Link>
          <nav
            className="hidden items-center gap-5 text-sm text-[#5f6d63] sm:flex"
            aria-label="Main navigation"
          >
            <a href="#reset" className="hover:text-[#1f2a25]">
              Reset
            </a>
            <a href="#work" className="hover:text-[#1f2a25]">
              Work
            </a>
            <a href="#social" className="hover:text-[#1f2a25]">
              Follow
            </a>
          </nav>
          <a href="#reset">
            <Button
              size="sm"
              className="bg-[#243b31] text-white hover:bg-[#1b2e26]"
            >
              Join the email list
            </Button>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase text-[#587260]">
              Organisational psychology + embodied recovery
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-[#17211c] sm:text-6xl">
              For people who are good at coping, but not recovering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5d54] sm:text-xl">
              Mary Duffy shares evidence-based tools from organisational
              psychology and yoga to help high-functioning professionals
              understand burnout, rebuild recovery, and work in a way their body
              can sustain.
            </p>

            <div className="mt-8 max-w-2xl" id="reset">
              <SignupBlock />
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-[#ddd6c9] bg-[#ece7dc] shadow-sm">
              <Image
                src="/images/get-to-know.webp"
                alt="Mary Duffy practising yoga outdoors at sunrise"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-md bg-[#f7f4ee]/92 p-4 text-sm leading-6 text-[#34443a] shadow-sm backdrop-blur">
              Qualified organisational psychologist. Certified yoga teacher.
              Creating practical recovery tools for modern work.
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd6c9] bg-[#fffdfa]">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-3">
            {stats.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#e2ddd3] bg-white p-5 transition hover:border-[#9fb19e]"
              >
                <p className="text-3xl font-semibold text-[#243b31]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#536158]">
                  {item.label}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase text-[#7b6d55]">
                  {item.source}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-18 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#587260]">
                Start here
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#17211c] sm:text-5xl">
                Recovery is not a reward for finishing everything.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#536158]">
                The Burnout Recovery Reset is a short email series for people
                who can keep going, but know that push-through mode is costing
                them.
              </p>
            </div>

            <div className="grid gap-3">
              {resetDays.map((day, index) => (
                <div
                  key={day}
                  className="grid grid-cols-[3rem_1fr] items-center rounded-lg border border-[#ddd6c9] bg-[#fffdfa] p-4"
                >
                  <span className="text-sm font-semibold text-[#7b6d55]">
                    Day {index + 1}
                  </span>
                  <p className="text-base text-[#26362d]">{day}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#17211c] text-white">
          <div className="mx-auto max-w-6xl px-4 py-18 sm:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#b9c8b5]">
                What Mary teaches
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Practical psychology for people and workplaces that need
                recovery built in.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-lg border border-white/12 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-white/72">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-18 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#ddd6c9] bg-[#ece7dc]">
            <Image
              src="/images/meet-instructor.webp"
              alt="Mary Duffy seated calmly in a bright practice space"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase text-[#587260]">
              About Mary
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17211c] sm:text-5xl">
              Evidence-based, practical, and grounded in the body.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#536158]">
              <p>
                Mary Duffy is a qualified organisational psychologist and
                certified yoga teacher. Her work connects the science of
                healthier workplaces with the lived reality of stress, recovery,
                and the body.
              </p>
              <p>
                This is not about becoming less capable. It is about learning
                the recovery skills that capability often hides, postpones, or
                overrides.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd6c9] bg-[#fffdfa]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-18 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#587260]">
                Coming next
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#17211c] sm:text-5xl">
                Free first. Paid offers when the work is useful enough to earn
                them.
              </h2>
              <p className="mt-5 leading-7 text-[#536158]">
                The email list is the foundation. From there, Mary will test and
                shape practical offers around what the audience actually needs.
              </p>
            </div>

            <div className="grid gap-3">
              {offers.map((offer) => (
                <div
                  key={offer}
                  className="rounded-lg border border-[#ddd6c9] bg-white p-5 text-[#26362d]"
                >
                  {offer}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="social"
          className="mx-auto grid max-w-6xl gap-8 px-4 py-18 sm:py-24 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-[#587260]">
              Follow the work
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#17211c] sm:text-5xl">
              Short ideas on burnout, recovery, mind-body practice, and better
              work.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-[#bdc8b7]">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#dfe7d8]">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-[#17211c] sm:text-4xl">
                Get the Burnout Recovery Reset.
              </h2>
              <p className="mt-3 leading-7 text-[#425248]">
                Five short emails for people who are tired of relying on coping
                alone.
              </p>
            </div>
            <SignupBlock />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ddd6c9] bg-[#f7f4ee]">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-[#5f6d63] md:grid-cols-[1fr_auto]">
          <p>© {new Date().getFullYear()} Mary Duffy</p>
          <p>
            Educational content only. Not a substitute for medical or mental
            health support.
          </p>
        </div>
      </footer>
    </div>
  );
}
