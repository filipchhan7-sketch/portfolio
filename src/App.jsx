import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

/*
  Chhan Philip's portfolio content.
  Update this object when you want to personalize the portfolio further.
*/
const portfolio = {
  name: "Chhan Philip",
  firstName: "Philip",
  headline: "Backend & full-stack developer",
  eyebrow: "Information Technology Engineering student",
  location: "Phnom Penh, Cambodia",
  status: "Open to internship opportunities",
  email: "filipchhan@gmail.com",
  phone: "(+855) 92 627 585",
  linkedin: "https://www.linkedin.com/in/chhan-philip-00a446432",
  github: "https://github.com/filipchhan7-sketch",
  resume: "/Chhan_Philip-Resume.pdf",
  summary:
    "I build secure, practical web applications with Java, Spring Boot, Laravel, React, and modern database technologies.",
  profile:
    "I’m a Year 4 Information Technology Engineering student at the Royal University of Phnom Penh and a freelance web developer. I enjoy turning real business needs into clean APIs, reliable data systems, and focused user experiences. I’m currently looking for an internship where I can contribute to an experienced engineering team, learn quickly, and ship useful software.",
  education: [
    {
      period: "Expected 2027",
      school: "Royal University of Phnom Penh",
      detail: "Bachelor’s Degree · Information Technology Engineering · Year 4",
      note: "GPA 3.5 · Phnom Penh",
    },
    {
      period: "Graduated 2025 (Short course)",
      school: "ISTAD - Frontend",
      detail: "Foundation Class",
      note: "Phnom Penh",
    },
    {
      period: "Graduated 2026 (Short course)",
      school: "ETEC - Backend",
      detail: "PHP (Laravel) and Java (Spring Boot)",
      note: "Phnom Penh",
    }
  ],
  experience: [
    {
      period: "August 2026 — Present",
      company: "Freelance",
      role: "Web Developer",
      points: [
        "Engineered backend solutions for enterprise business intelligence systems across diverse sectors using Java and Spring Boot.",
        "Architected scalable server-side logic and PostgreSQL database structures for production environments.",
        "Integrated Spring Security with JWT for secure, stateless authentication and role-based access control.",
        "Designed and documented RESTful API endpoints with OpenAPI/Swagger for frontend teams and external clients.",
      ],
    },
  ],
  skills: [
    { group: "Programming", items: "Java, PHP, Python, C, C++" },
    { group: "Frameworks", items: "Spring Boot, Laravel, React.js, Flutter, Next.js" },
    { group: "Web", items: "HTML, CSS, JavaScript, TypeScript, Bootstrap 5, Tailwind" },
    { group: "Databases", items: "MySQL, PostgreSQL, MongoDB" },
    { group: "Version control", items: "Git, GitHub, GitLab" },
    { group: "API & security", items: "REST API, JWT, OAuth2 Authentication" },
    { group: "Tools", items: "VS Code, Jupyter Notebook, Eclipse, IntelliJ IDEA" },
    { group: "AI coding", items: "Claude Code, Antigravity, Cursor, GitHub Copilot" },
  ],
  projects: [
    {
      year: "2026",
      title: "Plant Lab Laboratory",
      type: "Full-stack internal lab system",
      stack: "Laravel · React.js · MySQL",
      description:
        "A full-stack CRUD system for managing and digitising plant laboratory records, with a focus on dependable data access and straightforward workflows.",
      highlights: [
        "Built REST APIs backed by MySQL",
        "Added JWT authentication and role-based access",
        "Implemented search and filtering for records",
      ],
      github: "https://github.com/filipchhan7-sketch/Plant_Lap_Labotory.git",
      accent: "lime",
    },
    {
      year: "2025",
      title: "Royal Elegance",
      type: "Hotel booking website",
      stack: "Next.js · PostgreSQL · Stripe",
      description:
        "A responsive, multi-page hotel booking experience taken from wireframe to production with reusable components and integrated payments.",
      highlights: [
        "Created reusable Next.js components and dynamic routing",
        "Connected Supabase APIs and PostgreSQL data",
        "Integrated Stripe payment flows",
      ],
      github: "https://github.com/filipchhan7-sketch/Royal_Elegance.git",
      accent: "violet",
    },
    {
      year: "2026",
      title: "Hospital Appointment Management",
      type: "Full-stack appointment system",
      stack: "Next.js · React.js · TypeScript · Spring Boot · PostgreSQL",
      description:
        "A full-stack CRUD system for managing hospital appointments, with a focus on dependable data access and straightforward workflows.",
      highlights: [
        "Built REST APIs backed by PostgreSQL",
        "Added JWT authentication and role-based access",
        "Implemented search and filtering for appointments",
      ],
      github: "https://github.com/filipchhan7-sketch/Hospital_Appointment_Management.git",
      accent: "violet",
    }
  ],
};

