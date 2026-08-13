export type Industry = {
  name: string;
  description: string;
  icon: "flame" | "drill" | "flask" | "refinery" | "bolt" | "factory" | "pipeline" | "gauge";
};

export const industries: Industry[] = [
  {
    name: "Oil & Gas",
    description: "Equipment, materials, and procurement support across upstream and midstream operations.",
    icon: "flame",
  },
  {
    name: "Drilling & Well Services",
    description: "Well testing, separator equipment, and drilling tool product experience for active well sites.",
    icon: "drill",
  },
  {
    name: "Petrochemical",
    description: "Industrial products and mechanical services supporting petrochemical processing facilities.",
    icon: "flask",
  },
  {
    name: "Refineries",
    description: "Equipment and materials sourcing for refinery maintenance, turnarounds, and operations.",
    icon: "refinery",
  },
  {
    name: "Energy",
    description: "Electrical equipment and rotating machinery supporting power generation and energy infrastructure.",
    icon: "bolt",
  },
  {
    name: "Industrial Manufacturing",
    description: "Mechanical fabrication, machining, and industrial materials for manufacturing operations.",
    icon: "factory",
  },
  {
    name: "Pipeline Operations",
    description: "Pipe, tubing, flanges, and fittings for pipeline construction and maintenance projects.",
    icon: "pipeline",
  },
  {
    name: "Mechanical & Rotating Equipment",
    description: "Turbomachinery, motors, and dynamic balancing support for rotating equipment fleets.",
    icon: "gauge",
  },
];
