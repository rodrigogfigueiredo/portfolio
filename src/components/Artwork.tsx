import type { Project } from "@/content/projects";

export function LabArtwork() {
  return (
    <div className="lab-art" aria-hidden="true">
      <div className="lab-art__orbit lab-art__orbit--outer" />
      <div className="lab-art__orbit lab-art__orbit--inner" />
      <div className="lab-art__center">
        <span className="lab-art__spark">✳</span>
        <span>THE LAB</span>
      </div>
      <div className="lab-art__satellite lab-art__satellite--one"><span className="satellite-dot" /> Observe <span>01</span></div>
      <div className="lab-art__satellite lab-art__satellite--two"><span className="satellite-dot" /> Make <span>02</span></div>
      <div className="lab-art__satellite lab-art__satellite--three"><span className="satellite-dot" /> Learn <span>03</span></div>
      <span className="lab-art__sparkle lab-art__sparkle--one">✦</span>
      <span className="lab-art__sparkle lab-art__sparkle--two">✳</span>
      <span className="lab-art__corner">CURIOUS BY DESIGN ↗</span>
    </div>
  );
}

export function ProjectArtwork({ slug }: { slug: Project["slug"] }) {
  if (slug === "atlas") return <AtlasArtwork />;
  if (slug === "granitos") return <GranitosArtwork />;
  return <VisolArtwork />;
}

