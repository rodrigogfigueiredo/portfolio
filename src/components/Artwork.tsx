import type { Project } from "@/content/projects";

const STRIPES = ["var(--stripe-1)", "var(--stripe-2)", "var(--stripe-3)", "var(--stripe-4)", "var(--stripe-5)", "var(--stripe-6)"];

// Scattered "dust" and a few four-point stars, placed by hand so the sky feels loose.
const DUST: [number, number, number, boolean][] = [
  [92, 70, 2.4, true], [168, 52, 1.6, false], [232, 96, 1.4, false], [286, 40, 2, false], [338, 118, 1.8, true], [410, 66, 1.5, false],
  [452, 140, 2.2, false], [120, 150, 1.4, false], [204, 172, 1.8, false], [262, 150, 2.4, true], [318, 196, 1.4, false], [392, 210, 2.6, false],
  [470, 228, 1.6, true], [70, 236, 1.6, false], [150, 260, 2, false], [236, 238, 1.4, false], [42, 120, 2.2, true], [486, 92, 1.4, false],
];

function Star({ x, y, size, color, className }: { x: number; y: number; size: number; color: string; className?: string }) {
  const s = size;
  return <path className={className} d={`M${x} ${y - s}C${x + s * 0.12} ${y - s * 0.12} ${x + s * 0.12} ${y - s * 0.12} ${x + s} ${y}C${x + s * 0.12} ${y + s * 0.12} ${x + s * 0.12} ${y + s * 0.12} ${x} ${y + s}C${x - s * 0.12} ${y + s * 0.12} ${x - s * 0.12} ${y + s * 0.12} ${x - s} ${y}C${x - s * 0.12} ${y - s * 0.12} ${x - s * 0.12} ${y - s * 0.12} ${x} ${y - s}Z`} fill={color} />;
}

/** Hero illustration: six concentric stripes sweeping in from the bottom left, a striped sun, and a starry sky. */
export function LabArtwork() {
  // All stripes share one corner centre (240, 410), so the curves stay concentric.
  const stripePath = (i: number) => {
    const x = 60 + 30 * i;
    const r = 180 - 30 * i;
    const top = 230 + 30 * i;
    return `M${x} 600V${top + r}A${r} ${r} 0 0 1 ${x + r} ${top}H1800`;
  };
  return (
    <div className="lab-art" aria-hidden="true">
      <svg className="lab-art__svg" viewBox="0 0 520 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="sun-slits">
            <rect width="520" height="600" fill="#fff" />
            {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="300" y={490 + i * (13 - i)} width="200" height={3 + i * 0.8} fill="#000" />)}
          </mask>
          <linearGradient id="stripe-fade" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset=".8" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
          <mask id="stripe-fade-mask" maskUnits="userSpaceOnUse" x="-200" y="0" width="2200" height="600">
            <rect x="-200" y="0" width="2200" height="600" fill="url(#stripe-fade)" />
          </mask>
          <clipPath id="sun-horizon"><rect x="300" y="400" width="200" height="154" /></clipPath>
        </defs>
        <g className="lab-art__dust">
          {DUST.map(([x, y, r, warm]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={warm ? "var(--stripe-4)" : "var(--dust)"} />)}
        </g>
        <Star className="lab-art__twinkle" x={430} y={120} size={18} color="var(--stripe-4)" />
        <Star className="lab-art__twinkle lab-art__twinkle--late" x={64} y={190} size={13} color="var(--star)" />
        <Star x={312} y={252} size={8} color="var(--dust)" />
        <g className="lab-art__stripes" mask="url(#stripe-fade-mask)">
          {STRIPES.map((color, i) => <path key={color} className="lab-art__stripe" style={{ animationDelay: `${i * 90}ms` }} d={stripePath(i)} stroke={color} strokeWidth="26" fill="none" pathLength={1} />)}
        </g>
        <g clipPath="url(#sun-horizon)">
          <circle className="lab-art__sun" cx="400" cy="484" r="64" fill="var(--sun)" mask="url(#sun-slits)" />
        </g>
      </svg>
      <span className="lab-art__corner">CURIOUS BY DESIGN ↗</span>
    </div>
  );
}

export function ProjectArtwork({ slug }: { slug: Project["slug"] }) {
  if (slug === "influencer-monitor") return <InfluencerMonitorArtwork />;
  if (slug === "atlas") return <AtlasArtwork />;
  if (slug === "grounded") return <GroundedArtwork />;
  if (slug === "granitos") return <GranitosArtwork />;
  return <VisolArtwork />;
}

