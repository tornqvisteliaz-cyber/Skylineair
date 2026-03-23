const features = [
  {
    title: "Flight Data Capture",
    items: [
      "Position (lat/lon)",
      "Höjd (FL eller ft)",
      "Hastighet (IAS/TAS)",
      "Heading/track",
      "Fuel status när data finns tillgänglig",
      "Automatisk identifiering av flight phase: taxi, takeoff, cruise, approach och landing",
    ],
  },
  {
    title: "ACARS-meddelanden",
    items: [
      "Automatiska driftmeddelanden för takeoff, top-of-descent, landing och arrival",
      "Manuella pilotmeddelanden till dispatch",
      "Pushade backend-meddelanden från airline dispatch till pilot",
      "Statusmarkering för sent, delivered och received",
    ],
  },
  {
    title: "Backend Integration",
    items: [
      "Skyline backend i Node.js eller Python",
      "Databas i PostgreSQL eller MySQL",
      "REST API för klientkommunikation",
      "WebSocket-stöd för realtidsmeddelanden",
      "Full loggning av flightdata och ACARS-trafik",
    ],
  },
  {
    title: "Säkerhet & robusthet",
    items: [
      "Autentisering för alla piloter",
      "Offline-läge med lokal kö för meddelanden",
      "Auto-reconnect mot både SimConnect och backend",
      "Stöd för Windows 10/11 och Microsoft Flight Simulator 2024",
    ],
  },
];

const techStack = [
  ["MSFS Connection", "SimConnect SDK via C#/.NET eller Python-wrapper"],
  ["ACARS Client", "Desktop-app i C# WPF, Electron eller Qt/PyQt"],
  ["Backend", "Node.js eller Python FastAPI/Flask"],
  ["Databas", "PostgreSQL eller MySQL"],
  ["API", "REST JSON och WebSocket för realtid"],
  ["Deployment", "Windows 10/11 med stöd för MSFS 2024"],
  ["UI", "Desktop UI, eventuellt med web-view för snabb iteration"],
];

const flow = [
  "Pilot startar Skyline ACARS-klienten.",
  "Appen ansluter till MSFS 2024 via SimConnect.",
  "Piloten loggar in med Skyline-konto.",
  "Klienten börjar logga och skicka flightdata automatiskt.",
  "Piloten kan skicka och ta emot ACARS-meddelanden under flygningen.",
  "Dispatch ser data i backend och kan svara i realtid.",
];

const deliverables = [
  "Installerbar ACARS-klient för Windows",
  "Backend-server med REST API och realtidskanal",
  "Databasmodell för loggade flights och meddelanden",
  "Pilot-UI med tydlig status, rapportering och meddelandepanel",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 lg:px-10">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-sky-950/30 lg:p-12">
          <div className="flex flex-col gap-6 lg:max-w-4xl">
            <span className="w-fit rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-200">
              Produktkravsdokument · Microsoft Flight Simulator 2024
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white lg:text-6xl">
                Skyline ACARS PRD
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300 lg:text-lg">
                Skyline ACARS är ett pilot- och virtual airline-datalänkssystem för
                Microsoft Flight Simulator 2024. Målet är att automatisera
                rapportering av flightdata, möjliggöra tvåvägsmeddelanden mellan
                pilot och dispatch samt ge realtidsdata till Skyline-operationer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Primära flygplan</p>
                <p className="mt-2 text-xl font-semibold text-white">A320 &amp; A321</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Plattform</p>
                <p className="mt-2 text-xl font-semibold text-white">Windows 10/11</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Koppling</p>
                <p className="mt-2 text-xl font-semibold text-white">SimConnect + REST/WebSocket</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 lg:text-base">
                {feature.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h2 className="text-2xl font-semibold text-white">Teknisk stack</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm lg:text-base">
                <thead className="bg-white/5 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 font-medium">Komponent</th>
                    <th className="px-4 py-3 font-medium">Teknologi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-200">
                  {techStack.map(([component, technology]) => (
                    <tr key={component}>
                      <td className="px-4 py-3 font-medium text-white">{component}</td>
                      <td className="px-4 py-3">{technology}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Användarflöde</h2>
            <ol className="mt-4 space-y-4">
              {flow.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sm font-semibold text-sky-200">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-slate-300 lg:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
            <h2 className="text-2xl font-semibold text-white">MVP</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-emerald-50 lg:text-base">
              <li>Automatisk flightdata-logging</li>
              <li>Auto positionrapportering vid takeoff, cruise och landing</li>
              <li>Textmeddelanden mellan pilot och dispatch</li>
              <li>UI som visar flightdata och meddelanden</li>
              <li>Backend med databas och API</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6">
            <h2 className="text-2xl font-semibold text-white">Stretch goals</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-amber-50 lg:text-base">
              <li>Grafisk flight replay</li>
              <li>Push notifications för kritiska meddelanden</li>
              <li>Utökat stöd för flera flygplanstyper</li>
              <li>Export av flight logging till CSV/PDF</li>
              <li>Integration med VATSIM/IVAO</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-sky-400/20 bg-sky-400/10 p-6">
            <h2 className="text-2xl font-semibold text-white">Leverabler</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-sky-50 lg:text-base">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
