const stats = [
  { label: "Supported aircraft", value: "A320 / A321" },
  { label: "Telemetry cadence", value: "Real-time + interval sync" },
  { label: "Pilot messaging", value: "Dispatch ↔ cockpit" },
];

const featureCards = [
  {
    eyebrow: "Capture",
    title: "Live flight telemetry from MSFS 2024",
    description:
      "Collect position, altitude, IAS/TAS, heading, fuel state, and flight phase directly through SimConnect with automatic event detection for takeoff, climb, cruise, descent, and landing.",
  },
  {
    eyebrow: "Communicate",
    title: "ACARS messaging built for pilots and dispatch",
    description:
      "Handle automatic operational messages and manual text communication in one clean inbox with clear delivery states and fast access during flight.",
  },
  {
    eyebrow: "Operate",
    title: "Backend-ready for airline operations",
    description:
      "Stream events to a Skyline backend over REST and WebSocket, log all flights and messages, and support reconnect flows when the simulator or network drops.",
  },
];

const downloadOptions = [
  {
    platform: "Windows 10 / 11",
    format: "Download package",
    title: "Skyline ACARS Desktop",
    description:
      "Designed as the primary flight client with native simulator connectivity, automated reports, and a focused desktop experience for Microsoft Flight Simulator 2024.",
    cta: "Download Windows EXE",
    note: "Best suited for live flying with MSFS 2024 and SimConnect.",
    badge: "Primary build",
  },
  {
    platform: "Chromebook / ChromeOS",
    format: "Installable web companion",
    title: "Skyline ACARS Companion",
    description:
      "A Chromebook-friendly install flow for briefing, live status tracking, and dispatch messaging when a native Windows simulator connection is not available on ChromeOS.",
    cta: "Install on Chromebook",
    note: "ChromeOS does not run Windows .exe files, so this experience is presented as an installable web app.",
    badge: "ChromeOS flow",
  },
];

const checklist = [
  "Automatic position reporting and operational flight events",
  "Dispatch-to-pilot messaging with sent / delivered / received states",
  "Offline queue with automatic reconnect for backend and simulator sessions",
  "Windows-first flight client plus Chromebook companion access",
];

const roadmap = [
  "Flight replay and event timeline",
  "Push notifications for critical dispatch updates",
  "Expanded fleet support beyond the A320/A321",
  "CSV and PDF flight export for reporting",
  "VATSIM / IVAO integration",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06131f] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(180deg,_rgba(7,17,29,0.88),_rgba(4,10,18,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <header className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">
                Skyline Virtual Airline
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-white">
                Skyline ACARS
              </h1>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              Microsoft Flight Simulator 2024 • Download-ready concept
            </div>
          </header>

          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-1 text-sm text-sky-100">
                English product page • redesigned experience
              </span>
              <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white lg:text-7xl">
                Download the ACARS client built for pilots, dispatch, and real-time airline ops.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
                Skyline ACARS connects Microsoft Flight Simulator 2024 to your airline backend,
                automates flight reporting, and keeps pilots and dispatch synchronized with a
                cleaner, more premium interface.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#downloads"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  View downloads
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore features
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-sky-950/10 backdrop-blur"
                  >
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#081827] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      Live flight board
                    </p>
                    <p className="mt-2 text-xl font-semibold">SKY204 • ENROUTE</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-200">
                    Connected
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Position", "59.3293° N / 18.0686° E"],
                    ["Altitude", "FL360"],
                    ["Ground speed", "451 kt"],
                    ["Fuel remaining", "6.4 t"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>
                      <p className="mt-2 text-lg font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">Dispatch message</p>
                      <p className="mt-1 text-sm text-slate-300">
                        Updated arrival stand assigned. Expect gate A12 on landing.
                      </p>
                    </div>
                    <span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs font-medium text-sky-100">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <section
          id="downloads"
          className="mt-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10 lg:p-8"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-200/75">Downloads</p>
              <h3 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">
                Platform-specific delivery for Windows and Chromebook users
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300 lg:text-lg">
                The page is now structured like a proper download product site: Windows gets the
                primary simulator-connected desktop experience, while Chromebook users get a
                polished companion install path tailored for ChromeOS constraints.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {downloadOptions.map((option) => (
              <article
                key={option.platform}
                className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                      {option.platform}
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold text-white">{option.title}</h4>
                  </div>
                  <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
                    {option.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-sky-200">{option.format}</p>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-300">{option.description}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">
                  {option.note}
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  {option.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mt-12 grid gap-6 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200/75">{card.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{card.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200/75">Included in scope</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Operational features that matter during a live flight</h3>
            <ul className="mt-6 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-300">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(255,255,255,0.03))] p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-100/80">Roadmap</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">What comes after the first release</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {roadmap.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
