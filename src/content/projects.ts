export type Project = {
  slug: "atlas" | "granitos" | "visol-timesheet";
  number: string;
  title: string;
  category: string;
  context: string;
  summary: string;
  cardLine: string;
  signal: string;
  signalLabel: string;
  role: string;
  problem: string;
  approach: string[];
  outcome: string;
  learning: string;
  workflow: [string, string, string];
  methods: string[];
  impactNote?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "atlas",
    number: "01",
    title: "ATLaS",
    category: "AI engineering · Master's thesis at DEUS",
    context: "HR knowledge, made usable",
    summary:
      "An LLM-powered platform that turns scattered talent documents into consistent profiles and evidence-grounded search.",
    cardLine: "From unstructured documents to useful, grounded answers.",
    signal: "62–77%",
    signalLabel: "less manual turnaround effort in evaluation",
    role:
      "I designed and developed ATLaS during my AI Engineer internship at DEUS as my master's dissertation project.",
    problem:
      "Creating client-ready talent profiles meant navigating unstructured documents, inconsistent formats, and manual review. Finding the right expertise across those documents was another slow, context-heavy task.",
    approach: [
      "Mapped the existing HR workflow and defined functional, performance, and privacy requirements before designing the platform.",
      "Built a pipeline that normalised source documents into structured JSON, used Azure OpenAI with LangGraph and validation loops to generate profiles, and rendered consistent PDFs.",
      "Designed a conversational discovery experience with lexical and semantic retrieval, rank fusion, and evidence-grounded answers.",
    ],
    outcome:
      "In an operational evaluation, ATLaS reduced manual turnaround effort by 62–77%. Generated assets received an 85–95% client-readiness rating, and the optimised generation workflow took under two minutes.",
    learning:
      "The useful part of applied AI is the whole system around the model: requirements, structured inputs, validation, evidence, and a way to judge whether the output is ready for real work.",
    workflow: ["Source documents", "Structured + validated", "Profiles + search"],
    methods: ["Azure OpenAI", "LangGraph", "Langfuse", "Flask", "Retrieval"],
    impactNote: "Figures are from the evaluation described on my LinkedIn experience profile.",
    sourceUrl: "https://www.linkedin.com/in/rodrigo-goncalves-figueiredo/details/experience/",
  },
  {
    slug: "granitos",
    number: "02",
    title: "GranitOS",
    category: "Product engineering · Operations",
    context: "An operating system for the quarry",
    summary:
      "A practical application for production, stock, hours, salaries, and day-to-day operations at Granitos de Boelhe.",
    cardLine: "A calmer way to run a complex, paper-heavy operation.",
    signal: "~3 days",
    signalLabel: "of administrative work saved each month, estimated",
    role:
      "I mapped the team's requirements and translated years of administrative routines into a working product for Granitos de Boelhe in Penafiel.",
    problem:
      "Weighing, stock, working hours, and salary calculations depended on paper and repeated manual steps. Keeping that information aligned placed a steady cognitive load on the administrative team.",
    approach: [
      "Mapped the real sequence of work with the people who use it, then organised the application around weighing, stock, hours, and salaries.",
      "Connected production records to stock movements and monthly salary views, with interfaces in European Portuguese for the team on site.",
      "Kept the important checks and corrections visible so a faster workflow would also be easier to trust.",
    ],
    outcome:
      "The business estimates that GranitOS saves roughly three days of administrative work each month. It also reduces repeated entry, human error, and the mental effort of reconciling separate records.",
    learning:
      "The strongest product decisions came from understanding the daily work first. Software helped most when it made the existing decisions easier to see and act on.",
    workflow: ["Record production", "Track stock + hours", "Review salaries"],
    methods: ["Requirements mapping", "React", "Django", "PostgreSQL", "Workflow design"],
    impactNote: "Time saved is an approximate estimate supplied by the business.",
  },
  {
    slug: "visol-timesheet",
    number: "03",
    title: "Visol Timesheet",
    category: "Product engineering · Attendance",
    context: "Working time without guesswork",
    summary:
      "An attendance and timesheet application built for Visol Proteção Solar to make working-time records easier to manage.",
    cardLine: "One clear place for time, overtime, and leave.",
    signal: "One place",
    signalLabel: "for the working-time workflow",
    role:
      "I built the application around Visol Proteção Solar's need for a clearer way to record and review working time.",
    problem:
      "The business needed a dependable way to record attendance and working hours while handling overtime, leave, and monthly reporting in the same workflow.",
    approach: [
      "Designed a calendar-led view so daily records are easy to find, enter, and review.",
      "Included role-aware controls for normal hours, overtime, and leave, with checks that make incorrect entries harder to make.",
      "Added a monthly Excel export so the information can move into the team's established administrative process.",
    ],
    outcome:
      "Visol Timesheet gives the team a single, clearer workflow for recording working time and preparing monthly information. Its impact is described qualitatively; no time-saving figure is claimed.",
    learning:
      "Everyday tools deserve the same care as headline features. Small decisions about clarity, feedback, and error prevention add up for the people using a system repeatedly.",
    workflow: ["Record the day", "Review exceptions", "Export the month"],
    methods: ["Workflow design", "JavaScript", "Firebase", "Calendar UI", "Excel export"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
