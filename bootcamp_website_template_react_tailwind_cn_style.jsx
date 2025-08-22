import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  PlayCircle,
  Users,
  Star,
  Trophy,
  ChevronRight,
  Menu,
  X,
  Cpu,
  Laptop,
  Rocket,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/**
 * Bootcamp Website Template (React + Tailwind)
 * ---------------------------------------------------------------------------
 * A production-quality, single-file React app that mimics the *structure* and
 * UX patterns of popular coding bootcamp sites (hero, course catalog, outcomes,
 * testimonials, placements, etc.) without copying brand assets.
 *
 * How to use in a real project
 * - Create a Vite app: `npm create vite@latest bootcamp -- --template react`
 * - `cd bootcamp && npm i && npm i framer-motion lucide-react`
 * - Install Tailwind (per tailwindcss.com/docs/guides/vite) and paste this file
 *   as `src/App.jsx`.
 * - Start dev server: `npm run dev`
 */

// ---------- Shared UI primitives ----------
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle, center }) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    {eyebrow && (
      <p className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className={`mt-3 text-base text-muted-foreground ${center ? "mx-auto max-w-2xl" : ""}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

// ---------- Data ----------
const CATEGORIES = [
  { name: "Web Development", icon: <Laptop className="h-4 w-4" /> },
  { name: "Data Structures", icon: <Code2 className="h-4 w-4" /> },
  { name: "Machine Learning", icon: <Cpu className="h-4 w-4" /> },
  { name: "System Design", icon: <Rocket className="h-4 w-4" /> },
];

const COURSES = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms in Python",
    level: "Beginner to Advanced",
    duration: "16 weeks",
    lessons: 120,
    rating: 4.8,
    students: 12400,
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    tags: ["Python", "DSA", "Problem Solving"],
  },
  {
    id: "web",
    title: "Full-Stack Web with React & Node",
    level: "Beginner to Intermediate",
    duration: "20 weeks",
    lessons: 160,
    rating: 4.9,
    students: 17820,
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    tags: ["React", "Node", "MongoDB"],
  },
  {
    id: "ml",
    title: "Machine Learning & MLOps",
    level: "Intermediate",
    duration: "18 weeks",
    lessons: 140,
    rating: 4.7,
    students: 9800,
    thumbnail:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    tags: ["ML", "MLOps", "Scikit-learn"],
  },
  {
    id: "sd",
    title: "System Design for Interviews",
    level: "Advanced",
    duration: "8 weeks",
    lessons: 40,
    rating: 4.6,
    students: 6120,
    thumbnail:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop",
    tags: ["Design", "Scalability", "Microservices"],
  },
];

const TESTIMONIALS = [
  {
    name: "Aarav Mehta",
    role: "SDE @ FinTechCo",
    quote:
      "The structured path and mock interviews helped me crack my first SDE role.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Diya Nair",
    role: "Data Scientist @ HealthAI",
    quote:
      "Project reviews and mentorship made the difference for me.",
    avatar: "https://i.pravatar.cc/100?img=36",
  },
  {
    name: "Rohit Sharma",
    role: "Full‑Stack Dev @ SaaSly",
    quote: "Loved the hands‑on assignments and career support!",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
];

const COMPANIES = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_with_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
];

// ---------- Components ----------
const Navbar = ({ onNavigate, current }) => {
  const [open, setOpen] = useState(false);
  const nav = (
    <div className="flex flex-col gap-2 py-4 lg:flex-row lg:items-center lg:gap-6 lg:py-0">
      {[
        ["Home", "home"],
        ["Courses", "courses"],
        ["Placements", "placements"],
        ["Resources", "resources"],
        ["About", "about"],
        ["Contact", "contact"],
      ].map(([label, key]) => (
        <button
          key={key}
          onClick={() => {
            onNavigate(key);
            setOpen(false);
          }}
          className={`text-sm font-medium transition hover:text-primary ${
            current === key ? "text-primary" : "text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
      <button
        onClick={() => onNavigate("login")}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        <GraduationCap className="h-4 w-4" />
        Enroll
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="font-extrabold tracking-tight">Code Ninjas‑style Bootcamp</div>
        </div>
        <nav className="hidden lg:block">{nav}</nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>
      {open && <div className="border-t bg-background lg:hidden"> <Container>{nav}</Container> </div>}
    </header>
  );
};

const Hero = ({ onNavigate }) => (
  <div className="relative overflow-hidden">
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent"
      aria-hidden
    />
    <Container className="grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Pill>
          <Trophy className="h-4 w-4" /> Outcome‑focused learning
        </Pill>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Learn to code. Build projects. <span className="text-primary">Get hired.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Master DSA, full‑stack development, and system design with mentor support,
          structured paths, and real interview practice.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate("courses")}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Explore Courses <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => onNavigate("resources")}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-accent"
          >
            Watch a Demo <PlayCircle className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Pill><BadgeCheck className="h-4 w-4" /> Job‑ready curriculum</Pill>
          <Pill><Users className="h-4 w-4" /> Mentors & community</Pill>
          <Pill><Star className="h-4 w-4" /> 4.8+ learner rating</Pill>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
          alt="Learning"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute -bottom-5 -left-5 rounded-2xl bg-background/90 p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-2"><GraduationCap className="h-5 w-5 text-primary"/></div>
            <div>
              <div className="text-sm font-semibold">120K+ learners</div>
              <div className="text-xs text-muted-foreground">from 30+ countries</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  </div>
);