const pages = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
];

function SectionLabel({ children, light = false }) {
  return (
    <div className={`mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-lime" : "text-ink/45"}`}>
      <span className={`h-2 w-2 rounded-full ${light ? "bg-lime" : "bg-ink"}`} />
      {children}
    </div>
  );
}

function PageTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-16 max-w-4xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.08em] md:text-8xl">
        {title}
      </h1>
      {description && <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/55">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const isLime = project.accent === "lime";
  return (
    <article className={`group overflow-hidden rounded-[2rem] p-6 md:p-10 ${isLime ? "bg-lime" : "bg-[#c9b8ff]"}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-55">{project.year} · {project.type}</p>
          <h2 className="mt-16 font-display text-5xl font-medium tracking-[-0.08em] md:text-8xl">{project.title}</h2>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} on GitHub`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition group-hover:rotate-45"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="mt-16 grid gap-8 border-t border-ink/20 pt-6 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold">{project.stack}</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-70">{project.description}</p>
        </div>
        <ul className="space-y-3 text-sm">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 border-b border-ink/15 pb-3">
              <Check size={16} className="mt-0.5 shrink-0" /> {highlight}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => onOpen("contact")} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 hover:gap-4">
        Discuss a similar project <ArrowUpRight size={16} />
      </button>
    </article>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-ink px-5 pb-20 pt-24 text-paper md:px-10 md:pt-32">
        <div className="pointer-events-none absolute right-[-8rem] top-[-4rem] h-[35rem] w-[35rem] rounded-full bg-lime/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-end gap-16 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-paper/15 px-4 py-2 text-xs text-paper/65">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
              {portfolio.status}
            </div>
            <p className="mb-6 text-sm uppercase tracking-[0.18em] text-paper/50">{portfolio.eyebrow}</p>
            <h1 className="max-w-5xl font-display text-[clamp(3.7rem,10vw,9.6rem)] font-medium leading-[0.85] tracking-[-0.085em]">
              Building useful
              <br />
              <span className="text-lime">things well.</span>
            </h1>
            <div className="mt-12 flex max-w-xl items-start gap-4 text-base leading-relaxed text-paper/60 md:ml-[17%]">
              <ArrowDownRight className="mt-1 shrink-0 text-lime" size={22} />
              <p>{portfolio.summary}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 md:ml-[17%]">
              <button onClick={() => navigate("projects")} className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white">
                See my projects <ArrowUpRight size={16} />
              </button>
              <button onClick={() => navigate("contact")} className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 text-sm font-semibold text-paper transition hover:border-lime hover:text-lime">
                Get in touch
              </button>
            </div>
          </div>
          <div className="relative hidden aspect-square rounded-[2rem] border border-paper/15 bg-[#1a1a17] p-5 lg:block">
            <div className="flex h-full flex-col justify-between rounded-[1.3rem] border border-paper/10 p-5">
              <div className="flex justify-between text-xs text-paper/45">
                <span>PORTFOLIO / INTERN</span>
                <Sparkles size={15} className="text-lime" />
              </div>
              <div>
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-lime text-4xl text-ink">✳</div>
                <p className="font-display text-2xl leading-tight">Curious mind.<br /><span className="text-lime">Practical builder.</span></p>
              </div>
              <div className="flex items-end justify-between text-xs text-paper/45">
                <span>{portfolio.location}</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div><SectionLabel>What I’m looking for</SectionLabel></div>
          <div>
            <h2 className="max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.06em] md:text-6xl">
              An internship where I can learn from strong engineers and contribute to software that matters.
            </h2>
            <button onClick={() => navigate("about")} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 hover:gap-4">
              More about my background <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage({ navigate }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageTitle
          eyebrow="Selected projects"
          title={<>A practical portfolio<br /><span className="text-ink/35">of things I’ve built.</span></>}
          description="These projects show how I approach backend architecture, data, authentication, APIs, and complete product experiences."
        />
        <div className="space-y-10">
          {portfolio.projects.map((project) => <ProjectCard key={project.title} project={project} onOpen={navigate} />)}
        </div>
        <div className="mt-12 rounded-3xl border border-ink/15 p-6 text-sm text-ink/55 md:p-8">
          More code and experiments are available on <a className="font-semibold text-ink underline underline-offset-4" href={portfolio.github} target="_blank" rel="noreferrer">GitHub <ExternalLink className="inline" size={13} /></a>.
        </div>
      </div>
    </section>
  );
}

function AboutPage({ navigate }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageTitle eyebrow="About me" title={<>Curious about systems,<br /><span className="text-ink/35">serious about details.</span></>} />
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-28">
          <div>
            <p className="text-2xl leading-tight tracking-[-0.04em] md:text-4xl">{portfolio.profile}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-ink px-4 py-2 text-xs text-paper">Year 4 student</span>
              <span className="rounded-full bg-lime px-4 py-2 text-xs">GPA 3.5</span>
              <span className="rounded-full border border-ink/20 px-4 py-2 text-xs">Phnom Penh</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-ink p-7 text-paper md:p-10">
            <SectionLabel light>Technical toolkit</SectionLabel>
            <div className="space-y-5">
              {portfolio.skills.map((skill) => (
                <div key={skill.group} className="border-b border-paper/10 pb-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.13em] text-lime">{skill.group}</p>
                  <p className="text-sm text-paper/70">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-28 grid gap-12 border-t border-ink/15 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><SectionLabel>Education</SectionLabel></div>
          <div className="border-t border-ink/15">
            {portfolio.education.map((item) => (
              <div key={item.school} className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[150px_1fr]">
                <p className="text-xs uppercase tracking-[0.13em] text-ink/45">{item.period}</p>
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.04em]">{item.school}</h3>
                  <p className="mt-2 text-sm text-ink/60">{item.detail}</p>
                  <p className="mt-1 text-xs text-ink/40">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => navigate("contact")} className="mt-12 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-lime hover:text-ink">
          Let’s work together <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

function ResumePage({ navigate }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageTitle eyebrow="Experience & education" title={<>A foundation to<br /><span className="text-ink/35">build on.</span></>} description="I’m early in my career, with hands-on freelance experience and a strong interest in backend engineering and full-stack product development." />
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <a href={portfolio.resume} download className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-lime hover:text-ink">
              Download CV <Download size={16} />
            </a>
            <div className="mt-10 rounded-3xl bg-lime p-6 text-sm">
              <p className="font-semibold">Internship focus</p>
              <p className="mt-3 leading-relaxed text-ink/65">Backend development, full-stack web applications, REST APIs, databases, authentication, and software engineering teamwork.</p>
            </div>
          </div>
          <div className="border-t border-ink/15">
            {portfolio.experience.map((item) => (
              <div key={item.company} className="border-b border-ink/15 py-8">
                <div className="flex flex-wrap justify-between gap-3">
                  <h2 className="font-display text-3xl tracking-[-0.05em]">{item.role}</h2>
                  <p className="text-xs uppercase tracking-[0.13em] text-ink/45">{item.period}</p>
                </div>
                <p className="mt-2 text-sm font-semibold text-ink/60">{item.company}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/60">
                  {item.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 grid gap-12 border-t border-ink/15 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><SectionLabel>Education</SectionLabel></div>
          <div className="border-t border-ink/15">
            {portfolio.education.map((item) => (
              <div key={item.school} className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[150px_1fr]">
                <p className="text-xs uppercase tracking-[0.13em] text-ink/45">{item.period}</p>
                <div><h3 className="font-display text-2xl tracking-[-0.04em]">{item.school}</h3><p className="mt-2 text-sm text-ink/60">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => navigate("contact")} className="mt-12 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Contact me <ArrowUpRight size={16} /></button>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="bg-lime px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <PageTitle eyebrow="Contact" title={<>Let’s make<br /><span className="text-ink/40">something useful.</span></>} description="I’m currently open to internship opportunities in Phnom Penh and remote collaborations. The best way to reach me is by email." />
        <div className="grid gap-10 md:grid-cols-3">
          <a href={`mailto:${portfolio.email}`} className="rounded-3xl bg-ink p-6 text-paper transition hover:-translate-y-1">
            <Mail className="mb-12 text-lime" size={22} />
            <p className="text-xs uppercase tracking-[0.15em] text-paper/45">Email</p>
            <p className="mt-2 break-all text-lg">{portfolio.email}</p>
          </a>
          <a href={`tel:${portfolio.phone.replace(/\s/g, "")}`} className="rounded-3xl bg-ink p-6 text-paper transition hover:-translate-y-1">
            <Phone className="mb-12 text-lime" size={22} />
            <p className="text-xs uppercase tracking-[0.15em] text-paper/45">Phone</p>
            <p className="mt-2 text-lg">{portfolio.phone}</p>
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="rounded-3xl bg-ink p-6 text-paper transition hover:-translate-y-1">
            <Linkedin className="mb-12 text-lime" size={22} />
            <p className="text-xs uppercase tracking-[0.15em] text-paper/45">LinkedIn</p>
            <p className="mt-2 text-lg">Connect with me <ArrowUpRight className="inline" size={17} /></p>
          </a>
        </div>
        <div className="mt-20 border-t border-ink/20 pt-6 text-xs text-ink/55">Thanks for taking the time to visit.</div>
      </div>
    </section>
  );
}

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    return [...pages.map((page) => page.id), "contact"].includes(hash) ? hash : "home";
  };
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.history.pushState({}, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (activePage === "projects") return <ProjectsPage navigate={navigate} />;
    if (activePage === "about") return <AboutPage navigate={navigate} />;
    if (activePage === "resume") return <ResumePage navigate={navigate} />;
    if (activePage === "contact") return <ContactPage />;
    return <HomePage navigate={navigate} />;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-lime selection:text-ink">
      <nav className="sticky top-0 z-50 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/95 px-5 py-3 text-paper shadow-soft backdrop-blur-xl">
          <button onClick={() => navigate("home")} className="font-display text-lg font-bold tracking-[-0.06em]">
            {portfolio.firstName}<span className="text-lime">.</span>
          </button>
          <div className="hidden items-center gap-1 rounded-full bg-white/5 p-1 md:flex">
            {pages.map((page) => (
              <button key={page.id} onClick={() => navigate(page.id)} className={`rounded-full px-4 py-2 text-sm transition ${activePage === page.id ? "bg-lime font-semibold text-ink" : "text-paper/60 hover:text-paper"}`}>
                {page.label}
              </button>
            ))}
          </div>
          <button onClick={() => navigate("contact")} className="hidden items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white md:flex">
            Contact <ArrowUpRight size={15} />
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-5 mt-2 rounded-3xl border border-white/10 bg-ink p-5 text-paper shadow-soft md:hidden">
            <div className="flex flex-col gap-2">
              {pages.map((page) => <button key={page.id} onClick={() => navigate(page.id)} className={`rounded-2xl px-4 py-3 text-left text-lg ${activePage === page.id ? "bg-lime text-ink" : "text-paper"}`}>{page.label}</button>)}
              <button onClick={() => navigate("contact")} className="rounded-2xl px-4 py-3 text-left text-lg text-lime">Contact ↗</button>
            </div>
          </div>
        )}
      </nav>
      {renderPage()}
      {activePage !== "contact" && (
        <footer className="bg-ink px-5 py-8 text-paper md:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-xs text-paper/45 md:flex-row">
            <span>© {new Date().getFullYear()} {portfolio.name} · {portfolio.location}</span>
            <div className="flex gap-5">
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="hover:text-lime">GitHub</a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="hover:text-lime">LinkedIn</a>
              <button onClick={() => navigate("contact")} className="hover:text-lime">Contact</button>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}

export default App;