"use client";

import { useMemo, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "flight", label: "Flight" },
  { id: "messages", label: "Messages" },
  { id: "downloads", label: "Downloads" },
  { id: "settings", label: "Settings" },
] as const;

const telemetry = [
  { label: "Callsign", value: "SKY204", hint: "ESSA → EGLL" },
  { label: "Altitude", value: "FL360", hint: "Cruise" },
  { label: "Ground speed", value: "451 kt", hint: "Stable" },
  { label: "Fuel remaining", value: "6.4 t", hint: "ETA 01:12" },
  { label: "Wind", value: "264° / 42 kt", hint: "Tailwind" },
  { label: "ACARS sync", value: "Online", hint: "3s ago" },
];

const eventTimeline = [
  { time: "09:12", title: "Pushback complete", detail: "Aircraft connected to Skyline backend." },
  { time: "09:26", title: "Takeoff report sent", detail: "Automatic ACARS departure event delivered." },
  { time: "10:04", title: "Cruise reached", detail: "Position report interval reduced to 60 seconds." },
  { time: "10:31", title: "Dispatch update", detail: "Arrival stand changed to gate A12." },
];

const inboxSeed = [
  {
    id: 1,
    from: "Dispatch",
    subject: "Gate update",
    body: "Arrival stand updated to A12. Expect marshaller guidance on stand.",
    status: "Delivered",
  },
  {
    id: 2,
    from: "Ops Control",
    subject: "Fuel watch",
    body: "Remain on cost index 24. No further fuel restrictions at this time.",
    status: "Unread",
  },
  {
    id: 3,
    from: "Crew Center",
    subject: "Turnaround note",
    body: "Cabin handover paperwork already prepared for the inbound stand team.",
    status: "Archived",
  },
];

const downloadFiles = [
  {
    title: "Windows flight client package",
    description: "Product overview and package notes for the Windows-connected Skyline ACARS desktop client.",
    href: "/downloads/skyline-acars-windows-package.txt",
    button: "Download Windows package",
  },
  {
    title: "Chromebook companion setup",
    description: "ChromeOS install guide and companion workflow for dispatch, monitoring, and messaging.",
    href: "/downloads/skyline-acars-chromebook-guide.txt",
    button: "Download Chromebook guide",
  },
];

const settingsOptions = [
  "Enable automatic takeoff / landing reports",
  "Retry offline messages when connection returns",
  "Show dispatch notifications during approach",
  "Sync telemetry every 15 seconds while airborne",
];

