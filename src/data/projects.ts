import { images } from "@/data/images";
import type { Project, ProjectCategory } from "@/types";

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Interiors",
  "Industrial",
];

export const projects: Project[] = [
  {
    slug: "the-meridian-residence",
    title: "The Meridian Residence",
    category: "Residential",
    serviceSlug: "residential-construction",
    location: "Ahmedabad, Gujarat",
    year: 2025,
    status: "Completed",
    client: "Private Client",
    area: "8,400 sq. ft.",
    duration: "16 months",
    value: "₹14.5 Cr",
    summary:
      "A cantilevered contemporary villa with an infinity-edge pool, framed by expansive glazing and warm stone.",
    overview: [
      "The Meridian Residence is a three-level family villa designed to dissolve the boundary between inside and out. Floor-to-ceiling glazing, deep cantilevered overhangs and a 22-metre infinity pool create a home that feels both monumental and serene.",
      "We delivered the project on a design-and-build basis, coordinating architecture, structure, MEP and landscape under a single programme.",
    ],
    challenge:
      "A 7-metre structural cantilever over the pool deck needed to appear impossibly thin while meeting seismic requirements.",
    solution:
      "Our engineers developed a post-tensioned slab with concealed steel outriggers, keeping the edge profile to just 300 mm.",
    highlights: [
      "7 m post-tensioned cantilever",
      "22 m infinity-edge pool",
      "Smart-home automation throughout",
      "Rainwater harvesting & solar array",
    ],
    image: images.villaPool,
    gallery: [images.villaPool, images.livingRoom, images.terraceInterior, images.kitchen],
    featured: true,
  },
  {
    slug: "aurora-corporate-tower",
    title: "Aurora Corporate Tower",
    category: "Commercial",
    serviceSlug: "commercial-construction",
    location: "GIFT City, Gandhinagar",
    year: 2024,
    status: "Completed",
    client: "Aurora Holdings Pvt. Ltd.",
    area: "3,20,000 sq. ft.",
    duration: "28 months",
    value: "₹210 Cr",
    summary:
      "A 22-storey Grade-A office tower with a high-performance glass facade and LEED Gold certification.",
    overview: [
      "Aurora Corporate Tower is a 22-storey Grade-A office building anchoring a new business district. Its unitised double-glazed facade, column-free floor plates and rooftop amenity deck set a new benchmark for workplaces in the region.",
      "We acted as main contractor, delivering core and shell alongside tenant-ready MEP infrastructure two weeks ahead of programme.",
    ],
    challenge:
      "An aggressive 28-month programme with a fixed tenant move-in date and a constrained urban site.",
    solution:
      "Jump-form core construction with a 6-day floor cycle and just-in-time logistics enabled a two-week early handover.",
    highlights: [
      "LEED Gold certified",
      "6-day structural floor cycle",
      "Unitised glazed facade",
      "Delivered 2 weeks early",
    ],
    image: images.officeTowers,
    gallery: [images.officeTowers, images.facadeUp, images.officeCorridor, images.towersUnderConstruction],
    featured: true,
  },
  {
    slug: "cedar-grove-villas",
    title: "Cedar Grove Villas",
    category: "Residential",
    serviceSlug: "residential-construction",
    location: "Vadodara, Gujarat",
    year: 2024,
    status: "Completed",
    client: "Cedar Grove Developers",
    area: "12 villas · 54,000 sq. ft.",
    duration: "20 months",
    value: "₹48 Cr",
    summary:
      "A gated enclave of twelve timber-clad villas designed around private courtyards and mature landscaping.",
    overview: [
      "Cedar Grove brings warm modernism to a gated community of twelve villas, each organised around a private courtyard with abundant natural light and cross-ventilation.",
      "Repetition allowed us to industrialise key elements — precast stairs, standardised MEP risers and prefabricated timber cladding — without compromising the bespoke feel of each home.",
    ],
    challenge:
      "Delivering twelve individual homes with consistent premium quality across a phased sales programme.",
    solution:
      "A villa-by-villa quality gate system and standardised detailing ensured every home met the same exacting finish.",
    highlights: [
      "12 courtyard villas",
      "Prefabricated timber cladding",
      "Clubhouse & landscaped commons",
      "Phased handovers on schedule",
    ],
    image: images.timberHouse,
    gallery: [images.timberHouse, images.linearHouse, images.livingWarm, images.poolsideHouse],
    featured: true,
  },
  {
    slug: "atelier-office-fit-out",
    title: "Atelier Office Fit-out",
    category: "Interiors",
    serviceSlug: "interior-fit-out",
    location: "Mumbai, Maharashtra",
    year: 2025,
    status: "Completed",
    client: "Atelier Design Co.",
    area: "42,000 sq. ft.",
    duration: "5 months",
    value: "₹18 Cr",
    summary:
      "A light-filled, biophilic workplace across two floors with bespoke joinery and acoustic meeting suites.",
    overview: [
      "Atelier's new headquarters combines open collaborative studios with acoustically isolated focus rooms and a double-height social hub connecting two floors.",
      "Our interiors team delivered the full fit-out — from raised floors and HVAC to custom oak joinery — while the client continued operating from the floor below.",
    ],
    challenge:
      "Executing a full fit-out above a fully occupied office with strict noise and dust limits.",
    solution:
      "Night-shift scheduling for noisy works, negative-pressure dust control and daily client coordination calls.",
    highlights: [
      "Double-height social staircase",
      "Custom oak joinery",
      "NC-30 acoustic meeting suites",
      "Zero lost operating days",
    ],
    image: images.officeOpen,
    gallery: [images.officeOpen, images.officeCorridor, images.meeting, images.livingStyled],
    featured: true,
  },
  {
    slug: "skyline-heights",
    title: "Skyline Heights",
    category: "Residential",
    serviceSlug: "residential-construction",
    location: "Surat, Gujarat",
    year: 2026,
    status: "In Progress",
    client: "Skyline Realty",
    area: "4,80,000 sq. ft.",
    duration: "36 months",
    value: "₹320 Cr",
    summary:
      "Twin 28-storey residential towers with 340 premium apartments and a resort-style podium.",
    overview: [
      "Skyline Heights comprises two 28-storey towers rising above a landscaped podium with clubhouse, pool and sports courts. The development offers 340 three- and four-bedroom apartments.",
      "Construction is progressing ahead of plan, with Tower A structure topped out and facade works underway.",
    ],
    challenge:
      "Coordinating two concurrent tower cores on a tight urban site with a single access point.",
    solution:
      "Staggered core programmes, dual tower cranes and a digital logistics booking system for all deliveries.",
    highlights: [
      "Twin 28-storey towers",
      "340 premium residences",
      "Resort-style podium amenities",
      "Tower A topped out early",
    ],
    image: images.craneTowers,
    gallery: [images.craneTowers, images.structureFrame, images.siteAerial, images.apartmentBlock],
    featured: false,
  },
  {
    slug: "linear-house",
    title: "Linear House",
    category: "Residential",
    serviceSlug: "architectural-design",
    location: "Pune, Maharashtra",
    year: 2023,
    status: "Completed",
    client: "Private Client",
    area: "5,600 sq. ft.",
    duration: "14 months",
    value: "₹9.2 Cr",
    summary:
      "A crisp, linear home of charcoal render and timber, designed and built by our in-house studio.",
    overview: [
      "Linear House is a study in proportion — a long, low composition of charcoal render, warm timber and glass that steps gently with the site's natural contours.",
      "Designed by our architecture studio and built by our residential team, it showcases the value of design and construction working as one.",
    ],
    challenge:
      "A sloping, narrow plot with strict setback requirements limited the buildable footprint.",
    solution:
      "A split-level plan that follows the terrain, maximising volume while staying within height and setback rules.",
    highlights: [
      "Designed & built in-house",
      "Split-level contour plan",
      "Thermally broken glazing",
      "Natural cross-ventilation",
    ],
    image: images.linearHouse,
    gallery: [images.linearHouse, images.livingWarm, images.kitchen, images.whiteHouse],
    featured: false,
  },
  {
    slug: "northgate-logistics-hub",
    title: "Northgate Logistics Hub",
    category: "Industrial",
    serviceSlug: "industrial-infrastructure",
    location: "Sanand, Gujarat",
    year: 2024,
    status: "Completed",
    client: "Northgate Logistics",
    area: "2,50,000 sq. ft.",
    duration: "11 months",
    value: "₹96 Cr",
    summary:
      "A Grade-A logistics hub with 12 m clear height, 40 dock levellers and FM2-grade flooring.",
    overview: [
      "Northgate is a Grade-A warehousing facility built for high-throughput e-commerce operations, featuring 12-metre clear height, 40 dock levellers and laser-screeded super-flat floors.",
      "We delivered the full scope — earthworks, pre-engineered steel, roofing, fire systems and site infrastructure — in just eleven months.",
    ],
    challenge:
      "The client required operational readiness before peak season, leaving an 11-month window for a greenfield site.",
    solution:
      "Parallel earthworks and PEB fabrication, plus prefabricated MEP modules, compressed the programme by 10 weeks.",
    highlights: [
      "12 m clear height",
      "40 dock levellers",
      "FM2 super-flat flooring",
      "Rooftop solar ready",
    ],
    image: images.warehouse,
    gallery: [images.warehouse, images.earthworks, images.industrialPlant, images.welding],
    featured: false,
  },
  {
    slug: "the-pavilion-house",
    title: "The Pavilion House",
    category: "Interiors",
    serviceSlug: "interior-fit-out",
    location: "Udaipur, Rajasthan",
    year: 2025,
    status: "Completed",
    client: "Private Client",
    area: "6,200 sq. ft.",
    duration: "7 months",
    value: "₹6.8 Cr",
    summary:
      "A complete interior transformation of a lakeside home into a calm, gallery-like retreat.",
    overview: [
      "The Pavilion House renovation reimagined a dated lakeside home as a light-filled retreat, with open living spaces flowing onto shaded terraces and a reflecting pool.",
      "Our interiors team handled everything from structural openings to bespoke furniture and art lighting.",
    ],
    challenge:
      "Opening up load-bearing walls in an existing structure to create large, column-free living areas.",
    solution:
      "Carefully staged temporary works and concealed steel transfer beams allowed walls to be removed safely.",
    highlights: [
      "Column-free living pavilion",
      "Bespoke furniture & lighting",
      "Indoor–outdoor terraces",
      "Gallery-grade art lighting",
    ],
    image: images.poolsideHouse,
    gallery: [images.poolsideHouse, images.terraceInterior, images.livingStyled, images.livingWarm],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.serviceSlug === serviceSlug);
}
