import {
  ArrowRight,
  Binary,
  Bolt,
  BookOpen,
  Boxes,
  Cpu,
  Github,
  HeartPulse,
  Radio,
  Siren,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./components/Logo";

const ecosystemTools = [
  {
    name: "Pulse",
    status: "Available now",
    version: "v0.3.6",
    accent: "#6B2FD9",
    icon: HeartPulse,
    description:
      "Load testing and chaos engineering in Go. Write scenarios as code, run them locally or in CI, and keep the feedback loop close to your service.",
    href: "https://github.com/algoryn-io/pulse",
  },
  {
    name: "Relay",
    status: "Next up",
    version: "Coming next",
    accent: "#F28C28",
    icon: Radio,
    description:
      "API gateway and observability for startup backends that need control over traffic, auth, and signals before complexity snowballs.",
    href: "https://github.com/algoryn-io/fabric",
  },
  {
    name: "Beacon",
    status: "Planned",
    version: "Roadmap",
    accent: "#FF6B6B",
    icon: Siren,
    description:
      "Alerting and on-call tooling designed to keep incidents visible without dragging small teams into heavyweight enterprise workflows.",
    href: "https://github.com/algoryn-io/fabric",
  },
  {
    name: "Deploy",
    status: "Planned",
    version: "Roadmap",
    accent: "#2D8CFF",
    icon: Bolt,
    description:
      "Frictionless deployment primitives for teams that want repeatable releases without building an internal platform too early.",
    href: "https://github.com/algoryn-io/fabric",
  },
  {
    name: "Dev",
    status: "Planned",
    version: "Roadmap",
    accent: "#22C55E",
    icon: Cpu,
    description:
      "An integrated local environment to close the gap between development, load validation, and production behavior.",
    href: "https://github.com/algoryn-io/fabric",
  },
];

const principles = [
  {
    title: "Go-native workflows",
    copy:
      "Your team already thinks in Go. Algoryn keeps infrastructure workflows in the same language, with typed code instead of fragmented YAML and opaque dashboards.",
  },
  {
    title: "Built for startup constraints",
    copy:
      "Small teams need leverage, not ceremony. Each tool is intentionally scoped so you can adopt it fast, operate it yourself, and avoid platform-team overhead.",
  },
  {
    title: "Open source from day one",
    copy:
      "Repos are public, interfaces stay inspectable, and you keep control over how these tools run inside your stack.",
  },
];

const pulseCapabilities = [
  "Write load tests as regular Go code with composable scenarios.",
  "Add chaos experiments to validate resilience before production does it for you.",
  "Run locally, in CI, or anywhere your team already executes Go binaries.",
  "Keep docs and package discovery close through GitHub and pkg.go.dev.",
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8BBEFF]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#91A4C3]">{copy}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#0D1117]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center">
            <Logo size={34} />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#9FB0CB] md:flex">
            <a href="#ecosystem" className="transition-colors hover:text-white">
              Ecosystem
            </a>
            <a href="#pulse" className="transition-colors hover:text-white">
              Pulse
            </a>
            <a href="#principles" className="transition-colors hover:text-white">
              Why Algoryn
            </a>
          </nav>
          <a
            href="https://github.com/algoryn-io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[#2D8CFF]/50 hover:bg-[#2D8CFF]/12"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,140,255,0.28),_transparent_35%),radial-gradient(circle_at_30%_30%,_rgba(107,47,217,0.24),_transparent_32%)]" />
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-32 lg:pt-40">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2D8CFF]/30 bg-[#122033] px-4 py-2 text-sm text-[#B7D4FF]">
                <Boxes className="h-4 w-4" />
                <span>Algoryn Fabric: simple tools for serious infrastructure</span>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-[-0.055em] text-white md:text-7xl">
                Infrastructure tooling for Go startups that want control without platform-team overhead.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9FB0CB] md:text-xl">
                Algoryn Fabric is an open source ecosystem of focused infrastructure tools. Pulse is
                the first release: load testing as code, for Go. Relay, Beacon, Deploy, and Dev
                follow the same principle of narrow scope and high operational leverage.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pulse"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D8CFF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5AA8FF]"
                >
                  Explore Pulse
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/algoryn-io/fabric"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <Binary className="h-4 w-4" />
                  View Fabric Repo
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="grid gap-5"
            >
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.22em] text-[#8BBEFF]">Available now</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-white">Pulse</h2>
                    <p className="mt-2 text-[#BAA6EE]">Load testing as code, for Go.</p>
                  </div>
                  <div className="rounded-full border border-[#6B2FD9]/40 bg-[#6B2FD9]/18 px-4 py-1 text-sm font-medium text-[#D6C4FF]">
                    v0.3.6
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-sm text-[#91A4C3]">Primary use</p>
                    <p className="mt-2 font-medium text-white">Load and chaos validation close to the codebase</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-sm text-[#91A4C3]">For teams</p>
                    <p className="mt-2 font-medium text-white">Shipping Go services with limited ops bandwidth</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/4 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#F2B46B]">Foundation</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">Fabric</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9FB0CB]">
                    The umbrella project for the ecosystem, currently established as `v0.1.0`.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/4 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FF8F8F]">Open source</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">Public by default</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9FB0CB]">
                    GitHub-first repos, package visibility through `pkg.go.dev`, and no dependence on a hosted control plane.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="ecosystem" className="border-t border-white/8 bg-[#0B1016] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Ecosystem"
              title="One fabric, focused tools"
              copy="Algoryn Fabric is not a monolith. It is a small set of infrastructure tools with sharp boundaries, consistent ergonomics, and a Go-first bias."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {ecosystemTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 transition hover:-translate-y-1 hover:border-white/20"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ backgroundColor: `${tool.accent}22`, color: tool.accent }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                        style={{
                          borderColor: `${tool.accent}55`,
                          color: tool.accent,
                          backgroundColor: `${tool.accent}14`,
                        }}
                      >
                        {tool.status}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold tracking-[-0.03em] text-white">{tool.name}</h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[#93A3BC]">
                      {tool.version}
                    </p>
                    <p className="mt-5 text-base leading-7 text-[#9FB0CB]">{tool.description}</p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white">
                      <span>Open details</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="pulse" className="border-t border-white/8 bg-[#0D1117] py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C7B1FF]">First release</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                Pulse ships now. The rest of the ecosystem grows around it.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#9FB0CB]">
                Pulse is the clearest expression of the Algoryn approach: infrastructure behavior
                belongs close to the code, not trapped in an external control plane. For Go teams,
                that means fewer mental context switches and faster feedback under load.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://github.com/algoryn-io/pulse"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6B2FD9] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#7B40EE]"
                >
                  <Github className="h-4 w-4" />
                  Pulse on GitHub
                </a>
                <a
                  href="https://pkg.go.dev/algoryn.io/pulse"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
                >
                  <BookOpen className="h-4 w-4" />
                  Go Package Docs
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-[#6B2FD9]/30 bg-[linear-gradient(180deg,rgba(107,47,217,0.16),rgba(107,47,217,0.05))] p-8">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-[#D6C4FF]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D6C4FF]">
                    Core capabilities
                  </p>
                </div>
                <div className="mt-6 grid gap-4">
                  {pulseCapabilities.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4 text-sm leading-7 text-[#E7E1FF]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="border-t border-white/8 bg-[#0B1016] py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Why Algoryn"
              title="Designed around how early-stage Go teams actually work"
              copy="The product philosophy is straightforward: if a startup cannot understand, adopt, and operate the tool quickly, the tool is too heavy."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[28px] border border-white/10 bg-white/4 p-7"
                >
                  <div className="h-3 w-3 rounded-full bg-[#2D8CFF] shadow-[0_0_24px_rgba(45,140,255,0.8)]" />
                  <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-white">{principle.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#9FB0CB]">{principle.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#0D1117]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <Logo size={42} />
            <p className="mt-4 max-w-md text-sm leading-7 text-[#9FB0CB]">
              Algoryn Fabric is building simple tools for serious infrastructure, starting with
              Pulse for load testing and chaos engineering in Go.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-[#9FB0CB] sm:grid-cols-2 sm:gap-x-12">
            <a href="https://github.com/algoryn-io/pulse" target="_blank" rel="noreferrer" className="transition hover:text-white">
              github.com/algoryn-io/pulse
            </a>
            <a href="https://github.com/algoryn-io/fabric" target="_blank" rel="noreferrer" className="transition hover:text-white">
              github.com/algoryn-io/fabric
            </a>
            <a href="https://pkg.go.dev/algoryn.io/pulse" target="_blank" rel="noreferrer" className="transition hover:text-white">
              pkg.go.dev/algoryn.io/pulse
            </a>
            <a href="https://github.com/algoryn-io" target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub organization
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