const CourseCard = ({ c, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm"
  >
    <div className="relative">
      <img src={c.thumbnail} alt={c.title} className="h-48 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute bottom-3 left-3 flex gap-2">
        {c.tags.map((t) => (
          <span key={t} className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold">{t}</span>
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold">{c.title}</h3>
        <span className="text-xs text-muted-foreground">{c.level}</span>
      </div>
      <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{c.duration}</span>
        <span>•</span>
        <span>{c.lessons} lessons</span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <Star className="h-4 w-4 fill-yellow-400" /> {c.rating}
        <span className="text-xs text-muted-foreground">({c.students.toLocaleString()} learners)</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button onClick={() => onOpen(c)} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          View curriculum <ChevronRight className="h-4 w-4" />
        </button>
        <button className="rounded-full border px-4 py-2 text-sm font-semibold hover:bg-accent">Try demo</button>
      </div>
    </div>
  </motion.div>
);

const Courses = ({ onOpen }) => (
  <Container className="py-16">
    <SectionTitle
      eyebrow="Programs"
      title="Choose your learning path"
      subtitle="Curated, mentor‑led programs designed to take you from fundamentals to job‑ready."
      center
    />
    <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
      {CATEGORIES.map((c) => (
        <Pill key={c.name}>
          {c.icon}
          {c.name}
        </Pill>
      ))}
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {COURSES.map((c) => (
        <CourseCard key={c.id} c={c} onOpen={onOpen} />
      ))}
    </div>
  </Container>
);

const Outcomes = () => (
  <div className="border-y bg-muted/30">
    <Container className="py-16">
      <SectionTitle
        eyebrow="Placements"
        title="Learners placed at top companies"
        subtitle="Our career support includes resume reviews, mock interviews, and referral network."
        center
      />
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
        {COMPANIES.map((src, i) => (
          <img key={i} src={src} className="h-8 object-contain" alt="Company" />
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Avg. CTC for top 20%", value: "₹18.2 LPA" },
          { label: "Hiring partners", value: "650+" },
          { label: "Offer conversion", value: "84%" },
          { label: "Mock interviews", value: "2,400+/mo" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-6 text-center shadow-sm">
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

const TestimonialCard = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35 }}
    className="rounded-2xl border bg-card p-6 shadow-sm"
  >
    <div className="flex items-center gap-3">
      <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
      <div>
        <div className="text-sm font-semibold">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
    <p className="mt-3 text-sm">“{t.quote}”</p>
  </motion.div>
);

const Testimonials = () => (
  <Container className="py-16">
    <SectionTitle
      eyebrow="Success stories"
      title="Real outcomes from real learners"
      subtitle="From first internships to senior roles, our alumni community is thriving."
      center
    />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </Container>
);

const CTA = ({ onNavigate }) => (
  <Container className="py-16">
    <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 to-transparent p-8 shadow-sm md:p-12">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-20 md:block" />
      <div className="relative max-w-xl">
        <h3 className="text-2xl font-extrabold">Ready to start your journey?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Join thousands of learners leveling up their careers with mentor‑led, project‑based courses.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={() => onNavigate("login")} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Start free trial</button>
          <button onClick={() => onNavigate("contact")} className="rounded-full border px-6 py-3 text-sm font-semibold hover:bg-accent">Talk to an advisor</button>
        </div>
      </div>
    </div>
  </Container>
);

const Footer = () => (
  <footer className="border-t">
    <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="font-extrabold tracking-tight">Bootcamp</div>
        </div>
        <p className="text-sm text-muted-foreground">
          Modern coding education focused on outcomes, mentorship, and community.
        </p>
      </div>
      <div>
        <div className="mb-3 text-sm font-bold">Programs</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>DSA</li>
          <li>Full‑Stack Web</li>
          <li>Machine Learning</li>
          <li>System Design</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 text-sm font-bold">Resources</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Blog</li>
          <li>Mock Interview Kit</li>
          <li>Roadmaps</li>
          <li>Placement Guide</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 text-sm font-bold">Contact</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@bootcamp.dev</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 98765 43210</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Bengaluru, IN</li>
        </ul>
      </div>
    </Container>
    <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Bootcamp. All rights reserved.</div>
  </footer>
);

// ---------- Simple views (to mimic routes) ----------
const Resources = () => (
  <Container className="py-16">
    <SectionTitle eyebrow="Resources" title="Free learning resources" subtitle="Practice questions, cheat‑sheets, and recorded masterclasses." center />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="rounded-2xl border p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-2"><BookOpen className="h-5 w-5 text-primary"/></div>
            <div className="font-semibold">Masterclass #{i}</div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Deep‑dive on interview topics with code walkthroughs and tips.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold hover:bg-accent">Watch now <PlayCircle className="h-4 w-4"/></button>
        </div>
      ))}
    </div>
  </Container>
);

const About = () => (
  <Container className="py-16">
    <SectionTitle eyebrow="About" title="We’re an outcome‑driven coding school" subtitle="Built by instructors and engineers, for learners worldwide." />
    <div className="grid gap-8 md:grid-cols-2">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop" className="rounded-2xl shadow" alt="Team" />
      <div className="text-sm leading-6 text-muted-foreground">
        <p>
          Our curriculum balances fundamentals with pragmatic skills. Learners build
          portfolio‑ready projects, get feedback from mentors, and practice with real
          interview questions.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-5">
          <li>Mentor hours & code reviews</li>
          <li>Interview prep & mock interviews</li>
          <li>Career services & referrals</li>
        </ul>
      </div>
    </div>
  </Container>
);

const Contact = () => (
  <Container className="py-16">
    <SectionTitle eyebrow="Contact" title="Talk to an advisor" subtitle="We’ll help you choose the right path for your goals." />
    <form className="mx-auto max-w-xl space-y-4">
      <div>
        <label className="text-xs font-semibold">Full name</label>
        <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-0 focus:border-primary" placeholder="Your name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold">Email</label>
          <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:border-primary" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-xs font-semibold">Phone</label>
          <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:border-primary" placeholder="+91" />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold">Message</label>
        <textarea className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:border-primary" rows={4} placeholder="Tell us about your goals" />
      </div>
      <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Submit</button>
    </form>
  </Container>
);

const Login = () => (
  <Container className="py-16">
    <div className="mx-auto max-w-md rounded-2xl border p-8 shadow-sm">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-extrabold">Welcome back</h3>
        <p className="text-sm text-muted-foreground">Sign in to continue learning</p>
      </div>
      <form className="space-y-3">
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Email" />
        <input className="w-full rounded-xl border px-3 py-2" placeholder="Password" type="password" />
        <button className="w-full rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground">Sign in</button>
      </form>
      <div className="mt-4 text-center text-xs text-muted-foreground">By continuing you agree to our terms.</div>
    </div>
  </Container>
);

const CurriculumModal = ({ open, onClose, course }) => {
  if (!open || !course) return null;
  const modules = useMemo(() => [
    { title: "Foundations", items: ["Language basics", "Complexity & Big‑O", "Patterns"] },
    { title: "Core", items: ["Arrays & Strings", "Stacks & Queues", "Trees & Graphs"] },
    { title: "Advanced", items: ["DP", "Greedy", "Backtracking", "System design intro"] },
  ], []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 p-4" onClick={onClose}>
      <div className="mx-auto max-w-2xl rounded-2xl bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold">{course.title}</h3>
            <div className="mt-1 text-xs text-muted-foreground">{course.level} • {course.duration} • {course.lessons} lessons</div>
          </div>
          <button onClick={onClose} className="rounded-full border p-2"><X className="h-4 w-4"/></button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="rounded-xl border p-4">
              <div className="mb-2 text-sm font-bold">{m.title}</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {m.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Enroll now</button>
          <button className="rounded-full border px-6 py-3 text-sm font-semibold hover:bg-accent">Download syllabus</button>
        </div>
      </div>
    </div>
  );
};

// ---------- App ----------
export default function App() {
  const [view, setView] = useState("home");
  const [open, setOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);

  const onOpenCourse = (c) => { setActiveCourse(c); setOpen(true); };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onNavigate={setView} current={view} />
      {view === "home" && (
        <>
          <Hero onNavigate={setView} />
          <Courses onOpen={onOpenCourse} />
          <Outcomes />
          <Testimonials />
          <CTA onNavigate={setView} />
        </>
      )}
      {view === "courses" && (
        <>
          <Courses onOpen={onOpenCourse} />
          <CTA onNavigate={setView} />
        </>
      )}
      {view === "placements" && <Outcomes />}
      {view === "resources" && <Resources />}
      {view === "about" && <About />}
      {view === "contact" && <Contact />}
      {view === "login" && <Login />}
      <Footer />
      <CurriculumModal open={open} onClose={() => setOpen(false)} course={activeCourse} />
    </div>
  );
}
