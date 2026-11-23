import {
  Building2,
  ClipboardCheck,
  Clock,
  Compass,
  Factory,
  House,
  Layers,
  PaintRoller,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { images } from "@/data/images";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    shortTitle: "Residential",
    icon: House,
    summary:
      "Bespoke villas, private residences and luxury apartments crafted with architectural precision and enduring materials.",
    description: [
      "From private villas to boutique apartment communities, we build homes that balance architectural ambition with everyday comfort. Every residence begins with a deep understanding of how you live — then we engineer and craft it to last for generations.",
      "Our residential teams manage the full journey: structural design, approvals, construction, MEP integration and premium finishing — so you deal with one accountable partner from groundbreaking to handover.",
    ],
    image: images.modernHouseDusk,
    gallery: [images.villaPool, images.whiteVilla, images.livingRoom],
    offerings: [
      "Custom villas & private residences",
      "Luxury apartments & townhouses",
      "Structural design & engineering",
      "Turnkey design-and-build delivery",
      "Landscape & outdoor living",
      "Smart-home & MEP integration",
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Premium finishes",
        description: "Curated material palettes and skilled artisans for flawless detailing.",
      },
      {
        icon: ShieldCheck,
        title: "10-year structural warranty",
        description: "Engineered for longevity and backed by a decade of structural cover.",
      },
      {
        icon: Clock,
        title: "Programme certainty",
        description: "Milestone-based schedules with weekly photo and progress reports.",
      },
    ],
    process: [
      { title: "Brief & site study", description: "Understanding your lifestyle, plot and aspirations." },
      { title: "Design & approvals", description: "Architecture, structure and statutory approvals." },
      { title: "Build", description: "Structure, envelope, services and finishes." },
      { title: "Handover", description: "Snag-free walkthrough, documentation and warranty." },
    ],
    faqs: [
      {
        question: "How long does it take to build a custom villa?",
        answer:
          "A typical 4,000–6,000 sq. ft. villa takes 12–18 months from approvals to handover, depending on design complexity and finishes.",
      },
      {
        question: "Can you work with my existing architect?",
        answer:
          "Absolutely. We regularly collaborate with independent architects and provide value-engineering and buildability input during design.",
      },
      {
        question: "Do you offer fixed-price contracts?",
        answer:
          "Yes. Once drawings are finalised we provide a fixed, itemised contract sum with clearly defined allowances.",
      },
    ],
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    shortTitle: "Commercial",
    icon: Building2,
    summary:
      "Corporate offices, retail and mixed-use developments delivered on schedule with zero compromise on quality or safety.",
    description: [
      "We deliver commercial buildings that work as hard as the businesses inside them — efficient to operate, impressive to visit and engineered for flexibility.",
      "Our commercial division brings proven systems for complex logistics, phased delivery and live-environment works, keeping your project and your operations moving.",
    ],
    image: images.officeTowers,
    gallery: [images.towersUnderConstruction, images.facadeUp, images.officeOpen],
    offerings: [
      "Corporate offices & campuses",
      "Retail & hospitality buildings",
      "Mixed-use developments",
      "Core & shell construction",
      "Facade & glazing systems",
      "Phased & live-site works",
    ],
    benefits: [
      {
        icon: Clock,
        title: "Fast-track delivery",
        description: "Overlapping design and build phases to accelerate your opening date.",
      },
      {
        icon: Wallet,
        title: "Cost control",
        description: "Open-book costing and value engineering without sacrificing quality.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance assured",
        description: "Fire, structural and accessibility compliance managed end to end.",
      },
    ],
    process: [
      { title: "Feasibility", description: "Site analysis, budgets and programme planning." },
      { title: "Pre-construction", description: "Design coordination, procurement and approvals." },
      { title: "Construction", description: "Structure, envelope, MEP and fit-out." },
      { title: "Commissioning", description: "Testing, handover and facility onboarding." },
    ],
    faqs: [
      {
        question: "Do you handle design-and-build for commercial projects?",
        answer:
          "Yes. We offer both design-and-build and build-only contracts, with in-house architects and engineers available.",
      },
      {
        question: "Can you work around an operating business?",
        answer:
          "We specialise in phased, live-environment works with strict safety segregation and out-of-hours scheduling.",
      },
      {
        question: "What size projects do you undertake?",
        answer:
          "Our commercial projects typically range from 20,000 to 500,000 sq. ft. in built-up area.",
      },
    ],
  },
  {
    slug: "interior-fit-out",
    title: "Interior Fit-out & Renovation",
    shortTitle: "Interiors",
    icon: PaintRoller,
    summary:
      "Refined interiors and transformative renovations for homes, workplaces and hospitality spaces.",
    description: [
      "Great interiors are felt before they are seen. Our fit-out team turns shells and dated spaces into calm, functional environments with meticulous joinery, lighting and finishes.",
      "Whether it is a single-floor office or a full home renovation, we manage design, procurement and installation with minimal disruption.",
    ],
    image: images.livingRoom,
    gallery: [images.livingWarm, images.kitchen, images.officeOpen],
    offerings: [
      "Workplace & office fit-outs",
      "Luxury home interiors",
      "Kitchen & bathroom renovation",
      "Bespoke joinery & millwork",
      "Lighting & acoustic design",
      "Hospitality & retail interiors",
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Design-led detailing",
        description: "Material, light and proportion considered in every elevation.",
      },
      {
        icon: Clock,
        title: "Minimal disruption",
        description: "Carefully sequenced works for occupied homes and offices.",
      },
      {
        icon: Layers,
        title: "In-house joinery",
        description: "Our own workshop for precise, bespoke cabinetry and millwork.",
      },
    ],
    process: [
      { title: "Discovery", description: "Space audit, brief and mood direction." },
      { title: "Concept & 3D", description: "Layouts, material boards and photoreal renders." },
      { title: "Fit-out", description: "Civil, services, joinery and finishes." },
      { title: "Styling & handover", description: "Final styling, snagging and care guide." },
    ],
    faqs: [
      {
        question: "Do you provide 3D visualisations before work starts?",
        answer:
          "Yes. Every interior project includes photoreal 3D renders and material boards for approval before execution.",
      },
      {
        question: "Can I stay in my home during renovation?",
        answer:
          "For partial renovations, often yes. We plan phased works and dust-controlled zones to keep your home liveable.",
      },
      {
        question: "Do you supply furniture and décor?",
        answer:
          "We offer full turnkey interiors including loose furniture, lighting, soft furnishings and styling.",
      },
    ],
  },
  {
    slug: "architectural-design",
    title: "Architectural Design & Planning",
    shortTitle: "Design",
    icon: PencilRuler,
    summary:
      "Concept design, technical drawings and approvals from an in-house studio that understands how buildings are built.",
    description: [
      "Our architecture studio designs with construction in mind. That means beautiful, buildable concepts that respect your budget and programme from day one.",
      "From massing studies to construction documentation and statutory approvals, our designers and engineers work side by side with site teams for seamless delivery.",
    ],
    image: images.blueprint,
    gallery: [images.whiteArchitecture, images.stackedHouse, images.meeting],
    offerings: [
      "Concept & schematic design",
      "3D visualisation & walkthroughs",
      "Structural & MEP engineering",
      "Municipal approvals & permits",
      "Construction documentation",
      "Value engineering",
    ],
    benefits: [
      {
        icon: Compass,
        title: "Buildable design",
        description: "Concepts shaped by real construction knowledge and costs.",
      },
      {
        icon: Wallet,
        title: "Budget alignment",
        description: "Live cost feedback at every design stage — no surprises.",
      },
      {
        icon: ClipboardCheck,
        title: "Approvals handled",
        description: "We navigate permits and statutory approvals on your behalf.",
      },
    ],
    process: [
      { title: "Brief", description: "Goals, site constraints and budget framing." },
      { title: "Concept", description: "Massing options, sketches and 3D studies." },
      { title: "Development", description: "Detailed design, engineering and costing." },
      { title: "Documentation", description: "Approval and construction drawing sets." },
    ],
    faqs: [
      {
        question: "Can I use your design service without construction?",
        answer:
          "Yes. Our studio offers standalone design packages, though most clients benefit from continuing with us into construction.",
      },
      {
        question: "How long does the design phase take?",
        answer:
          "Typically 8–14 weeks for a residence and 3–6 months for larger commercial developments, including approvals.",
      },
      {
        question: "Do you design sustainable buildings?",
        answer:
          "Yes. We integrate passive design, daylighting, efficient MEP and IGBC-aligned strategies into our work.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortTitle: "Management",
    icon: ClipboardCheck,
    summary:
      "Independent project and cost management that keeps complex builds on time, on budget and to specification.",
    description: [
      "Large projects succeed or fail on coordination. Our project managers act as your advocate — controlling cost, programme, quality and risk across every consultant and contractor.",
      "With transparent dashboards, weekly reporting and rigorous change control, you get complete visibility and confidence at every stage.",
    ],
    image: images.engineersOnSite,
    gallery: [images.siteAerial, images.siteWorkers, images.craneTowers],
    offerings: [
      "Programme planning & scheduling",
      "Cost planning & control",
      "Tendering & procurement",
      "Quality assurance audits",
      "Health & safety management",
      "Contract administration",
    ],
    benefits: [
      {
        icon: ClipboardCheck,
        title: "Full visibility",
        description: "Weekly dashboards covering cost, programme and quality.",
      },
      {
        icon: Wallet,
        title: "Budget discipline",
        description: "Formal change control and cost-to-complete forecasting.",
      },
      {
        icon: ShieldCheck,
        title: "Risk management",
        description: "Proactive risk registers and mitigation planning.",
      },
    ],
    process: [
      { title: "Mobilise", description: "Governance, reporting and baseline programme." },
      { title: "Procure", description: "Tendering and contractor appointments." },
      { title: "Control", description: "Cost, quality and programme oversight." },
      { title: "Close-out", description: "Handover, final accounts and lessons learned." },
    ],
    faqs: [
      {
        question: "Can you manage a project built by another contractor?",
        answer:
          "Yes. We provide independent client-side project management on projects delivered by third-party contractors.",
      },
      {
        question: "What reporting will I receive?",
        answer:
          "A weekly progress report with photos, programme status, cost tracking and an issues/risk log, plus monthly review meetings.",
      },
      {
        question: "How are your fees structured?",
        answer:
          "Fees are typically a percentage of construction value or a fixed monthly fee, agreed transparently upfront.",
      },
    ],
  },
  {
    slug: "industrial-infrastructure",
    title: "Industrial & Infrastructure",
    shortTitle: "Industrial",
    icon: Factory,
    summary:
      "Warehouses, factories and site infrastructure engineered for performance, scale and operational efficiency.",
    description: [
      "Industrial facilities demand precision at scale. We build warehouses, manufacturing plants and site infrastructure engineered around your operational workflow.",
      "From earthworks and pre-engineered steel structures to heavy-duty flooring and utilities, we deliver robust facilities ready for operation on day one.",
    ],
    image: images.earthworks,
    gallery: [images.warehouse, images.industrialPlant, images.welding],
    offerings: [
      "Warehouses & logistics parks",
      "Manufacturing facilities",
      "Pre-engineered steel buildings",
      "Earthworks & site development",
      "Roads, drainage & utilities",
      "Heavy-duty industrial flooring",
    ],
    benefits: [
      {
        icon: Clock,
        title: "Speed to operation",
        description: "Pre-engineered systems that shorten build programmes.",
      },
      {
        icon: Layers,
        title: "Engineered to scale",
        description: "Structures designed for future expansion and heavy loads.",
      },
      {
        icon: ShieldCheck,
        title: "Industrial safety",
        description: "Strict HSE protocols for high-risk construction activities.",
      },
    ],
    process: [
      { title: "Site & ops study", description: "Workflow, loads and utility requirements." },
      { title: "Engineering", description: "Structural, civil and services design." },
      { title: "Construction", description: "Groundworks, steel, envelope and services." },
      { title: "Commissioning", description: "Testing, certification and handover." },
    ],
    faqs: [
      {
        question: "Do you build pre-engineered steel buildings?",
        answer:
          "Yes. We design and erect PEB structures for warehouses and factories, significantly reducing build time.",
      },
      {
        question: "Can you handle land development and infrastructure?",
        answer:
          "We undertake earthworks, internal roads, storm-water drainage and utility networks for industrial parks.",
      },
      {
        question: "Which industries do you work with?",
        answer:
          "Logistics, manufacturing, food processing, pharmaceuticals and engineering — each with tailored compliance needs.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