export default function Home() {
  const [activeView, setActiveView] = useState<(typeof navItems)[number]["id"]>("overview");
  const [selectedMessageId, setSelectedMessageId] = useState<number>(inboxSeed[0].id);
  const [composerText, setComposerText] = useState("Requesting latest stand assignment and turnaround notes.");
  const [sendState, setSendState] = useState("Ready to transmit");
  const [phase, setPhase] = useState("Cruise");

  const selectedMessage = useMemo(
    () => inboxSeed.find((message) => message.id === selectedMessageId) ?? inboxSeed[0],
    [selectedMessageId],
  );

  return (
    <main className="min-h-screen bg-[#04111d] text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-6 lg:py-6">
        <aside className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="rounded-[24px] border border-sky-300/10 bg-sky-400/10 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-100/70">Skyline ACARS</p>
            <h1 className="mt-3 text-2xl font-semibold">Flight Operations Hub</h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              A full application-style dashboard for telemetry, ACARS messaging, downloads, and pilot settings.
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            {navItems.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveView(item.id)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    active
                      ? "bg-sky-400 text-slate-950 shadow-lg shadow-sky-950/20"
                      : "bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-xs ${active ? "text-slate-800" : "text-slate-400"}`}>
                    Open
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-[#071826] p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Connection status</p>
            <div className="mt-4 grid gap-3">
              {[
                ["MSFS 2024", "Connected"],
                ["Skyline backend", "Healthy"],
                ["Dispatch channel", "Subscribed"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                  <span className="text-sm text-slate-300">{label}</span>
                  <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs text-emerald-200">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_26%),linear-gradient(180deg,rgba(8,18,31,0.98),rgba(5,10,20,1))] p-5 shadow-2xl shadow-black/20 lg:p-6">
          <header className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-200/70">Pilot workspace</p>
              <h2 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">Interactive Skyline ACARS application</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 lg:text-base">
                Monitor flight state, read dispatch messages, configure reporting, and download platform assets from one application-style interface.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/downloads/skyline-acars-windows-package.txt"
                download
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Download Windows package
              </a>
              <a
                href="/downloads/skyline-acars-chromebook-guide.txt"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download Chromebook guide
              </a>
            </div>
          </header>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.95fr]">
            <div className="space-y-6">
              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {telemetry.map((card) => (
                  <article key={card.label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{card.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{card.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{card.hint}</p>
                  </article>
                ))}
              </section>

              <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
                <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Flight timeline</p>
                      <h3 className="mt-2 text-2xl font-semibold">Live event feed</h3>
                    </div>
                    <select
                      value={phase}
                      onChange={(event) => setPhase(event.target.value)}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-white outline-none"
                    >
                      {[
                        "Boarding",
                        "Taxi",
                        "Takeoff",
                        "Climb",
                        "Cruise",
                        "Approach",
                        "Landing",
                      ].map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mt-5 rounded-[24px] border border-sky-300/10 bg-sky-400/10 p-4 text-sm leading-7 text-sky-50">
                    Active flight phase: <span className="font-semibold">{phase}</span>. Automatic ACARS rules adapt based on your current phase selection.
                  </div>
                  <div className="mt-6 space-y-4">
                    {eventTimeline.map((event) => (
                      <div key={event.time} className="flex gap-4 rounded-[22px] border border-white/10 bg-[#081725] p-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400/15 text-sm font-semibold text-sky-100">
                          {event.time}
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white">{event.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{event.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Dispatch composer</p>
                  <h3 className="mt-2 text-2xl font-semibold">Send a pilot message</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Draft an ACARS message and simulate a cockpit-to-dispatch transmission from the same interface.
                  </p>
                  <textarea
                    value={composerText}
                    onChange={(event) => setComposerText(event.target.value)}
                    className="mt-5 min-h-40 w-full rounded-[24px] border border-white/10 bg-[#081725] px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-slate-500"
                    placeholder="Type a message to dispatch..."
                  />
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-slate-400">{sendState}</p>
                    <button
                      type="button"
                      onClick={() => setSendState(`Message queued at ${new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`)}
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      Send message
                    </button>
                  </div>
                </article>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Inbox</p>
                    <h3 className="mt-2 text-2xl font-semibold">ACARS messages</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {inboxSeed.length} total
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  {inboxSeed.map((message) => {
                    const active = selectedMessageId === message.id;
                    return (
                      <button
                        key={message.id}
                        type="button"
                        onClick={() => setSelectedMessageId(message.id)}
                        className={`rounded-[22px] border px-4 py-4 text-left transition ${
                          active
                            ? "border-sky-300/30 bg-sky-400/10"
                            : "border-white/10 bg-[#081725] hover:bg-white/8"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{message.subject}</p>
                          <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                            {message.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-sky-100/80">{message.from}</p>
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">{message.body}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,165,233,0.14),rgba(255,255,255,0.03))] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Selected message</p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedMessage.subject}</h3>
                <p className="mt-2 text-sm text-sky-100/80">From {selectedMessage.from}</p>
                <div className="mt-5 rounded-[24px] border border-white/10 bg-slate-950/45 p-4 text-sm leading-7 text-slate-200">
                  {selectedMessage.body}
                </div>
              </section>

              <section id="downloads" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Downloads</p>
                <h3 className="mt-2 text-2xl font-semibold">Working file downloads</h3>
                <div className="mt-5 grid gap-4">
                  {downloadFiles.map((file) => (
                    <article key={file.href} className="rounded-[22px] border border-white/10 bg-[#081725] p-4">
                      <p className="text-base font-semibold text-white">{file.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{file.description}</p>
                      <a
                        href={file.href}
                        download
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                      >
                        {file.button}
                      </a>
                    </article>
                  ))}
                </div>
              </section>

              <section id="settings" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Settings</p>
                <h3 className="mt-2 text-2xl font-semibold">Reporting preferences</h3>
                <div className="mt-5 space-y-3">
                  {settingsOptions.map((option, index) => (
                    <label key={option} className="flex items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-[#081725] px-4 py-3 text-sm text-slate-200">
                      <span>{option}</span>
                      <input
                        type="checkbox"
                        defaultChecked={index !== settingsOptions.length - 1}
                        className="h-4 w-4 accent-sky-400"
                      />
                    </label>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
