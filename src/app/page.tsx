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

const phaseOptions = ["Boarding", "Taxi", "Takeoff", "Climb", "Cruise", "Approach", "Landing"];

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f7fb_0%,#eef4ff_45%,#edf2fb_100%)] text-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6 lg:py-6">
        <div className="rounded-[36px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur xl:p-4">
          <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="rounded-[30px] bg-[linear-gradient(180deg,#081a31_0%,#0c2343_55%,#10294f_100%)] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="rounded-[26px] border border-white/10 bg-white/8 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400 text-sm font-bold text-slate-950">
                    SA
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-100/60">Skyline ACARS</p>
                    <h1 className="mt-1 text-xl font-semibold">Home Console</h1>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-200/80">
                  Refreshed homepage design with a brighter cockpit-style shell, cleaner hierarchy, and application cards that feel more premium.
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
                          ? "bg-white text-slate-950 shadow-lg shadow-black/20"
                          : "bg-white/6 text-white hover:bg-white/12"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] ${active ? "bg-slate-100 text-slate-700" : "bg-white/8 text-slate-200/70"}`}>
                        {active ? "Live" : "Open"}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-[26px] border border-white/10 bg-[#081725] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Systems</p>
                <div className="mt-4 space-y-3">
                  {[
                    ["MSFS bridge", "Connected"],
                    ["Skyline API", "Healthy"],
                    ["Dispatch stream", "Subscribed"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-3">
                      <span className="text-sm text-slate-200">{label}</span>
                      <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs text-emerald-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <section className="overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_100%)]">
              <div className="border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] px-5 py-5 lg:px-7 lg:py-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-sky-700/70">Homepage redesign</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
                      Skyline ACARS, redesigned with a cleaner flight-ops dashboard.
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base">
                      The homepage now feels more like a polished product UI: brighter layout, clearer cards, better spacing, softer surfaces, and more focus on the data pilots actually use during operations.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href="/downloads/skyline-acars-windows-package.txt"
                      download
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Download Windows package
                    </a>
                    <a
                      href="/downloads/skyline-acars-chromebook-guide.txt"
                      download
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Download Chromebook guide
                    </a>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Flight phase", phase],
                    ["Unread messages", "1"],
                    ["Last report", "00:03 ago"],
                    ["Flight health", "Nominal"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm shadow-slate-200/40">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 p-5 lg:grid-cols-[1.2fr_0.92fr] lg:p-7">
                <div className="space-y-5">
                  <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {telemetry.map((card) => (
                      <article key={card.label} className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{card.label}</p>
                        <p className="mt-3 text-2xl font-semibold text-slate-950">{card.value}</p>
                        <p className="mt-2 text-sm text-slate-500">{card.hint}</p>
                      </article>
                    ))}
                  </section>

                  <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                    <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Flight timeline</p>
                          <h3 className="mt-2 text-2xl font-semibold text-slate-950">Operational event feed</h3>
                        </div>
                        <select
                          value={phase}
                          onChange={(event) => setPhase(event.target.value)}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-950 outline-none"
                        >
                          {phaseOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-5 rounded-[22px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] p-4 text-sm leading-7 text-slate-100 shadow-lg shadow-blue-950/20">
                        Active phase: <span className="font-semibold">{phase}</span>. Automatic report logic and dispatch visibility are aligned to the current flight state.
                      </div>

                      <div className="mt-5 space-y-4">
                        {eventTimeline.map((event) => (
                          <div key={event.time} className="flex gap-4 rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                              {event.time}
                            </div>
                            <div>
                              <p className="text-base font-semibold text-slate-950">{event.title}</p>
                              <p className="mt-1 text-sm leading-6 text-slate-600">{event.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Dispatch composer</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">Pilot transmission</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Compose a quick ACARS note and simulate a send event without leaving the homepage.
                      </p>
                      <textarea
                        value={composerText}
                        onChange={(event) => setComposerText(event.target.value)}
                        className="mt-5 min-h-44 w-full rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-950 outline-none placeholder:text-slate-400"
                        placeholder="Type a message to dispatch..."
                      />
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-slate-500">{sendState}</p>
                        <button
                          type="button"
                          onClick={() =>
                            setSendState(
                              `Message queued at ${new Date().toLocaleTimeString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}`,
                            )
                          }
                          className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
                        >
                          Send message
                        </button>
                      </div>
                    </article>
                  </section>
                </div>

                <div className="space-y-5">
                  <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Inbox</p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-950">ACARS messages</h3>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
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
                                ? "border-sky-300 bg-sky-50 shadow-sm shadow-sky-100"
                                : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-slate-950">{message.subject}</p>
                              <span className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-500 shadow-sm shadow-slate-200/50">
                                {message.status}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-sky-700">{message.from}</p>
                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{message.body}</p>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section className="rounded-[28px] bg-[linear-gradient(145deg,#0f172a_0%,#1e3a8a_100%)] p-5 text-white shadow-lg shadow-blue-950/20">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-100/60">Selected message</p>
                    <h3 className="mt-2 text-2xl font-semibold">{selectedMessage.subject}</h3>
                    <p className="mt-2 text-sm text-sky-100/80">From {selectedMessage.from}</p>
                    <div className="mt-5 rounded-[24px] border border-white/10 bg-white/8 p-4 text-sm leading-7 text-slate-100">
                      {selectedMessage.body}
                    </div>
                  </section>

                  <section id="downloads" className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Downloads</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Platform assets</h3>
                    <div className="mt-5 grid gap-4">
                      {downloadFiles.map((file) => (
                        <article key={file.href} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                          <p className="text-base font-semibold text-slate-950">{file.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{file.description}</p>
                          <a
                            href={file.href}
                            download
                            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                          >
                            {file.button}
                          </a>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section id="settings" className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Settings</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Reporting preferences</h3>
                    <div className="mt-5 space-y-3">
                      {settingsOptions.map((option, index) => (
                        <label
                          key={option}
                          className="flex items-center justify-between gap-4 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                        >
                          <span>{option}</span>
                          <input
                            type="checkbox"
                            defaultChecked={index !== settingsOptions.length - 1}
                            className="h-4 w-4 accent-sky-500"
                          />
                        </label>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
