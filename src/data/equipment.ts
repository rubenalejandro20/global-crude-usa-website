import type { InquiryType } from "./inquiry-types";

export type EquipmentImage = {
  src: string;
  alt: string;
};

export type EquipmentCategory = {
  slug: string;
  name: string;
  description: string;
  images: EquipmentImage[];
  inquiryType: InquiryType;
  subject: string;
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "three-phase-separators",
    name: "Three-Phase Separators",
    description: "Horizontal separator equipment for gas, oil, and water separation and well testing support.",
    images: [
      { src: "/images/well-services/well_separator_operational_01.jpg", alt: "Three-phase separator vessel at a well site" },
      { src: "/images/well-services/well_separator_operational_02.jpg", alt: "Separator equipment deployed for well testing" },
      { src: "/images/well-services/separator_maintenance_01.jpg", alt: "Maintenance work on a separator vessel" },
    ],
    inquiryType: "Three-Phase Separator",
    subject: "Request for Quote - Three-Phase Separator",
  },
  {
    slug: "transformers",
    name: "Transformers",
    description: "Single-phase and three-phase transformers for industrial and oilfield electrical systems.",
    images: [
      { src: "/images/electrical/transformer_delivered_green.jpg", alt: "Industrial transformer unit delivered to site" },
      { src: "/images/electrical/transformer_delivered_500kva.jpg", alt: "500 kVA transformer unit" },
      { src: "/images/electrical/transformer_service_coil.jpg", alt: "Transformer coil during service" },
    ],
    inquiryType: "Transformers",
    subject: "Request for Quote - Transformers",
  },
  {
    slug: "cnc-machining",
    name: "CNC & Machining",
    description: "CNC machining, milling, and lathe equipment supporting mechanical fabrication and repair.",
    images: [
      { src: "/images/mechanical/mechanical_cnc_lathe.jpg", alt: "CNC lathe in a machine shop" },
      { src: "/images/mechanical/mechanical_cnc_center_romi.jpg", alt: "CNC machining center" },
      { src: "/images/mechanical/mechanical_cnc_doosan.jpg", alt: "CNC machining equipment" },
    ],
    inquiryType: "Machining Services",
    subject: "Request for Quote - CNC & Machining",
  },
  {
    slug: "balancing-equipment",
    name: "Balancing Equipment",
    description: "Dynamic balancing support for motors, turbines, and centrifugal pumps.",
    images: [
      { src: "/images/mechanical/balancing_rotor_01.jpg", alt: "Rotor prepared for dynamic balancing" },
      { src: "/images/mechanical/balancing_rotor_02.jpg", alt: "Balancing equipment in an industrial shop" },
      { src: "/images/mechanical/balancing_rotor_transport.jpg", alt: "Large rotor being transported for balancing" },
    ],
    inquiryType: "Dynamic Balancing",
    subject: "Request for Quote - Dynamic Balancing",
  },
  {
    slug: "industrial-gaskets",
    name: "Industrial Gaskets",
    description: "Spiral wound and jacketed gaskets for flange connections in oil, gas, and petrochemical service.",
    images: [
      { src: "/images/gaskets/spiral_wound_gaskets_group.jpg", alt: "Spiral wound gaskets in various sizes" },
      { src: "/images/gaskets/jacketed_gaskets_group.jpg", alt: "Jacketed gaskets group" },
      { src: "/images/gaskets/jacketed_gasket_drawing.jpg", alt: "Jacketed gasket technical drawing" },
    ],
    inquiryType: "Industrial Gaskets",
    subject: "Request for Quote - Industrial Gaskets",
  },
  {
    slug: "bolting-tools",
    name: "Bolting Tools",
    description: "Industrial bolting, torque, and tensioning equipment for flange connections.",
    images: [
      { src: "/images/tools/hytorc_bolting_01.jpg", alt: "Hydraulic bolting tool on a flange" },
      { src: "/images/tools/hytorc_bolting_02.jpg", alt: "Industrial bolting equipment" },
      { src: "/images/tools/hytorc_bolting_03.jpg", alt: "Torque tooling staged for field use" },
    ],
    inquiryType: "Industrial Tools",
    subject: "Request for Quote - Bolting Tools",
  },
  {
    slug: "drilling-tools",
    name: "Drilling Tools",
    description: "PDC drilling bits and drilling tool product experience for oil and gas applications.",
    images: [
      { src: "/images/tools/ulterra_drill_bit_01.jpg", alt: "PDC drilling bit" },
      { src: "/images/tools/ulterra_drill_bit_02.jpg", alt: "Close-up of a PDC drill bit cutting structure" },
      { src: "/images/tools/ulterra_drill_bit_03.jpg", alt: "Drilling bit staged for field deployment" },
    ],
    inquiryType: "Industrial Tools",
    subject: "Request for Quote - Drilling Tools",
  },
  {
    slug: "turbomachinery",
    name: "Turbomachinery",
    description: "Industrial turbines and turbomachinery components for rotating equipment applications.",
    images: [
      { src: "/images/turbomachinery/solar_turbine_01.jpg", alt: "Industrial gas turbine unit" },
      { src: "/images/turbomachinery/solar_turbine_02.jpg", alt: "Turbine equipment during field service" },
      { src: "/images/turbomachinery/solar_turbine_03.jpg", alt: "Industrial turbine components during maintenance" },
    ],
    inquiryType: "Turbomachinery",
    subject: "Request for Quote - Turbomachinery",
  },
  {
    slug: "industrial-motors",
    name: "Industrial Motors",
    description: "Industrial motors and rotating equipment for demanding operating environments.",
    images: [
      { src: "/images/turbomachinery/siemens_motor_01.jpg", alt: "Large industrial motor installed at a facility" },
      { src: "/images/turbomachinery/siemens_motor_02.jpg", alt: "Industrial motor equipment staged for installation" },
      { src: "/images/turbomachinery/siemens_motor_03.jpg", alt: "Industrial rotating motor equipment in service" },
    ],
    inquiryType: "Industrial Motors",
    subject: "Request for Quote - Industrial Motors",
  },
  {
    slug: "pipes-tubing",
    name: "Pipes & Tubing",
    description: "Seamless, welded, and galvanized pipe along with production and drilling tubing.",
    images: [{ src: "/images/pipes/pipe_types_banner.jpg", alt: "Assortment of pipe and tubing products" }],
    inquiryType: "Pipes & Tubing",
    subject: "Product Availability Request - Pipes & Tubing",
  },
  {
    slug: "flanges-fittings",
    name: "Flanges & Fittings",
    description: "Flanges, elbows, reducers, tees, couplings, and caps for pipe connection systems.",
    images: [{ src: "/images/pipes/pipe_types_banner.jpg", alt: "Pipe and fitting product range" }],
    inquiryType: "Flanges & Fittings",
    subject: "Product Availability Request - Flanges & Fittings",
  },
  {
    slug: "galvanized-steel-materials",
    name: "Galvanized Steel Materials",
    description: "Galvanized steel poles and structural materials for project and infrastructure needs.",
    images: [
      { src: "/images/materials/galvanized_poles_yard.jpg", alt: "Galvanized steel poles in a storage yard" },
      { src: "/images/materials/galvanized_poles_stack.jpg", alt: "Stack of galvanized steel poles" },
      { src: "/images/materials/galvanized_poles_closeup.jpg", alt: "Close-up of galvanized steel pole material" },
    ],
    inquiryType: "Procurement",
    subject: "Request for Quote - Galvanized Steel Materials",
  },
];
