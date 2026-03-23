"use client";

import { useMemo, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "flight", label: "Flight Deck" },
  { id: "messages", label: "Dispatch" },
  { id: "downloads", label: "Downloads" },
  { id: "settings", label: "Settings" },
] as const;

const telemetry = [
  { label: "Callsign", value: "SKY204", hint: "ESSA → EGLL" },
  { label: "Altitude", value: "FL360", hint: "Cruise lock" },
  { label: "Ground speed", value: "451 kt", hint: "Stable profile" },
  { label: "Fuel remaining", value: "6.4 t", hint: "ETA 01:12" },
  { label: "Wind", value: "264° / 42 kt", hint: "Favourable tailwind" },
  { label: "ACARS sync", value: "Online", hint: "3 seconds ago" },
];

const eventTimeline = [
  { time: "09:12", title: "Pushback complete", detail: "Desktop bridge connected and ACARS session opened." },
  { time: "09:26", title: "Takeoff event sent", detail: "Automatic departure message forwarded to Skyline operations." },
  { time: "10:04", title: "Cruise stabilized", detail: "Position reporting interval adjusted to 60 seconds." },
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
    title: "Windows desktop package notes",
    description: "Repository package notes for the native Skyline ACARS Windows client and SimConnect bridge.",
    href: "/downloads/skyline-acars-windows-package.txt",
    button: "Download Windows package notes",
  },
  {
    title: "Chromebook companion guide",
    description: "Guide for the ChromeOS companion workflow used for monitoring and dispatch access.",
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

const desktopHighlights = [
  "Desktop project scaffold for a native Windows ACARS client",
  "SimConnect service abstraction ready for the Microsoft Flight Simulator SDK",
  "Polling loop that maps simulator telemetry into ACARS flight state",
  "Repository docs for building the EXE on a Windows machine with .NET and SimConnect installed",
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
    <main className="min-h-screen bg-[#060606] text-[#f5efe4]">
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6 lg:py-6">
        <div className="rounded-[38px] border border-[#8f6b2f]/30 bg-[radial-gradient(circle_at_top,rgba(210,167,78,0.12),transparent_22%),linear-gradient(180deg,#131313_0%,#090909_100%)] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.55)]">
          <div className="grid gap-4 xl:grid-cols-[290px_minmax(0,1fr)]">
            <aside className="rounded-[32px] border border-[#8f6b2f]/20 bg-[linear-gradient(180deg,#181818_0%,#0b0b0b_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="rounded-[28px] border border-[#8f6b2f]/20 bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(255,255,255,0.02))] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8a15a] text-sm font-bold text-black">
                    SA
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[#c8a15a]/80">Skyline ACARS</p>
                    <h1 className="mt-1 text-xl font-semibold text-[#f8f3ea]">Grand Tourer UI</h1>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#d9cfbf]/78">
                  A luxury-inspired homepage treatment with darker materials, warm metallic accents, and a calmer high-end cockpit aesthetic.
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
                          ? "bg-[#f2e7d0] text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                          : "bg-white/[0.03] text-[#e7dccb] hover:bg-white/[0.06]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] ${active ? "bg-black/8 text-black/70" : "bg-[#c8a15a]/12 text-[#d7b87a]"}`}>
                        {active ? "Live" : "Open"}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-[28px] border border-[#8f6b2f]/15 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-[#9f8f72]">Systems</p>
                <div className="mt-4 space-y-3">
                  {[
                    ["MSFS bridge", "Connected"],
                    ["Skyline API", "Healthy"],
                    ["Dispatch stream", "Subscribed"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-3">
                      <span className="text-sm text-[#ede3d1]">{label}</span>
                      <span className="rounded-full bg-emerald-400/12 px-2.5 py-1 text-xs text-emerald-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <section className="overflow-hidden rounded-[32px] border border-[#8f6b2f]/20 bg-[linear-gradient(180deg,#111111_0%,#090909_100%)]">
              <div className="border-b border-[#8f6b2f]/18 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_32%),linear-gradient(180deg,#161616_0%,#111111_100%)] px-5 py-6 lg:px-8 lg:py-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#c8a15a]/80">Luxury homepage redesign</p>
                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#fbf6ee] lg:text-6xl">
                      The Skyline ACARS experience, styled like a flagship automotive cockpit.
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#d7ccb9] lg:text-base">
                      Dark lacquer surfaces, champagne-gold accents, quieter spacing, and more deliberate typography turn the homepage into a premium control room without removing the operational application feel.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href="/downloads/skyline-acars-windows-package.txt"
                      download
                      className="inline-flex items-center justify-center rounded-2xl bg-[#c8a15a] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d7b87a]"
                    >
                      Windows package notes
                    </a>
                    <a
                      href="/downloads/skyline-acars-chromebook-guide.txt"
                      download
                      className="inline-flex items-center justify-center rounded-2xl border border-[#8f6b2f]/30 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#f4ede0] transition hover:bg-white/[0.06]"
                    >
                      Chromebook guide
                    </a>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Flight phase", phase],
                    ["Unread messages", "1"],
                    ["Last report", "00:03 ago"],
                    ["Flight health", "Nominal"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-[#8f6b2f]/18 bg-white/[0.03] p-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#a39172]">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-[#f7f1e6]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 p-5 lg:grid-cols-[1.18fr_0.92fr] lg:p-8">
                <div className="space-y-5">
                  <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {telemetry.map((card) => (
                      <article key={card.label} className="rounded-[26px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#181818_0%,#111111_100%)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#9d8d72]">{card.label}</p>
                        <p className="mt-3 text-2xl font-semibold text-[#f7f1e6]">{card.value}</p>
                        <p className="mt-2 text-sm text-[#c8bcaa]">{card.hint}</p>
                      </article>
                    ))}
                  </section>

                  <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                    <article className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Flight timeline</p>
                          <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">Operational event feed</h3>
                        </div>
                        <select
                          value={phase}
                          onChange={(event) => setPhase(event.target.value)}
                          className="rounded-2xl border border-[#8f6b2f]/25 bg-black/35 px-4 py-2.5 text-sm text-[#f7f1e6] outline-none"
                        >
                          {phaseOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mt-5 rounded-[24px] bg-[linear-gradient(135deg,#24180a_0%,#9f7430_100%)] p-4 text-sm leading-7 text-[#fff8ec] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                        Active phase: <span className="font-semibold">{phase}</span>. Automatic report logic and dispatch visibility are aligned to the current flight state.
                      </div>

                      <div className="mt-5 space-y-4">
                        {eventTimeline.map((event) => (
                          <div key={event.time} className="flex gap-4 rounded-[22px] border border-[#8f6b2f]/14 bg-black/20 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f1e5cd] text-sm font-semibold text-black">
                              {event.time}
                            </div>
                            <div>
                              <p className="text-base font-semibold text-[#faf4eb]">{event.title}</p>
                              <p className="mt-1 text-sm leading-6 text-[#cfc1ab]">{event.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                      <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Dispatch composer</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">Pilot transmission</h3>
                      <p className="mt-3 text-sm leading-6 text-[#cfc1ab]">
                        Compose a quick ACARS note and simulate a send event without leaving the homepage.
                      </p>
                      <textarea
                        value={composerText}
                        onChange={(event) => setComposerText(event.target.value)}
                        className="mt-5 min-h-44 w-full rounded-[24px] border border-[#8f6b2f]/18 bg-black/20 px-4 py-4 text-sm leading-6 text-[#f7f1e6] outline-none placeholder:text-[#8f816e]"
                        placeholder="Type a message to dispatch..."
                      />
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-[#b7a88f]">{sendState}</p>
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
                          className="rounded-2xl bg-[#c8a15a] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d7b87a]"
                        >
                          Send message
                        </button>
                      </div>
                    </article>
                  </section>

                  <section className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                    <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Desktop bridge</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">Native SimConnect-ready project included in the repository</h3>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {desktopHighlights.map((item) => (
                        <div key={item} className="rounded-[22px] border border-[#8f6b2f]/14 bg-black/18 p-4 text-sm leading-6 text-[#d7ccb9]">
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-6 text-[#bfae95]">
                      Real SimConnect runtime support requires the Microsoft Flight Simulator SimConnect SDK and a Windows build environment. This repository now includes the desktop code structure for that workflow.
                    </p>
                  </section>
                </div>

                <div className="space-y-5">
                  <section className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Inbox</p>
                        <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">ACARS messages</h3>
                      </div>
                      <span className="rounded-full border border-[#8f6b2f]/20 bg-white/[0.03] px-3 py-1 text-xs text-[#b7a88f]">
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
                                ? "border-[#c8a15a]/40 bg-[#c8a15a]/10 shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
                                : "border-[#8f6b2f]/14 bg-black/18 hover:bg-black/24"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-[#faf4eb]">{message.subject}</p>
                              <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-[#b7a88f]">
                                {message.status}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-[#d7b87a]">{message.from}</p>
                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#cfc1ab]">{message.body}</p>
                          </button>
                        );
                      })}
                    </div>
                  </section>

                  <section className="rounded-[30px] bg-[linear-gradient(145deg,#1a1208_0%,#83602a_100%)] p-5 text-[#fff8ec] shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <p className="text-xs uppercase tracking-[0.34em] text-[#f3d59e]/65">Selected message</p>
                    <h3 className="mt-2 text-2xl font-semibold">{selectedMessage.subject}</h3>
                    <p className="mt-2 text-sm text-[#ffebc2]/78">From {selectedMessage.from}</p>
                    <div className="mt-5 rounded-[24px] border border-white/10 bg-black/15 p-4 text-sm leading-7 text-[#fff8ec]">
                      {selectedMessage.body}
                    </div>
                  </section>

                  <section id="downloads" className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                    <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Downloads</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">Repository assets</h3>
                    <div className="mt-5 grid gap-4">
                      {downloadFiles.map((file) => (
                        <article key={file.href} className="rounded-[22px] border border-[#8f6b2f]/14 bg-black/18 p-4">
                          <p className="text-base font-semibold text-[#faf4eb]">{file.title}</p>
                          <p className="mt-2 text-sm leading-6 text-[#cfc1ab]">{file.description}</p>
                          <a
                            href={file.href}
                            download
                            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-[#c8a15a] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#d7b87a]"
                          >
                            {file.button}
                          </a>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section id="settings" className="rounded-[30px] border border-[#8f6b2f]/18 bg-[linear-gradient(180deg,#151515_0%,#101010_100%)] p-5">
                    <p className="text-xs uppercase tracking-[0.34em] text-[#9d8d72]">Settings</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#faf4eb]">Reporting preferences</h3>
                    <div className="mt-5 space-y-3">
                      {settingsOptions.map((option, index) => (
                        <label
                          key={option}
                          className="flex items-center justify-between gap-4 rounded-[20px] border border-[#8f6b2f]/14 bg-black/18 px-4 py-3 text-sm text-[#d7ccb9]"
                        >
                          <span>{option}</span>
                          <input
                            type="checkbox"
                            defaultChecked={index !== settingsOptions.length - 1}
                            className="h-4 w-4 accent-[#c8a15a]"
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