function AtlasArtwork() {
  return (
    <svg className="project-art-svg" viewBox="0 0 680 420" role="img" aria-label="Illustration of documents becoming structured profiles and search results">
      <defs>
        <linearGradient id="atlas-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--art-gradient-start)" /><stop offset="1" stopColor="var(--art-gradient-end)" /></linearGradient>
      </defs>
      <rect width="680" height="420" rx="28" fill="url(#atlas-bg)" />
      <path d="M0 80h680M0 168h680M0 256h680M0 344h680M85 0v420M170 0v420M255 0v420M340 0v420M425 0v420M510 0v420M595 0v420" stroke="var(--art-grid)" strokeWidth="1" />
      <text x="40" y="48" className="art-label">INPUT / 01</text>
      <text x="524" y="48" className="art-label">OUTPUT / 03</text>
      <g transform="rotate(-8 150 206)"><rect x="58" y="107" width="170" height="204" rx="12" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" /><rect x="78" y="133" width="70" height="10" rx="5" fill="var(--art-accent)" /><path d="M78 169h130M78 188h102M78 207h118M78 245h75" stroke="var(--art-rule)" strokeWidth="8" strokeLinecap="round" /><rect x="78" y="269" width="56" height="23" rx="6" fill="var(--art-soft)" /></g>
      <path d="M242 210h75m-12-10 12 10-12 10" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="363" cy="210" r="51" fill="var(--art-strong)" /><circle cx="363" cy="210" r="32" fill="none" stroke="var(--art-inverse)" strokeWidth="2" strokeDasharray="4 6" /><path d="m350 212 9 9 18-22" stroke="var(--art-inverse)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="326" y="286" className="art-label">VALIDATE / 02</text>
      <path d="M417 210h55m-12-10 12 10-12 10" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="486" y="100" width="157" height="102" rx="12" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" /><circle cx="511" cy="132" r="12" fill="var(--art-soft)" /><path d="M534 128h81M534 143h63M504 173h113" stroke="var(--art-rule)" strokeWidth="7" strokeLinecap="round" />
      <rect x="501" y="223" width="143" height="91" rx="12" fill="var(--art-strong)" /><circle cx="530" cy="255" r="12" fill="none" stroke="var(--art-inverse)" strokeWidth="3" /><path d="m539 264 9 9" stroke="var(--art-inverse)" strokeWidth="3" strokeLinecap="round" /><path d="M558 251h56M518 290h96" stroke="var(--art-inverse)" strokeWidth="6" opacity=".7" strokeLinecap="round" />
      <circle cx="281" cy="116" r="5" fill="var(--art-accent)" /><path d="m442 91 7 7m0-7-7 7" stroke="var(--art-accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function GranitosArtwork() {
  return (
    <svg className="project-art-svg" viewBox="0 0 680 420" role="img" aria-label="Illustration of quarry production flowing into stock and salary records">
      <defs><linearGradient id="granitos-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--art-gradient-start)" /><stop offset="1" stopColor="var(--art-gradient-end)" /></linearGradient></defs>
      <rect width="680" height="420" rx="28" fill="url(#granitos-bg)" />
      <path d="M0 84h680M0 168h680M0 252h680M0 336h680M85 0v420M170 0v420M255 0v420M340 0v420M425 0v420M510 0v420M595 0v420" stroke="var(--art-grid)" strokeWidth="1" />
      <text x="42" y="51" className="art-label">A CONNECTED WORKFLOW</text>
      <path d="M179 208h47m-10-9 10 9-10 9M438 208h45m-10-9 10 9-10 9" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="48" y="123" width="130" height="174" rx="13" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" /><path d="m77 212 36-59 36 59Z" fill="var(--art-soft)" stroke="var(--art-strong)" strokeWidth="2" /><path d="M70 239h86M70 259h62" stroke="var(--art-rule)" strokeWidth="8" strokeLinecap="round" /><text x="64" y="326" className="art-label">PRODUCTION</text>
      <rect x="230" y="99" width="208" height="219" rx="15" fill="var(--art-strong)" /><path d="M260 151h148M260 172h115" stroke="var(--art-inverse)" strokeWidth="8" opacity=".7" strokeLinecap="round" /><rect x="260" y="201" width="49" height="67" rx="6" fill="var(--art-inverse)" opacity=".45" /><rect x="321" y="186" width="49" height="82" rx="6" fill="var(--art-inverse)" opacity=".7" /><rect x="382" y="220" width="28" height="48" rx="6" fill="var(--art-inverse)" /><text x="252" y="347" className="art-label">LIVE STOCK + HOURS</text>
      <rect x="488" y="123" width="145" height="174" rx="13" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" /><path d="M514 164h92M514 186h77M514 208h84" stroke="var(--art-rule)" strokeWidth="7" strokeLinecap="round" /><path d="m519 249 18 17 27-34" fill="none" stroke="var(--art-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /><text x="515" y="326" className="art-label">MONTHLY REVIEW</text>
      <circle cx="90" cy="76" r="6" fill="var(--art-accent)" /><circle cx="609" cy="349" r="7" fill="var(--art-accent)" />
    </svg>
  );
}

function VisolArtwork() {
  const cells = Array.from({ length: 28 }, (_, index) => index);
  return (
    <svg className="project-art-svg" viewBox="0 0 680 420" role="img" aria-label="Illustration of a sample calendar with time, overtime, and leave records">
      <defs><linearGradient id="visol-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--art-gradient-start)" /><stop offset="1" stopColor="var(--art-gradient-end)" /></linearGradient></defs>
      <rect width="680" height="420" rx="28" fill="url(#visol-bg)" />
      <path d="M0 84h680M0 168h680M0 252h680M0 336h680M85 0v420M170 0v420M255 0v420M340 0v420M425 0v420M510 0v420M595 0v420" stroke="var(--art-grid)" strokeWidth="1" />
      <rect x="72" y="61" width="536" height="300" rx="19" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" />
      <path d="M73 127h534" stroke="var(--art-outline)" strokeWidth="2" /><circle cx="105" cy="94" r="8" fill="var(--art-accent)" /><text x="126" y="101" className="art-label">SAMPLE MONTH / TIME RECORDS</text>
      <rect x="451" y="81" width="122" height="29" rx="14" fill="var(--art-soft)" /><text x="473" y="100" className="art-label">REVIEWED ✓</text>
      {cells.map((cell) => {
        const column = cell % 7;
        const row = Math.floor(cell / 7);
        const x = 99 + column * 70;
        const y = 152 + row * 47;
        const highlighted = [2, 3, 9, 16, 17, 23].includes(cell);
        const outlined = [12, 25].includes(cell);
        return <rect key={cell} x={x} y={y} width="51" height="33" rx="8" fill={highlighted ? "var(--art-strong)" : outlined ? "var(--art-soft)" : "var(--art-cell)"} stroke={outlined ? "var(--art-accent)" : "none"} strokeWidth="2" />;
      })}
      <circle cx="106" cy="374" r="5" fill="var(--art-strong)" /><text x="119" y="379" className="art-label">HOURS</text><circle cx="211" cy="374" r="5" fill="var(--art-accent)" /><text x="224" y="379" className="art-label">EXCEPTIONS</text>
    </svg>
  );
}
