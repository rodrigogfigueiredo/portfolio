export type Project = {
  slug: "influencer-monitor" | "atlas" | "grounded" | "granitos" | "visol-timesheet";
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
    slug: "influencer-monitor",
    number: "01",
    title: "Influencer Monitor",
    category: "Computer vision · NLP · GenAI at DEUS",
    context: "Making brand presence visible",
    summary:
      "Computer vision, NLP, and generative AI pipelines that detect brands in Instagram and TikTok images and videos, and rate how likely each post is to be advertising.",
    cardLine: "From social media posts to brands, timestamps, and an ad score.",
    signal: "Images + video",
    signalLabel: "brand detection across Instagram and TikTok",
    role:
      "I’ve worked as a GenAI Engineer at DEUS on Influencer Monitor since September 2026, developing logo detection and brand identification, and the new model behind its ad classifier.",
    problem:
      "Analysing brand presence in social media means finding logos, branded products, and wordmarks in varied images and videos, then identifying the brand and where and when it appears. Reviewers also need to find posts that look like advertising, across many European languages, whether or not the creator discloses it.",
    approach: [
      "Build Python pipelines that combine OWLv2 object detection with multimodal models through Azure OpenAI to locate and identify brand appearances.",
      "Develop asynchronous GPU batch inference on Azure Machine Learning, with video frame sampling and scene detection to produce bounding boxes and timestamps.",
      "Create evaluation datasets and tooling to investigate missed brands and guide model and prompt improvements. Integrate Microsoft Foundry, Blob Storage, Service Bus, and Azure identity-based authentication.",
      "Rebuild the ad classifier: measure the production model as a baseline, correct inconsistent labels, then blend TF-IDF with disclosure features in eleven languages and a fine-tuned XLM-RoBERTa over captions, OCR text, and transcripts. Deploy it as an Azure ML batch endpoint with three classes: organic, questionable, and ad.",
    ],
    outcome:
      "My ongoing work covers brand detections with bounding boxes and video timestamps, alongside evaluation tooling to measure detection quality and investigate missed brands. On a held-out test set, the new ad classifier raised macro F1 from 0.38 to 0.63 (0.69 on posts with text), and posts it is unsure about now land in a middle band for people to check.",
    learning:
      "My focus is the complete path from preparing media to locating a logo, identifying its brand, and evaluating the result. On the ad classifier, the biggest gains came from looking closely at the data, and simple, explainable features still earned their place next to a transformer.",
    workflow: ["Sample media + text", "Detect brands + ads", "Boxes, timestamps + ad score"],
    methods: ["Python", "OWLv2", "Multimodal AI", "Azure OpenAI", "XLM-RoBERTa", "scikit-learn", "Azure Machine Learning", "Microsoft Foundry", "Blob Storage", "Service Bus", "Evaluation"],
    impactNote: "Project description reflects my current role, which began in September 2026. Ad classifier figures come from my offline evaluation on held-out labelled posts.",
    sourceUrl: "https://www.linkedin.com/in/rodrigo-goncalves-figueiredo/details/experience/",
  },
  {
    slug: "atlas",
    number: "02",
    title: "ATLaS",
    category: "AI engineering · Master's thesis at DEUS",
    context: "HR knowledge, made usable",
    summary:
      "An LLM-powered platform that turns scattered talent documents into consistent profiles and evidence-grounded search.",
    cardLine: "From unstructured documents to useful, grounded answers.",
    signal: "62–77%",
    signalLabel: "less manual turnaround effort in evaluation",
    role:
      "I designed and developed ATLaS (Automated Talent Library and Search) during my AI Engineer internship at DEUS, from October 2025 to July 2026, as my master's dissertation project.",
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
    slug: "grounded",
    number: "03",
    title: "Grounded",
    category: "Android app · Personal project",
    context: "A calm daily planner",
    summary:
      "A native Android planner for intentions, moments in the day, focus timers, and a weekly recap, with optional two-way Google Calendar sync.",
    cardLine: "Plan the day, focus on one thing, and look back kindly.",
    signal: "Offline-first",
    signalLabel: "no account, analytics, or ads",
    role:
      "I designed and built Grounded on my own, from product decisions and visual identity to the Android app, release pipeline, and website.",
    problem:
      "Most planners either stay as a list or take over the calendar. I wanted one calm place to write down what matters, give it time in the day, focus on it, and see what actually got done, without handing over my data.",
    approach: [
      "Built a native app with Kotlin, Jetpack Compose, and Room. Intentions have steps, notes, files, repeats, and reminders, and focus timers survive navigation, backgrounding, and process death.",
      "Added two-way Google Calendar sync across several accounts and calendars, with offline queued changes and recovery for duplicate and recurring-event edge cases.",
      "Added on-device semantic event search with a small bundled embedding model, so calendar text never leaves the phone. Releases are built and signed automatically from staging and production branches.",
    ],
    outcome:
      "Grounded is a working app, with signed beta and release builds published automatically and a Google Play listing in preparation. Its impact is described qualitatively.",
    learning:
      "Calm software takes a lot of careful engineering underneath. Sync, time zones, and process death are where an app earns or loses trust.",
    workflow: ["Write an intention", "Give it a moment", "Focus + recap"],
    methods: ["Kotlin", "Jetpack Compose", "Room", "Google Calendar API", "ONNX Runtime", "GitHub Actions", "Product design"],
    impactNote: "Grounded is a personal project.",
    sourceUrl: "https://groundedtasks.vercel.app/",
  },
  {
    slug: "granitos",
    number: "04",
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
    number: "05",
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