function InfluencerMonitorArtwork() {
  return (
    <svg className="project-art-svg" viewBox="0 0 680 420" role="img" aria-label="Conceptual illustration of a video frame with a detected product and brand bounding box">
      <defs><linearGradient id="influencer-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--art-gradient-start)" /><stop offset="1" stopColor="var(--art-gradient-end)" /></linearGradient></defs>
      <rect width="680" height="420" rx="28" fill="url(#influencer-bg)" />
      <path d="M0 84h680M0 168h680M0 252h680M0 336h680M85 0v420M170 0v420M255 0v420M340 0v420M425 0v420M510 0v420M595 0v420" stroke="var(--art-grid)" />
      <text x="40" y="49" className="art-label">FRAME / DETECT / IDENTIFY</text>
      <rect x="48" y="79" width="396" height="269" rx="18" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" />
      <path d="M49 122h394" stroke="var(--art-outline)" strokeWidth="2" />
      <circle cx="73" cy="101" r="5" fill="var(--art-accent)" />
      <path d="M90 101h106" stroke="var(--art-rule)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="136" cy="178" r="28" fill="var(--art-soft)" />
      <path d="M79 286c0-58 28-78 57-78s57 20 57 78" fill="var(--art-soft)" />
      <rect x="259" y="173" width="81" height="120" rx="17" fill="var(--art-strong)" />
      <rect x="278" y="156" width="43" height="24" rx="6" fill="var(--art-accent)" />
      <circle cx="299" cy="229" r="19" fill="var(--art-inverse)" />
      <path d="m290 229 6 6 12-14" stroke="var(--art-strong)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="240" y="143" width="120" height="164" rx="7" fill="none" stroke="var(--art-accent)" strokeWidth="3" strokeDasharray="8 5" />
      <path d="M361 225h107m-11-10 11 10-11 10" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="483" y="151" width="150" height="155" rx="15" fill="var(--art-strong)" />
      <text x="501" y="185" className="art-label" style={{ fill: "var(--art-inverse)" }}>BRAND FOUND</text>
      <path d="M503 212h108M503 232h77" stroke="var(--art-inverse)" strokeWidth="6" opacity=".65" strokeLinecap="round" />
      <text x="503" y="277" className="art-label" style={{ fill: "var(--art-inverse)" }}>BOX + TIME</text>
      <path d="M70 371h540" stroke="var(--art-outline)" strokeWidth="3" strokeLinecap="round" />
      <rect x="145" y="363" width="66" height="16" rx="5" fill="var(--art-accent)" />
      <rect x="281" y="363" width="104" height="16" rx="5" fill="var(--art-strong)" />
      <rect x="452" y="363" width="44" height="16" rx="5" fill="var(--art-accent)" />
    </svg>
  );
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

function GroundedArtwork() {
  return (
    <svg className="project-art-svg" viewBox="0 0 680 420" role="img" aria-label="Illustration of a phone showing a daily timeline, a focus timer, and a weekly recap">
      <defs><linearGradient id="grounded-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--art-gradient-start)" /><stop offset="1" stopColor="var(--art-gradient-end)" /></linearGradient></defs>
      <rect width="680" height="420" rx="28" fill="url(#grounded-bg)" />
      <path d="M0 84h680M0 168h680M0 252h680M0 336h680M85 0v420M170 0v420M255 0v420M340 0v420M425 0v420M510 0v420M595 0v420" stroke="var(--art-grid)" />
      <text x="40" y="49" className="art-label">PLAN / FOCUS / RECAP</text>
      <rect x="252" y="62" width="176" height="320" rx="30" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" />
      <path d="M318 80h44" stroke="var(--art-rule)" strokeWidth="5" strokeLinecap="round" />
      <path d="M284 118v220" stroke="var(--art-outline)" strokeWidth="2" strokeDasharray="4 6" />
      <circle cx="284" cy="132" r="8" fill="var(--art-accent)" />
      <rect x="302" y="116" width="104" height="34" rx="9" fill="none" stroke="var(--art-accent)" strokeWidth="2" />
      <path d="M314 133h62" stroke="var(--art-rule)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="284" cy="200" r="8" fill="var(--art-strong)" />
      <rect x="302" y="176" width="104" height="48" rx="9" fill="var(--art-strong)" />
      <path d="M314 194h70M314 210h44" stroke="var(--art-inverse)" strokeWidth="5" opacity=".7" strokeLinecap="round" />
      <circle cx="284" cy="268" r="8" fill="var(--art-soft)" />
      <rect x="302" y="250" width="104" height="36" rx="9" fill="var(--art-soft)" />
      <path d="M314 268h52" stroke="var(--art-rule)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="284" cy="320" r="8" fill="none" stroke="var(--art-outline)" strokeWidth="2" />
      <path d="M302 320h80" stroke="var(--art-rule)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="134" cy="210" r="72" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" />
      <circle cx="134" cy="210" r="54" fill="none" stroke="var(--art-soft)" strokeWidth="12" />
      <path d="M134 156a54 54 0 0 1 51 72" stroke="var(--art-accent)" strokeWidth="12" fill="none" strokeLinecap="round" />
      <text x="106" y="216" className="art-label">FOCUS</text>
      <path d="M210 210h30" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" />
      <path d="M440 210h30" stroke="var(--art-strong)" strokeWidth="3" strokeLinecap="round" />
      <rect x="482" y="120" width="160" height="180" rx="16" fill="var(--art-paper)" stroke="var(--art-outline)" strokeWidth="2" />
      <text x="500" y="150" className="art-label">THIS WEEK</text>
      <rect x="502" y="214" width="14" height="66" rx="5" fill="var(--art-strong)" />
      <rect x="524" y="190" width="14" height="90" rx="5" fill="var(--art-accent)" />
      <rect x="546" y="236" width="14" height="44" rx="5" fill="var(--art-soft)" />
      <rect x="568" y="200" width="14" height="80" rx="5" fill="var(--art-strong)" />
      <rect x="590" y="226" width="14" height="54" rx="5" fill="var(--art-accent)" />
      <rect x="612" y="252" width="14" height="28" rx="5" fill="var(--art-soft)" />
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
