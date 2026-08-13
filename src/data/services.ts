import type { InquiryType } from "./inquiry-types";

export type ServiceImage = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string[];
  capabilities: string[];
  technicalSpecs?: string[];
  technicalNote?: string;
  images: ServiceImage[];
  cta: { label: string; inquiryType: InquiryType; subject: string };
  disclaimer?: string;
};

export const services: Service[] = [
  {
    slug: "well-services",
    number: "01",
    name: "Well Services & Well Testing",
    eyebrow: "Well Services",
    summary:
      "Horizontal three-phase separator equipment and well testing support for crude quality improvement and productivity evaluation.",
    description: [
      "Global Crude USA Inc. supports well-site operations with horizontal three-phase separator equipment that divides well fluids into gas, oil, and water for further handling and measurement.",
      "This equipment supports crude-quality improvement applications and well productivity testing, giving operators the field data needed to evaluate a well's performance.",
    ],
    capabilities: [
      "Three-phase separator equipment for gas, oil, and water separation",
      "Well productivity testing (well testing) support",
      "Separator deployment and field positioning",
      "Separator maintenance and service support",
      "Instrumentation support for well testing operations",
      "Fluid separation for crude-quality improvement applications",
    ],
    images: [
      { src: "/images/well-services/well_separator_operational_01.jpg", alt: "Three-phase separator vessel being positioned at a well site with a gas flare in the background" },
      { src: "/images/well-services/well_separator_operational_02.jpg", alt: "Horizontal three-phase separator equipment deployed for well testing operations" },
      { src: "/images/well-services/well_separator_operational_03.jpg", alt: "Separator unit and support piping staged for field operation" },
      { src: "/images/well-services/separator_maintenance_01.jpg", alt: "Technician performing maintenance on separator equipment" },
      { src: "/images/well-services/separator_maintenance_02.jpg", alt: "Separator vessel maintenance and inspection in progress" },
      { src: "/images/well-services/separator_maintenance_03.jpg", alt: "Field service work on three-phase separator components" },
    ],
    cta: {
      label: "Request Separator Information",
      inquiryType: "Three-Phase Separator",
      subject: "Request for Quote - Three-Phase Separator",
    },
  },
  {
    slug: "electrical-equipment",
    number: "02",
    name: "Electrical Equipment & Transformers",
    eyebrow: "Electrical Equipment",
    summary:
      "Single-phase and three-phase transformer procurement, maintenance, and repair support for industrial and oilfield electrical systems.",
    description: [
      "Global Crude USA Inc. supports industrial electrical requirements with transformer procurement, maintenance, and repair capabilities for single-phase and three-phase equipment.",
      "Our team can work from existing equipment specifications, nameplate data, or project drawings to help source or service the electrical equipment an operation requires.",
    ],
    capabilities: [
      "Single-phase and three-phase transformer procurement",
      "Oil-filled transformer maintenance and repair",
      "Industrial electrical equipment sourcing",
      "Support for substation-related electrical components",
    ],
    technicalSpecs: [
      "Transformer procurement support referenced up to 30 MVA",
      "Oil transformer maintenance referenced up to 3,000 kVA",
      "Substation-related capability referenced from 3 MVA",
    ],
    technicalNote:
      "Figures above reflect capability ranges represented in our equipment and service background. Please confirm exact specifications for your project when you submit an inquiry.",
    images: [
      { src: "/images/electrical/transformer_delivered_green.jpg", alt: "Green industrial transformer unit delivered and staged for installation" },
      { src: "/images/electrical/transformer_delivered_500kva.jpg", alt: "500 kVA transformer unit delivered to an industrial site" },
      { src: "/images/electrical/transformer_delivered_1000kva.jpg", alt: "1000 kVA transformer unit delivered to an industrial site" },
      { src: "/images/electrical/transformer_service_interior.jpg", alt: "Interior view of a transformer during service work" },
      { src: "/images/electrical/transformer_service_coil.jpg", alt: "Transformer coil being serviced" },
      { src: "/images/electrical/transformer_service_windings.jpg", alt: "Transformer windings during maintenance" },
    ],
    cta: {
      label: "Request a Quote",
      inquiryType: "Transformers",
      subject: "Request for Quote - Electrical Equipment & Transformers",
    },
  },
  {
    slug: "mechanical-machining",
    number: "03",
    name: "Mechanical & Machining Services",
    eyebrow: "Mechanical Services",
    summary:
      "CNC machining, milling, lathe operations, and industrial fabrication support for equipment repair and mechanical manufacturing.",
    description: [
      "Global Crude USA Inc. supports mechanical manufacturing and equipment repair needs through CNC machining, milling, lathe operations, and conventional machining capabilities.",
      "This mechanical shop capability supports fabrication of replacement parts and components for industrial and petrochemical equipment.",
    ],
    capabilities: [
      "CNC machining and machining center operations",
      "Milling and lathe operations",
      "Conventional machining",
      "Specialized mechanical manufacturing and fabrication",
      "Industrial equipment repair support",
    ],
    images: [
      { src: "/images/mechanical/mechanical_cnc_lathe.jpg", alt: "CNC lathe operating in a mechanical machine shop" },
      { src: "/images/mechanical/mechanical_cnc_center_romi.jpg", alt: "CNC machining center used for industrial part fabrication" },
      { src: "/images/mechanical/mechanical_cnc_doosan.jpg", alt: "CNC machining equipment used for mechanical manufacturing" },
    ],
    cta: {
      label: "Request Machining Information",
      inquiryType: "Machining Services",
      subject: "Request for Quote - Mechanical & Machining Services",
    },
    disclaimer:
      "Machinery shown reflects equipment types represented in our operational background and does not imply an official manufacturer relationship.",
  },
  {
    slug: "dynamic-balancing",
    number: "04",
    name: "Dynamic Balancing",
    eyebrow: "Rotating Equipment",
    summary:
      "Rotor balancing services supporting motors, turbines, and centrifugal pumps used in industrial and oilfield operations.",
    description: [
      "Rotating equipment that runs out of balance leads to excess vibration, premature bearing wear, and unplanned downtime. Global Crude USA Inc. supports dynamic balancing applications for motors, turbines, and centrifugal pumps.",
    ],
    capabilities: [
      "Rotor balancing for industrial motors",
      "Balancing support for turbines",
      "Balancing support for centrifugal pumps",
      "Rotor transport and handling coordination",
    ],
    technicalSpecs: ["Balancing capability referenced up to approximately 10 tons"],
    technicalNote:
      "Capacity figures reflect equipment represented in our operational background. Confirm exact rotor weight and dimensions when submitting a request.",
    images: [
      { src: "/images/mechanical/balancing_rotor_01.jpg", alt: "Industrial rotor prepared for dynamic balancing" },
      { src: "/images/mechanical/balancing_rotor_02.jpg", alt: "Rotor balancing equipment in an industrial shop" },
      { src: "/images/mechanical/balancing_rotor_transport.jpg", alt: "Large rotor being transported for balancing service" },
    ],
    cta: {
      label: "Request Balancing Information",
      inquiryType: "Dynamic Balancing",
      subject: "Request for Quote - Dynamic Balancing",
    },
  },
  {
    slug: "industrial-gaskets",
    number: "05",
    name: "Industrial Gaskets",
    eyebrow: "Gaskets",
    summary:
      "Spiral wound and jacketed gaskets for demanding flange connections across oil, gas, and petrochemical service.",
    description: [
      "Global Crude USA Inc. supports gasket requirements for critical flange connections, including spiral wound gaskets and jacketed gaskets used in oil, gas, and petrochemical service.",
    ],
    capabilities: [
      "Spiral wound gaskets — Type R, Type RIR, Type CG, Type CGI",
      "Jacketed gaskets — single jacket and double jacket construction",
      "Compressed graphite filler options",
      "304 and 316 stainless steel construction",
      "Designs with and without transverse partition",
    ],
    images: [
      { src: "/images/gaskets/spiral_wound_gaskets_group.jpg", alt: "Group of spiral wound gaskets in various sizes and colors" },
      { src: "/images/gaskets/jacketed_gasket_drawing.jpg", alt: "Technical drawing of a jacketed gasket cross-section" },
      { src: "/images/gaskets/jacketed_gaskets_group.jpg", alt: "Group of jacketed gaskets ready for shipment" },
    ],
    cta: {
      label: "Request Gasket Information",
      inquiryType: "Industrial Gaskets",
      subject: "Request for Quote - Industrial Gaskets",
    },
  },
  {
    slug: "industrial-tools",
    number: "06",
    name: "Industrial Tools & Drilling Technology",
    eyebrow: "Tools",
    summary:
      "Industrial bolting and torque systems alongside drilling tool product experience for oil and gas applications.",
    description: [
      "Global Crude USA Inc. supports industrial bolting, torque, and tensioning requirements, along with drilling tool product experience for oil and gas drilling applications.",
    ],
    capabilities: [
      "Industrial bolting systems",
      "Torque and tensioning solutions",
      "Drilling tools for oil & gas applications",
      "PDC drilling bit product experience",
    ],
    images: [
      { src: "/images/tools/hytorc_bolting_01.jpg", alt: "Hydraulic bolting and torque tool applied to a large industrial flange" },
      { src: "/images/tools/hytorc_bolting_02.jpg", alt: "Industrial bolting equipment used on flange connections" },
      { src: "/images/tools/hytorc_bolting_03.jpg", alt: "Torque tooling equipment staged for field use" },
      { src: "/images/tools/ulterra_drill_bit_01.jpg", alt: "PDC drilling bit used in oil and gas drilling applications" },
      { src: "/images/tools/ulterra_drill_bit_02.jpg", alt: "Close-up of a PDC drill bit cutting structure" },
      { src: "/images/tools/ulterra_drill_bit_03.jpg", alt: "Drilling bit staged for field deployment" },
    ],
    cta: {
      label: "Request a Quote",
      inquiryType: "Industrial Tools",
      subject: "Request for Quote - Industrial Tools & Drilling Technology",
    },
    disclaimer:
      "Branded equipment shown reflects product experience with industry equipment and does not imply an authorized distributor, dealer, or official partner relationship unless separately confirmed.",
  },
  {
    slug: "industrial-consumables",
    number: "07",
    name: "Industrial Consumables",
    eyebrow: "Consumables",
    summary:
      "Drilling and production thread compounds alongside industrial fire-response and safety equipment.",
    description: [
      "Global Crude USA Inc. supports industrial consumable requirements, including drilling and production thread compounds, and fire-response and environmental safety equipment used across oilfield and industrial sites.",
    ],
    capabilities: [
      "Drilling and production thread compounds",
      "Industrial consumables sourcing",
      "Fire-response equipment",
      "Industrial safety and environmental response products",
    ],
    images: [
      { src: "/images/consumables/bestolife_products.jpg", alt: "Industrial thread compound products used in drilling and production applications" },
      { src: "/images/consumables/fire_system_equipment.jpg", alt: "Industrial fire suppression system equipment" },
      { src: "/images/consumables/fire_suppression_foam.jpg", alt: "Fire suppression foam equipment for industrial safety response" },
      { src: "/images/consumables/firefighters_response.jpg", alt: "Fire response team operating industrial safety equipment" },
    ],
    cta: {
      label: "Request a Quote",
      inquiryType: "Procurement",
      subject: "Request for Quote - Industrial Consumables",
    },
    disclaimer:
      "Branded consumable products shown reflect product experience and do not imply an official dealership or distribution relationship unless separately confirmed.",
  },
  {
    slug: "turbomachinery-motors",
    number: "08",
    name: "Turbomachinery & Industrial Motors",
    eyebrow: "Turbomachinery",
    summary:
      "Procurement, installation, and commissioning support for industrial turbines, rotating equipment, and motors.",
    description: [
      "Global Crude USA Inc. supports turbomachinery and industrial motor requirements with equipment procurement, installation support, commissioning support, and technical coordination.",
    ],
    capabilities: [
      "Industrial turbine and turbomachinery product experience",
      "Industrial motor and rotating equipment sourcing",
      "Equipment procurement coordination",
      "Installation and commissioning support",
      "Technical coordination with project teams",
    ],
    images: [
      { src: "/images/turbomachinery/solar_turbine_01.jpg", alt: "Industrial gas turbine unit in an operating facility" },
      { src: "/images/turbomachinery/solar_turbine_02.jpg", alt: "Turbine equipment during field service" },
      { src: "/images/turbomachinery/solar_turbine_03.jpg", alt: "Industrial turbine components during maintenance" },
      { src: "/images/turbomachinery/siemens_motor_01.jpg", alt: "Large industrial motor installed at a facility" },
      { src: "/images/turbomachinery/siemens_motor_02.jpg", alt: "Industrial motor equipment staged for installation" },
      { src: "/images/turbomachinery/siemens_motor_03.jpg", alt: "Industrial rotating motor equipment in service" },
    ],
    cta: {
      label: "Request a Quote",
      inquiryType: "Turbomachinery",
      subject: "Request for Quote - Turbomachinery & Industrial Motors",
    },
    disclaimer:
      "Branded turbine and motor equipment shown reflects product and service experience and does not imply an official representative relationship unless separately confirmed.",
  },
  {
    slug: "pipes-tubing",
    number: "09",
    name: "Pipes, Tubing, Flanges & Fittings",
    eyebrow: "Pipes & Tubing",
    summary:
      "Seamless, welded, and galvanized pipe, production and drilling tubing, and a full range of flanges and fittings.",
    description: [
      "Pipes and tubing form one of Global Crude USA Inc.'s core product categories. We support sourcing for seamless and welded pipe, production and drilling tubing, and the flanges and fittings that connect them.",
    ],
    capabilities: [
      "Seamless and welded pipe",
      "Galvanized pipe",
      "Production tubing and drilling pipe",
      "Suction pipe and stainless tubing",
      "Flanges, elbows, reducers, tees, couplings, and caps",
      "A105 connections and A105 flanges",
    ],
    technicalSpecs: ["ASTM A106 Grade B", "API 5L", "ASTM A53", "SCH40 / STD"],
    technicalNote:
      "Specifications listed reflect product categories represented in our sourcing background. Confirm grade, schedule, and quantity availability for your specific project.",
    images: [
      { src: "/images/pipes/pipe_types_banner.jpg", alt: "Assortment of pipe and tubing products including coated pipe, drill pipe, and stainless tubing" },
    ],
    cta: {
      label: "Request Availability",
      inquiryType: "Pipes & Tubing",
      subject: "Product Availability Request - Pipes & Tubing",
    },
  },
  {
    slug: "materials-equipment",
    number: "10",
    name: "Materials & Industrial Equipment",
    eyebrow: "Materials & Equipment",
    summary:
      "Galvanized steel poles, structural materials, and industrial equipment sourcing for project and infrastructure needs.",
    description: [
      "Global Crude USA Inc. supports project material needs including galvanized steel poles and structural industrial materials, along with procurement of specialized industrial equipment.",
    ],
    capabilities: [
      "Galvanized steel poles",
      "Structural industrial materials",
      "Specialized industrial equipment sourcing",
      "Project material procurement",
    ],
    images: [
      { src: "/images/materials/galvanized_pole_section.jpg", alt: "Cross-section detail of a galvanized steel pole" },
      { src: "/images/materials/galvanized_poles_stack.jpg", alt: "Stack of galvanized steel poles ready for shipment" },
      { src: "/images/materials/galvanized_pole_endmark.jpg", alt: "End detail of a galvanized steel pole showing markings" },
      { src: "/images/materials/galvanized_poles_yard.jpg", alt: "Galvanized steel poles staged in an industrial storage yard" },
      { src: "/images/materials/galvanized_poles_black_stack.jpg", alt: "Stacked steel poles at an industrial materials yard" },
      { src: "/images/materials/galvanized_poles_closeup.jpg", alt: "Close-up view of galvanized steel pole material" },
    ],
    cta: {
      label: "Request Availability",
      inquiryType: "Procurement",
      subject: "Request for Quote - Materials & Industrial Equipment",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
